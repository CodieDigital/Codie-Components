import React, { useEffect, useRef, useState } from 'react'

import { useField } from '@unform/core'

import * as S from './styles'

export interface Props {
  name: string
  type: string
  label?: string
  hasBar?: boolean
  inputBg?: string
  noMargin?: boolean
  hasBorder?: boolean
  placeholder?: string
  borderWithBar?: boolean
  inputBoxShadow?: string
  fontSizeFamilyLabel?: string
  fontSizeFamilyInput?: string
}

export interface IInputProps {
  configs: Props
}

type InputProps = JSX.IntrinsicElements['input'] & IInputProps

export function InputComponent({ configs, ...rest }: InputProps) {
  const [value] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, registerField, defaultValue, error } = useField(configs.name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current || value,
      path: 'value',
    })
  }, [fieldName, value, registerField])

  return (
    <S.Input
      className={configs.name}
      $hasBar={configs.hasBar}
      $inputBg={configs.inputBg}
      $noMargin={configs.noMargin}
      $hasBorder={configs.hasBorder}
      $borderWithBar={configs.borderWithBar}
      $inputBoxShadow={configs.inputBoxShadow}
    >
      <div className='input-content'>
        {configs.label && (
          <label
            className={`label-text ${configs.fontSizeFamilyLabel ? configs.fontSizeFamilyLabel : 'paragraph-2'}`}
            htmlFor={configs.name}
          >
            {configs.label}
          </label>
        )}

        {configs.hasBar && (
          <span className={`${configs.fontSizeFamilyLabel ? configs.fontSizeFamilyLabel : 'paragraph-2'} bar`}>|</span>
        )}

        <input
          id={configs.name}
          name={configs.name}
          type={configs.type}
          ref={inputRef}
          placeholder={configs.placeholder}
          defaultValue={defaultValue}
          className={configs.fontSizeFamilyInput ? configs.fontSizeFamilyInput : 'paragraph-2'}
          {...rest}
        />
      </div>

      {error && (
        <span
          className={`error ${configs.fontSizeFamilyLabel ? configs.fontSizeFamilyLabel : 'paragraph-2'} error-message`}
        >
          {error}
        </span>
      )}
    </S.Input>
  )
}
