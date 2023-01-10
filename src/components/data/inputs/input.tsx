import React, { useEffect, useState, useRef } from 'react'

import { useField } from '@unform/core'

import ReactInputMask from 'react-input-mask'

import * as S from './styles'

interface Props {
  id?: string
  name: string
  label?: string
  edit?: boolean
  mask: string
  placeholder?: string
  onChangeInput?: React.Dispatch<string>
}

interface Props {
  name: string
  label?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

export function InputMask({ id, name, mask, label, onChangeInput, readOnly }: InputProps) {
  const [value, setValue] = useState('')
  const { fieldName, registerField, defaultValue, error } = useField(name)

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
    <S.Input>
      <div className='input-content'>
        {label && (
          <label className='label-text paragraph-2-bold-graphie' htmlFor={id}>
            {label}
          </label>
        )}

        <input style={{ display: 'none' }} ref={ref} defaultValue={value} type='text' name={name} />

        <ReactInputMask
          mask={mask}
          onChange={(e) => {
            setValue(e.target.value)

            if (onChangeInput) {
              onChangeInput(e.target.value)
            }
          }}
          value={value}
          className='paragraph-1-bold-graphie'
          id={id}
          type='text'
          readOnly={readOnly}
        />
      </div>

      {error && <span className='error paragraph-3-bold-graphie error-message'>{error}</span>}
    </S.Input>
  )
}
