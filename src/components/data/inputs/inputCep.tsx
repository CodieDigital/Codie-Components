import React, { RefObject, useEffect, useRef, useState } from "react";

import { ViaCep, apiViaCep } from "../../../utils/api_cep";

import { FormHandles, useField } from "@unform/core";

import * as S from "./styles";
import { InputMask } from "./input-mask";

interface Props {
  id?: string;
  formRef: RefObject<FormHandles>;
  name: string;
  label?: string | JSX.Element;
  hasBar?: boolean;
  isFlex?: boolean;
  inputBg?: string;
  noMargin?: boolean;
  hasBorder?: boolean;
  placeholder?: string;
  borderWithBar?: boolean;
  inputBoxShadow?: string;
  fontSizeFamilyLabel?: string;
  fontSizeFamilyInput?: string;
}

interface IInputProps {
  configs: Props;
  children: React.ReactNode;
}

type InputProps = JSX.IntrinsicElements["input"] & IInputProps;

export function InputCep({ configs, children }: InputProps) {
  const [cep, setCep] = useState("");
  const [validCep, setValidCep] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue, error } = useField("cep");

  async function CallCep() {
    try {
      const { data } = await apiViaCep.get<ViaCep>(
        `${inputRef.current?.value}/json`
      );

      if (data.erro) {
        setValidCep(false);
        configs.formRef.current?.setFieldError("zipCode", "Cep inválido.");
        console.log(validCep);
        return;
      }

      setValidCep(true);

      configs.formRef.current?.setFieldError("cep", "");
      configs.formRef.current?.setFieldValue("endereco", data.logradouro);
      configs.formRef.current?.setFieldValue("bairro", data.bairro);
      configs.formRef.current?.setFieldValue("localidade", data.localidade);
      configs.formRef.current?.setFieldValue("estado", data.uf);
    } catch (e) {
      setValidCep(false);
      configs.formRef.current?.setFieldError("zipCode", "");
    }
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current || cep,
      path: "value",
    });
  }, [fieldName, cep, registerField]);

  useEffect(() => {
    if (defaultValue) {
      setCep(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (cep.length === 9 || cep.length === 8) {
      (async () => {
        await CallCep();
      })();
      return;
    }

    setValidCep(false);
    configs.formRef.current?.setFieldError("zipCode", "");
  }, [inputRef.current?.value, cep, defaultValue]);

  return (
    <>
      <S.Input
        className={configs.name}
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
              htmlFor={configs.name}
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

          <InputMask
            configs={{ name: "cep", id: "cep", mask: "____-___" }}
            onChangeInput={(value) => {
              setCep(value?.replace("-", "").replace("_", ""));
            }}
            value={cep}
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

      {children}
    </>
  );
}
