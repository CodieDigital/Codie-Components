import React from 'react'

import { Error } from '../../../data'
import { Icon } from '../../../icons/render'

import { INavigationButton } from './interface'

import * as S from './styles'

export function NavigationButton({ className, iconName, iconColor }: INavigationButton) {
  return (
    <Error name='NavigationButton'>
      <S.NavigationButton className={className}>
        <div className='icon'>
          <Icon fill={iconColor ? iconColor : '#000'} name={iconName} />
        </div>
      </S.NavigationButton>
    </Error>
  )
}
