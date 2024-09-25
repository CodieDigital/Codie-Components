import React, { useEffect, useRef, useState } from "react";

import { useMask } from "./lib/mask";

import * as S from "./styles";
import { useField } from "@unform/core";

interface Props {
  id: string;
  name: string;
  mask: string;
  label?: string | JSX.Element;
  edit?: boolean;
  isFlex?: boolean;
  hasBar?: boolean;
  inputBg?: string;
  noMargin?: boolean;
  hasBorder?: boolean;
  placeholder?: string;
  borderWithBar?: boolean;
  inputBoxShadow?: string;
  fontSizeFamilyLabel?: string;
  fontSizeFamilyInput?: string;
}

export interface IInputProps {
  configs: Props;
  onChangeInput?: React.Dispatch<string>;
}

type InputProps = JSX.IntrinsicElements["input"] & IInputProps;

export function InputMask({ onChangeInput, configs, readOnly }: InputProps) {
  const [value, setValue] = useState("");

  const inputRef = useMask({
    mask: configs.mask,
    replacement: { _: /\d/ },
  });

  const { fieldName, registerField, defaultValue, error } = useField(
    configs.name
  );

  const ref = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: null,
      getValue: () => {
        return value.replaceAll("_", "");
      },
      setValue: () => {
        setValue(value);
      },
      clearValue: () => {
        setValue("");
      },
    });
  }, [fieldName, value, registerField]);

  useEffect(() => {
    if (inputRef.current) {
      if (defaultValue === undefined) {
        inputRef.current.value = "";
        setValue("");
      }

      if (defaultValue) {
        inputRef.current.value = defaultValue;
        setValue(defaultValue);
      }
    }
  }, [defaultValue]);

  return (
    <S.Input
      $hasBar={configs.isFlex}
      $inputBg={configs.inputBg}
      $noMargin={configs.noMargin}
      $hasBorder={configs.hasBorder}
      $borderWithBar={configs.borderWithBar}
      $inputBoxShadow={configs.inputBoxShadow}
    >
      <div className="input-content">
        {configs.label && (
          <label
            className={`label-text ${
              configs.fontSizeFamilyLabel
                ? configs.fontSizeFamilyLabel
                : "paragraph-2"
            }`}
            htmlFor={configs.id}
          >
            {configs.label}
          </label>
        )}

        {configs.hasBar && (
          <span
            className={`${
              configs.fontSizeFamilyLabel
                ? configs.fontSizeFamilyLabel
                : "paragraph-2"
            } bar`}
          >
            |
          </span>
        )}

        <input
          style={{ display: "none" }}
          ref={ref}
          defaultValue={value}
          type="text"
          name={configs.name}
        />

        <input
          id={configs.id}
          className={
            configs.fontSizeFamilyInput
              ? configs.fontSizeFamilyInput
              : "paragraph-2"
          }
          type="text"
          onChange={async (ev) => {
            if (inputRef.current) {
              inputRef.current.value = ev.target.value;
              setValue(ev.target.value);

              if (onChangeInput) {
                onChangeInput(ev.target.value);
              }
            }
          }}
          readOnly={readOnly}
          placeholder={configs.placeholder}
          ref={inputRef}
        />
      </div>

      {error && (
        <span
          className={`error ${
            configs.fontSizeFamilyLabel
              ? configs.fontSizeFamilyLabel
              : "paragraph-2"
          } error-message`}
        >
          {error}
        </span>
      )}
    </S.Input>
  );
}
