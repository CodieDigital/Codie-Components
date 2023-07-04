import React, { useEffect, useState, useRef } from 'react'

import { useField } from '@unform/core'

import ReactInputMask from 'comigo-tech-react-input-mask'

import * as S from './styles'

interface Props {
  id: string
  name: string
  mask: string
  label?: string | JSX.Element
  edit?: boolean
  isFlex?: boolean
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
  onChangeInput?: React.Dispatch<string>
}

type InputProps = JSX.IntrinsicElements['input'] & IInputProps

export function InputMask({ onChangeInput, configs, readOnly }: InputProps) {
  const [value, setValue] = useState('')

  const { fieldName, registerField, defaultValue, error } = useField(configs.name)

  const ref = useRef(null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: null,
      getValue: () => {
        return value.replaceAll('_', '')
      },
      setValue: () => {
        setValue(value)
      },
      clearValue: () => {
        setValue('')
      },
    })
  }, [fieldName, value, registerField])

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue)
    }
  }, [defaultValue])

  return (
    <S.Input
      $hasBar={configs.isFlex}
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
            htmlFor={configs.id}
          >
            {configs.label}
          </label>
        )}

        {configs.hasBar && (
          <span className={`${configs.fontSizeFamilyLabel ? configs.fontSizeFamilyLabel : 'paragraph-2'} bar`}>|</span>
        )}

        <input style={{ display: 'none' }} ref={ref} defaultValue={value} type='text' name={configs.name} />

        <ReactInputMask
          mask={configs.mask}
          onChange={(e) => {
            setValue(e.target.value)

            if (onChangeInput) {
              onChangeInput(e.target.value)
            }
          }}
          value={value}
          className={configs.fontSizeFamilyInput ? configs.fontSizeFamilyInput : 'paragraph-2'}
          id={configs.id}
          type='text'
          placeholder={configs.placeholder}
          readOnly={readOnly}
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
