import React from 'react'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { AxiosInstance } from 'axios'

import { NewsLetterBlog } from './side-box-newsletter'

import { FilterBlog, IFilterItem } from './side-box-filter'
import { TagsBlog } from './side-box-tags'
import { BlogDestaques } from './side-box-destaques'
import { BlogProps, IBlogContentDefaultProps } from './interfaces'
import createRouterBuild from '../../../utils/router-build'
import Paginate, { IPagination } from '../../../utils/pagination'
import { Container } from '../../data/container'
import { NextImage } from '../../data/NextImage'
import { Iconfacebook, IconLinkedin, IconWhatsApp } from './icons'
import { PaginationComponent } from '../../data/pagination'
import { IDetach } from '../../../interfaces/blog'

import * as S from './styles'
import { FacebookShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share'

interface IBlogContentProps {
  default: IBlogContentDefaultProps
  blogList: BlogProps
  api: AxiosInstance
  hasDestaques?: boolean
  hasfilter?: boolean
  hasNewsletter?: boolean
  hasTags?: boolean
  detach?: IDetach[]
  categories: IFilterItem[]
  newsLetterHasPhone?: boolean
}

export function BlogContent({
  detach,
  categories,
  default: { bannerImage, titleBlog, isBaseUrl, baseImage, siteDomain },
  blogList,
  api,
  hasfilter,
  hasNewsletter,
  hasTags,
  newsLetterHasPhone,
}: IBlogContentProps) {
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
          <FilterBlog categories={categories} />

          <TagsBlog />
        </div>

        <div className='posts'>
          {blogList.posts.map(({ titulo, imagem, descricao, url }) => {
            return (
              <div key={`blogPost${titulo}-${descricao}`} className='box-post'>
                <Link
                  href={{
                    pathname: '/post/[url]',
                    query: {
                      url: url,
                    },
                  }}
                  className='image'
                >
                  <span className='tag-post'>Dicas</span>

                  <NextImage baseImage={baseImage} isBaseUrl={isBaseUrl} src={imagem} alt='Blog post' />
                </Link>

                <div className='text'>
                  <Link
                    href={{
                      pathname: '/post/[url]',
                      query: {
                        url: url ? url : 'default',
                      },
                    }}
                    className='title-post'
                  >
                    {titulo}
                  </Link>

                  <div className='description' dangerouslySetInnerHTML={{ __html: descricao }}></div>

                  <div className='actions'>
                    <div className='share'>
                      <FacebookShareButton className='link' url={`${siteDomain}/post/${url}`}>
                        <Iconfacebook />
                      </FacebookShareButton>

                      <LinkedinShareButton className='link' url={`${siteDomain}/post/${url}`}>
                        <IconLinkedin />
                      </LinkedinShareButton>

                      <WhatsappShareButton className='link' url={`${siteDomain}/post/${url}`}>
                        <IconWhatsApp />
                      </WhatsappShareButton>
                    </div>

                    <Link
                      href={{
                        pathname: '/post/[url]',
                        query: {
                          url: url,
                        },
                      }}
                      className='leia-mais'
                    >
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
          <div className='hide-mobile'>{hasfilter && <FilterBlog categories={categories} />}</div>

          {hasNewsletter && <NewsLetterBlog hasPhone={newsLetterHasPhone} api={api} />}

          <div className='hide-mobile'>{hasTags && <TagsBlog />}</div>

          {detach && <BlogDestaques default={{ baseImage: baseImage, isBaseUrl: isBaseUrl }} posts={detach} />}
        </div>
      </Container>
    </S.BlogContent>
  )
}
