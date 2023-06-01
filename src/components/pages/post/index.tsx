import React from 'react'

import Link from 'next/link'
import * as S from './styles'
import { BreadCrumbProps, Container, NextImage } from '../../data'
import { PostDetail } from './interfaces'
import { Iconfacebook, IconLinkedin, IconWhatsApp } from '../blog/icons'
import { FilterBlog, IFilterItem } from '../blog/side-box-filter'
import { NewsLetterBlog } from '../blog/side-box-newsletter'
import { TagsBlog } from '../blog/side-box-tags'
import { BlogDestaques } from '../blog/side-box-destaques'
import { AxiosInstance } from 'axios'
import { IBlogContentDefaultProps } from '../blog/interfaces'
import { IListBlog } from '../../../interfaces/blog'

interface PostContentProps {
  hasTags?: boolean
  detach: IListBlog
  api: AxiosInstance
  hasfilter?: boolean
  hasDestaques?: boolean
  postDetail: PostDetail
  hasNewsletter?: boolean
  categories: IFilterItem[]
  breadcrumb?: BreadCrumbProps
  default: IBlogContentDefaultProps
}

export function PostContent({
  api,
  detach,
  hasTags,
  hasfilter,
  categories,
  postDetail,
  hasDestaques,
  hasNewsletter,
  default: { baseImage, isBaseUrl, siteDomain },
}: PostContentProps) {
  return (
    <S.Post className='post-content'>
      <div className='banner-post'>
        <Container>
          {/* <BreadCrumbComponent list={breadcrumb} /> */}

          <h1>{postDetail.detail.titulo}</h1>
        </Container>
      </div>

      <div className='post-content'>
        <Container>
          <div className='box-left'>
            <div className='post'>
              {postDetail.detail.imagem && (
                <div className='image'>
                  <NextImage baseImage={baseImage} isBaseUrl={isBaseUrl} alt='post' src={postDetail.detail.imagem} />
                </div>
              )}

              <h3>{postDetail.detail.subtitulo}</h3>

              <div
                dangerouslySetInnerHTML={{
                  __html: postDetail.detail.descricao,
                }}
              ></div>
            </div>

            <div className='box-tags-post'>
              <div className='tags'>
                <h4>Tags</h4>

                <div className='wrapper-tags'>
                  <Link href={''} className='tag'>
                    Institucional
                  </Link>
                </div>
              </div>

              <div className='share'>
                <h4>Compartilhe</h4>

                <div className='midias'>
                  <Link
                    target={'_blank'}
                    className='link-share'
                    href={`https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F${siteDomain}/blog/${postDetail.detail.url}`}
                  >
                    <Iconfacebook />
                  </Link>

                  <Link
                    target={'_blank'}
                    className='link-share'
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2F${siteDomain}/blog/${postDetail.detail.url}`}
                  >
                    <IconLinkedin />
                  </Link>

                  <Link
                    target={'_blank'}
                    className='link-share'
                    href={`https://api.whatsapp.com/send?text=${siteDomain}/blog/${postDetail.detail.url}`}
                  >
                    <IconWhatsApp />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='side-bar'>
            {hasfilter && <FilterBlog categories={categories} />}

            {hasNewsletter && <NewsLetterBlog api={api} />}

            {hasTags && <TagsBlog />}

            {hasDestaques && <BlogDestaques posts={detach.posts} />}
          </div>
        </Container>
      </div>
    </S.Post>
  )
}
