import React from 'react'

import Link from 'next/link'
import * as S from './styles'
import { BreadCrumbProps, Container, NextImage } from '../../data'
import { PostDetail } from './interfaces'
import { Iconfacebook, IconInstagram, IconLinkedin, IconWhatsApp } from '../blog/icons'
import { FilterBlog } from '../blog/side-box-filter'
import { NewsLetterBlog } from '../blog/side-box-newsletter'
import { TagsBlog } from '../blog/side-box-tags'
import { BlogDestaques } from '../blog/side-box-destaques'
import { AxiosInstance } from 'axios'

interface PostContentProps {
  postDetail: PostDetail
  api: AxiosInstance
  breadcrumb?: BreadCrumbProps
}

export function PostContent({ postDetail, api }: PostContentProps) {
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
              <div className='image'>
                <NextImage isBaseUrl alt='post' src={postDetail.detail.imagem} />
              </div>

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
                  <Link target={'_blank'} className='link-share' href=''>
                    <IconInstagram />
                  </Link>

                  <Link target={'_blank'} className='link-share' href=''>
                    <Iconfacebook />
                  </Link>

                  <Link target={'_blank'} className='link-share' href=''>
                    <IconLinkedin />
                  </Link>

                  <Link target={'_blank'} className='link-share' href=''>
                    <IconWhatsApp />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='side-bar'>
            <FilterBlog />
            <NewsLetterBlog api={api} />
            <TagsBlog />
            <BlogDestaques />
          </div>
        </Container>
      </div>
    </S.Post>
  )
}
