import React from 'react'

import Link from 'next/link'

import * as S from './styles'
import { NextImage } from '../../../data'

export function BlogDestaques() {
  return (
    <S.Destaques>
      <div className='side-box destaques'>
        <h4>Destaques</h4>

        <div className='box-destaque'>
          <div className='image'>
            <NextImage alt='destaque' src='/images/blog/box-destaques.webp' />
          </div>

          <div className='text'>
            <Link href={'#'}>Lorem markdownum facit? Hinc tutus serisque, mihi...</Link>

            <p className='date'>17 nov. 2021</p>
          </div>
        </div>
      </div>
    </S.Destaques>
  )
}
