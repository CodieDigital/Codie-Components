import React from 'react'

import Link from 'next/link'
import { BreadCrumbProps, Container, NextImage } from '../../data'
import { PostDetail } from './interfaces'
import { Iconfacebook, IconLinkedin, IconWhatsApp } from '../blog/icons'
import { FilterBlog, IFilterItem } from '../blog/side-box-filter'
import { NewsLetterBlog } from '../blog/side-box-newsletter'
import { TagsBlog } from '../blog/side-box-tags'
import { BlogDestaques } from '../blog/side-box-destaques'
import { AxiosInstance } from 'axios'
import { IBlogContentDefaultProps } from '../blog/interfaces'
import { IDetach } from '../../../interfaces/blog'

import { FacebookShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share'

import * as S from './styles'

interface PostContentProps {
  hasTags?: boolean
  detach?: IDetach[]
  api: AxiosInstance
  hasfilter?: boolean
  hasDestaques?: boolean
  postDetail: PostDetail
  hasNewsletter?: boolean
  categories: IFilterItem[]
  breadcrumb?: BreadCrumbProps
  newsLetterHasPhone?: boolean
  default: IBlogContentDefaultProps
}

export function PostContent({
  api,
  detach,
  hasTags,
  hasfilter,
  categories,
  postDetail,
  hasNewsletter,
  newsLetterHasPhone,
  default: { baseImage, isBaseUrl, siteDomain, shareDomain },
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
                  <FacebookShareButton className='link-share' url={`${siteDomain}/${shareDomain?shareDomain:'post'}/${postDetail.detail.url}`}>
                    <Iconfacebook />
                  </FacebookShareButton>

                  <LinkedinShareButton className='link-share' url={`${siteDomain}/${shareDomain?shareDomain:'post'}/${postDetail.detail.url}`}>
                    <IconLinkedin />
                  </LinkedinShareButton>

                  <WhatsappShareButton className='link-share' url={`${siteDomain}/${shareDomain?shareDomain:'post'}/${postDetail.detail.url}`}>
                    <IconWhatsApp />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
          </div>

          <div className='side-bar'>
            {hasfilter && <FilterBlog categories={categories} />}

            {hasNewsletter && <NewsLetterBlog api={api} hasPhone={newsLetterHasPhone} />}

            {hasTags && <TagsBlog />}

            {detach && <BlogDestaques default={{ baseImage: baseImage, isBaseUrl: isBaseUrl }} posts={detach} />}
          </div>
        </Container>
      </div>
    </S.Post>
  )
}
