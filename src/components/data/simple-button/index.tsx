import React from 'react'

import { Error } from '../error-body'

import { ButtonProps } from './interfaces'

import * as S from './styles'

export function Button({ buttonData }: ButtonProps) {
  return (
    <Error name='button-component'>
      <S.Button
        href={buttonData.url}
        $hasBg={buttonData.hasBg}
        $borderRadius={buttonData.borderRadius}
        rel={`${buttonData.externalLink ? 'external' : ''}`}
        target={`${buttonData.externalLink ? '_blank' : ''}`}
        className={`${buttonData.font ? buttonData.font : 'link-1'} button${
          buttonData.name ? '-' + buttonData.name : ''
        }`}
        data-aos={buttonData.hasAos && 'fade-up'}
        data-aos-duration={buttonData.hasAos && '1500'}
      >
        {buttonData.icon}
        {buttonData.text}
      </S.Button>
    </Error>
  )
}
