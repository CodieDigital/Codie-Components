import React from 'react'

import Link from 'next/link'

import { NextImage } from '../../../data'
import { IDetach } from '../../../../interfaces/blog'
import { formatedDate } from '../../../../utils/fomatedDate'

import { IBlogContentDefaultProps } from '../interfaces'

import * as S from './styles'

interface IBlogDestaquesProps {
  posts: IDetach[]
  default: IBlogContentDefaultProps
}

export function BlogDestaques({ posts, default: { baseImage, isBaseUrl } }: IBlogDestaquesProps) {
  return (
    <S.Destaques>
      <div className='side-box destaques'>
        <h4>Destaques</h4>

        {posts.map((post) => {
          return (
            <div className='box-destaque' key={post.url + post.titulo}>
              <Link href={{ pathname: '/post/[url]', query: { url: post.url } }} className='image'>
                <NextImage baseImage={baseImage} isBaseUrl={isBaseUrl} alt={post.id + ' blog'} src={post.imagem} />
              </Link>

              <div className='text'>
                <Link href={{ pathname: '/post/[url]', query: { url: post.url } }} className='title-link'>
                  {post.titulo}
                </Link>

                {post.dataCriacao && <p className='date'>{formatedDate(post.dataCriacao)}</p>}
              </div>
            </div>
          )
        })}
      </div>
    </S.Destaques>
  )
}
