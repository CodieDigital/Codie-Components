import React from 'react'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { NewsLetterBlog } from './side-box-newsletter'

import * as S from './styles'
import { FilterBlog } from './side-box-filter'
import { TagsBlog } from './side-box-tags'
import { BlogDestaques } from './side-box-destaques'
import { BlogProps, IBlogContentDefaultProps } from './interfaces'
import createRouterBuild from '../../../utils/router-build'
import Paginate, { IPagination } from '../../../utils/pagination'
import { Container } from '../../data/container'
import { NextImage } from '../../data/NextImage'
import { Iconfacebook, IconInstagram, IconLinkedin, IconWhatsApp } from './icons'
import { PaginationComponent } from '../../data/pagination'
import { AxiosInstance } from 'axios'

interface IBlogContentProps {
  default: IBlogContentDefaultProps
  blogList: BlogProps
  api: AxiosInstance
}

export function BlogContent({ default: { bannerImage, titleBlog }, blogList, api }: IBlogContentProps) {
  const router = useRouter(),
    routerBuild = createRouterBuild(router),
    [pagination, setPagination] = useState<IPagination | null>(null)

  useEffect(() => {
    if (blogList) {
      setPagination(
        Paginate({
          totalItems: blogList.pageTotal,
          currentPage: Number(router.query.page) <= 0 || !router.query.page ? 1 : Number(router.query.page),
          pageSize: blogList.pageSize,
          hasNextPage: blogList.hasNextPage,
          hasPreviousPage: blogList.hasPreviousPage,
        }),
      )
    }
  }, [blogList, router.query])

  return (
    <S.BlogContent className='blog-content'>
      <div className='banner-blog' style={{ backgroundImage: `url(${bannerImage})` }}>
        <Container>
          <h1>{titleBlog}</h1>
        </Container>
      </div>

      <Container>
        <div className='show-mobile'>
          <FilterBlog />

          <TagsBlog />
        </div>

        <div className='posts'>
          {blogList.posts.map(({ titulo, imagem, descricao, url }) => {
            return (
              <div className='box-post'>
                <Link
                  href={{
                    pathname: '/post/[url]',
                    query: {
                      url: url ? url : 'default',
                    },
                  }}
                  className='image'
                >
                  <span className='tag-post'>Dicas</span>

                  <NextImage isBaseUrl src={imagem} alt='Blog post' />
                </Link>

                <div className='text'>
                  <Link href={''} className='title-post'>
                    {titulo}
                  </Link>

                  <div dangerouslySetInnerHTML={{ __html: descricao }}></div>

                  <div className='actions'>
                    <div className='share'>
                      <Link target={'_blank'} href='#' className='link'>
                        <IconInstagram />
                      </Link>
                      <Link target={'_blank'} href='#' className='link'>
                        <Iconfacebook />
                      </Link>
                      <Link target={'_blank'} href='#' className='link'>
                        <IconLinkedin />
                      </Link>
                      <Link target={'_blank'} href='#' className='link'>
                        <IconWhatsApp />
                      </Link>
                    </div>

                    <Link href={'#'} className='leia-mais'>
                      Leia mais
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}

          {pagination && (
            <PaginationComponent
              pages={pagination.pages}
              currentPage={pagination.page}
              hasNextPage={pagination.hasNextPage}
              hasPreviousPage={pagination.hasPreviousPage}
              onSelect={(page) => {
                return routerBuild.updateRouteParam('page', page.toString())
              }}
            />
          )}
        </div>

        <div className='side-bar'>
          <div className='hide-mobile'>
            <FilterBlog />
          </div>

          <NewsLetterBlog api={api} />

          <div className='hide-mobile'>
            <TagsBlog />
          </div>

          <BlogDestaques />
        </div>
      </Container>
    </S.BlogContent>
  )
}
