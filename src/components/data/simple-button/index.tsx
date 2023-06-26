import React from 'react'

import { Error } from '../error-body'

import { ButtonProps } from './interfaces'

import * as S from './styles'

export function Button({ buttonData }: ButtonProps) {
  return (
    <Error name='button-component'>
      <S.Button
        href={buttonData.url}
        className={`link-1-medium button ${buttonData.className ? buttonData.className : ''}`}
        $hasBg={buttonData.hasBg}
        rel={`${buttonData.externalLink ? 'external' : ''}`}
        target={`${buttonData.externalLink ? '_blank' : ''}`}
        $borderRadius={buttonData.borderRadius}
      >
        {buttonData.icon}
        {buttonData.text}
      </S.Button>
    </Error>
  )
}
