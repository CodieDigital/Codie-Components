import { useMemo, useRef } from 'react';
import { unstable_batchedUpdates } from 'react-dom';

import SyntheticChangeError from '../errors/SyntheticChangeError';
import setInputAttributes from '../utils/setInputAttributes';

import type {
  CustomInputEvent,
  CustomInputEventHandler,
  ExtendedHTMLInputElement,
  Init,
  InputType,
  Tracking,
} from '../types';

const TYPES = ['text', 'email', 'tel', 'search', 'url'];

interface Handler {
  onFocus: () => void;
  onBlur: () => void;
  onInput: (event: Event) => void;
}

function proxy(
  inputRef: React.MutableRefObject<ExtendedHTMLInputElement | null>,
  init: Init,
  { onFocus, onBlur, onInput }: Handler,
) {
  return new Proxy(inputRef, {
    set(target, property, inputElement: ExtendedHTMLInputElement | null) {
      if (property !== 'current') {
        return false;
      }

      const isValidType = inputElement !== null && TYPES.includes(inputElement.type);

      if (process.env.NODE_ENV !== 'production' && inputElement !== null && !isValidType) {
        console.warn(`Warn: The input element type does not match one of the types: ${TYPES.join(', ')}.`);
      }

      if (inputElement !== inputRef.current) {
        if (inputRef.current !== null) {
          inputRef.current.removeEventListener('focus', onFocus);
          inputRef.current.removeEventListener('blur', onBlur);
          inputRef.current.removeEventListener('input', onInput);
        }

        if (inputElement !== null && isValidType) {
          const { controlled = false, initialValue = '' } = inputElement._wrapperState ?? {};

          const initResult = init({ controlled, initialValue: inputElement.value || initialValue });
       
          setInputAttributes(inputElement, { value: initResult.value });

          if (document.activeElement === inputElement) {
            onFocus();
          }

          inputElement.addEventListener('focus', onFocus);
          inputElement.addEventListener('blur', onBlur);
          inputElement.addEventListener('input', onInput);
        }
      }

      target[property] = inputElement;

      return true;
    },
  });
}

interface UseInputParam<D> {
  init: Init;
  tracking: Tracking<D>;
  eventType?: string;
  eventHandler?: CustomInputEventHandler<CustomInputEvent<D>>;
}

export default function useInput<D = unknown>({
  init,
  tracking,
  eventType,
  eventHandler,
}: UseInputParam<D>): React.MutableRefObject<HTMLInputElement | null> {
  const selection = useRef({
    timeoutId: -1,
    fallbackTimeoutId: -1,
    cachedTimeoutId: -1,
    start: 0,
    end: 0,
  });

  const dispatchedCustomInputEvent = useRef(true);

  const inputRef = useRef<ExtendedHTMLInputElement | null>(null);

  const props = useRef({
    init,
    tracking,
    eventType,
    eventHandler,
  });

  props.current.init = init;
  props.current.tracking = tracking;
  props.current.eventType = eventType;
  props.current.eventHandler = eventHandler;

  return useMemo(() => {
    return proxy(inputRef, props.current.init, {
    
      onFocus() {
        const setSelection = () => {
          if (dispatchedCustomInputEvent.current) {
            selection.current.start = inputRef.current?.selectionStart ?? 0;
            selection.current.end = inputRef.current?.selectionEnd ?? 0;

            selection.current.timeoutId = window.setTimeout(setSelection);
          } else {
            selection.current.fallbackTimeoutId = window.setTimeout(setSelection);
          }
        };

        selection.current.timeoutId = window.setTimeout(setSelection);
      },

      onBlur() {
        window.clearTimeout(selection.current.timeoutId);
        window.clearTimeout(selection.current.fallbackTimeoutId);

        selection.current.timeoutId = -1;
        selection.current.fallbackTimeoutId = -1;
        selection.current.cachedTimeoutId = -1;
      },

      onInput(event) {
        const inputElement = inputRef.current;

        if (inputElement === null) {
          return;
        }

        try {
          if (selection.current.cachedTimeoutId === selection.current.timeoutId) {
            throw new SyntheticChangeError('The input selection has not been updated.');
          }

          selection.current.cachedTimeoutId = selection.current.timeoutId;

          const { value, selectionStart, selectionEnd } = inputElement;

          if (selectionStart === null || selectionEnd === null) {
            throw new SyntheticChangeError('The selection attributes have not been initialized.');
          }

          const previousValue = inputElement._valueTracker?.getValue?.() ?? '';
          let inputType: InputType | undefined;

          if (selectionStart > selection.current.start) {
            inputType = 'insert';
          } else if (selectionStart <= selection.current.start && selectionStart < selection.current.end) {
            inputType = 'deleteBackward';
          } else if (selectionStart === selection.current.end && value.length < previousValue.length) {
            inputType = 'deleteForward';
          }

          if (
            inputType === undefined ||
            ((inputType === 'deleteBackward' || inputType === 'deleteForward') && value.length > previousValue.length)
          ) {
            throw new SyntheticChangeError('Input type detection error.');
          }

          let addedValue = '';
          let deletedValue = '';
          let changeStart = selection.current.start;
          let changeEnd = selection.current.end;

          if (inputType === 'insert') {
            addedValue = value.slice(selection.current.start, selectionStart);
          } else {
            const countDeleted = previousValue.length - value.length;

            changeStart = selectionStart;
            changeEnd = selectionStart + countDeleted;

            deletedValue = previousValue.slice(changeStart, changeEnd);
          }

          const trackingResult = props.current.tracking({
            inputType,
            previousValue,
            value,
            addedValue,
            deletedValue,
            changeStart,
            changeEnd,
            selectionStart,
            selectionEnd,
          });

          setInputAttributes(inputElement, {
            value: trackingResult.value,
            selectionStart: trackingResult.selectionStart,
            selectionEnd: trackingResult.selectionEnd,
          });

          const customEventType = props.current.eventType;
          const customEventHandler = props.current.eventHandler;

          if (typeof customEventType === 'string' && customEventHandler) {
            const { value, selectionStart, selectionEnd } = inputElement;

            dispatchedCustomInputEvent.current = false;
    
            requestAnimationFrame(() => {

              setInputAttributes(inputElement, {
                value,
                selectionStart: selectionStart ?? value.length,
                selectionEnd: selectionEnd ?? value.length,
              });

              const customInputEvent = new CustomEvent(customEventType, {
                bubbles: true,
                cancelable: false,
                composed: true,
                detail: trackingResult.__detail,
              }) as CustomInputEvent<D>;

              inputElement.dispatchEvent(customInputEvent);

              if (unstable_batchedUpdates) {
                unstable_batchedUpdates(customEventHandler, customInputEvent);
              } else {
                customEventHandler(customInputEvent);
              }

              dispatchedCustomInputEvent.current = true;
            });
          }

          inputElement._valueTracker?.setValue?.(previousValue);

          selection.current.start = trackingResult.selectionStart;
          selection.current.end = trackingResult.selectionEnd;
        } catch (error) {
          const { name, cause } = error as SyntheticChangeError;

          setInputAttributes(inputElement, {
            value: cause?.__attributes?.value ?? inputElement._valueTracker?.getValue?.() ?? '',
            selectionStart: cause?.__attributes?.selectionStart ?? selection.current.start,
            selectionEnd: cause?.__attributes?.selectionEnd ?? selection.current.end,
          });

          if (cause?.__attributes?.selectionStart !== undefined) {
            selection.current.start = cause.__attributes.selectionStart;
          }

          if (cause?.__attributes?.selectionEnd !== undefined) {
            selection.current.end = cause.__attributes.selectionEnd;
          }

          event.preventDefault();
          event.stopPropagation();

          if (name !== 'SyntheticChangeError') {
            throw error;
          }
        }
      },
    });
  }, []);
}
