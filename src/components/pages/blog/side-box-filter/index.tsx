import React from 'react'

import Link from 'next/link'

import * as S from './styles'

export function FilterBlog() {
  return (
    <S.Filter className='filtro'>
      <div className='side-box filter'>
        <h4>Filtros</h4>

        <Link href={'#'}>Produtos</Link>

        <Link href={'#'}>Institucional</Link>

        <Link href={'#'}>Tecnologia</Link>
      </div>
    </S.Filter>
  )
}
