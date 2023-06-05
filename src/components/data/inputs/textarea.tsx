import React, { useEffect, useRef } from 'react'

import { useField } from '@unform/core'

import * as S from './styles'

export interface Props {
  id: string
  name: string
  label?: string | JSX.Element
  hasBar?: boolean
  inputBg?: string
  noMargin?: boolean
  hasBorder?: boolean
  placeholder: string
  inputBoxShadow?: string
  borderWithBar?: boolean
  fontSizeFamilyInput?: string
  fontSizeFamilyLabel?: string
}

export interface IInputProps {
  configs: Props
}

export function TextAreaComponent({ configs, ...rest }: any) {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, registerField, defaultValue, error } = useField(configs.name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <S.Input
      $hasBar={configs.hasBar}
      $inputBg={configs.inputBg}
      $noMargin={configs.noMargin}
      $hasBorder={configs.hasBorder}
      $borderWithBar={configs.borderWithBar}
      $inputBoxShadow={configs.inputBoxShadow}
    >
      <div className='input-textarea'>
        {configs.label && (
          <label
            className={`label-text ${configs.fontSizeFamilyLabel ? configs.fontSizeFamilyLabel : 'paragraph-2'}`}
            htmlFor={configs.id}
          >
            {configs.label}
          </label>
        )}

        {configs.hasBar && (
          <span className={`${configs.fontSizeFamilyLabel ? configs.fontSizeFamilyLabel : 'paragraph-2'} bar`}>|</span>
        )}

        <textarea
          id={configs.id}
          defaultValue={defaultValue}
          placeholder={configs.placeholder}
          ref={inputRef}
          {...rest}
          className={configs.fontSizeFamilyInput ? configs.fontSizeFamilyInput : 'paragraph-2'}
        />

        {error && (
          <span
            className={`error ${
              configs.fontSizeFamilyLabel ? configs.fontSizeFamilyLabel : 'paragraph-2'
            } error-message`}
          >
            {error}
          </span>
        )}
      </div>
    </S.Input>
  )
}
