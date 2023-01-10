import React from 'react'

import Link from 'next/link'

import * as S from './styles'

export function TagsBlog() {
  return (
    <S.Tags className='box-tags'>
      <div className='side-box tags'>
        <h4>Tags</h4>

        <div className='wrapper-tags'>
          <Link href={''} className='tag'>
            Institucional
          </Link>

          <Link href={''} className='tag'>
            Produtos
          </Link>

          <Link href={''} className='tag'>
            Dicas
          </Link>

          <Link href={''} className='tag'>
            Novidades
          </Link>
        </div>
      </div>
    </S.Tags>
  )
}
