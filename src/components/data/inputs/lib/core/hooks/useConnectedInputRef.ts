import { useCallback } from 'react';

export default function useConnectedInputRef(
  ref: React.MutableRefObject<HTMLInputElement | null>,
  forwardedRef: React.ForwardedRef<HTMLInputElement>,
) {
  return useCallback(
    (element: HTMLInputElement | null) => {
      ref.current = element;

      if (typeof forwardedRef === 'function') {
        forwardedRef(element);
      } else if (typeof forwardedRef === 'object' && forwardedRef !== null) {
        forwardedRef.current = element;
      }
    },
    [ref, forwardedRef],
  );
}
