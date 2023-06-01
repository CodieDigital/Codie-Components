import React from 'react'

import Link from 'next/link'

import * as S from './styles'

export interface IFilterItem {
  id: number
  url: string
  titulo: string
}

interface IFilterBlog {
  categories: IFilterItem[]
}

export function FilterBlog({ categories }: IFilterBlog) {
  return (
    <S.Filter className='filtro'>
      <div className='side-box filter'>
        <h4>Filtros</h4>

        {categories.map((categorie) => (
          <Link
            passHref
            key={categorie.id + categorie.titulo + categorie.url}
            href={{ pathname: '/blog', query: { categoria: categorie.url } }}
          >
            {categorie.titulo}
          </Link>
        ))}
      </div>
    </S.Filter>
  )
}
