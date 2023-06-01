import React from 'react'

import Link from 'next/link'

import * as S from './styles'
import { NextImage } from '../../../data'
import { IBlogItem } from '../../../../interfaces/blog'
import { formatedDate } from '../../../../utils/fomatedDate'

interface IBlogDestaquesProps {
  posts: IBlogItem[]
}

export function BlogDestaques({ posts }: IBlogDestaquesProps) {
  return (
    <S.Destaques>
      <div className='side-box destaques'>
        <h4>Destaques</h4>

        {posts.map((post) => {
          if (post.destaque === true) {
            return (
              <div className='box-destaque' key={post.url + post.titulo}>
                <Link passHref href={{ pathname: '/blog/[url]', query: { url: post.url } }}>
                  <a href='' className='image'>
                    <NextImage isBaseUrl alt={post.id + ' blog'} src={post.imagem} />
                  </a>
                </Link>

                <div className='text'>
                  <Link passHref href={{ pathname: '/blog/[url]', query: { url: post.url } }}>
                    <a href='replaced' className='title-link'>
                      {post.titulo}
                    </a>
                  </Link>

                  <p className='date'>{formatedDate(post.dataCadastro)}</p>
                </div>
              </div>
            )
          } else return
        })}
      </div>
    </S.Destaques>
  )
}
