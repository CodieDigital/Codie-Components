import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import * as S from './styles';

export function TextAreaComponent({ id, name, label, ...rest }: any) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <S.Input>
      <label htmlFor={id} className="title-11-objective-regular">
        {label}
      </label>

      <textarea
        id={id}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        className="title-11-objective-regular"
      />

      {error && (
        <span className="title-11-objective-regular error-message">
          {error}
        </span>
      )}
    </S.Input>
  );
}
