import React from 'react'

import { Error } from '../../data'
import { NextImage } from '../../data/next-image'

import { IBlogList } from '../../../interfaces/blog-section'
import { IPathsApi } from '../../data/next-image/interfaces'

import * as S from './styles'

interface ICardBlog {
  card: IBlogList
  pathsApi: IPathsApi
}

export function CardBlog({ card, pathsApi }: ICardBlog) {
  return (
    <Error name='card-blog'>
      <S.CardBlog
        href={{
          pathname: 'post/[url]',
          query: {
            url: card.url,
          },
        }}
      >
        <NextImage isUploads src={card.imagem} hasHover pathsApi={pathsApi} />

        <span className='paragraph-2 tag'>Dicas</span>

        <div className='box-text'>
          <div className='paragraph-2 uppercase box-author'>{card.subtitulo}</div>

          <h2 className='title-5 uppercase title'>{card.titulo}</h2>

          <div
            className='paragraph-2 description'
            dangerouslySetInnerHTML={{
              __html: card.descricao,
            }}
          ></div>
        </div>
      </S.CardBlog>
    </Error>
  )
}
