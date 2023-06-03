import React, { useEffect, useRef, useState } from 'react'

import { useField } from '@unform/core'

import * as S from './styles'

export interface IOption {
  label: string
  value: string
}

export interface ISelect {
  name: string
  label: string
  placeholder?: string
  optionsSelect: IOption[]
}

export function SelectComponent({ name, label, placeholder, optionsSelect, ...rest }: ISelect) {
  const [value, setValue] = useState('')

  const inputRef = useRef<HTMLSelectElement>(null)

  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current || value,
      path: 'value',
      setValue: (e) => {
        setValue(e)
      },
    })
  }, [fieldName, value, registerField])

  return (
    <S.Input>
      <div className='input-content'>
        {label && (
          <label className='label-text title-4' htmlFor={label}>
            {label}
          </label>
        )}

        <select
          id={name}
          name={name}
          ref={inputRef}
          value={defaultValue || value}
          className={`paragraph-2 select-${name}`}
          onChange={(e) => {
            setValue(e.target.value)
          }}
          {...rest}
        >
          {placeholder && <option className='placeholder-select paragraph-2'>{placeholder}</option>}

          {optionsSelect.map((option, i) => {
            return (
              <option key={'select' + option.value + i} value={option.value} className='paragraph-2'>
                {option.label}
              </option>
            )
          })}
        </select>
      </div>

      {error && <span className='error paragraph-3 select-gender error-message'>{error}</span>}
    </S.Input>
  )
}
