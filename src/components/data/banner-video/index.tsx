import React from 'react'

import Link from 'next/link'

import { NavDownDoubleIcon } from '../../icons'
import { Error, Container, BreadCrumbComponent, BreadCrumbProps } from '..'

import * as S from './styles'

interface IBannerVideo {
  defaultConfigs: IBanners
  children?: React.ReactNode
  breadCrumb?: BreadCrumbProps
  defaultStyles?: {
    titleAlign?: 'flex-start' | 'center' | 'flex-end'
    titleColor?: string
    linkColor?: string
    linkHovervColor?: string
    subtitleColor?: string
    linkCenter?: boolean
    linkBottom?: string
  }
}

interface IBanners {
  video: string
  texts?: {
    title?: string
    subtitle?: string
    link?: string
  }
  classes?: {
    title?: string
    subtitle?: string
    link?: string
  }
}

export function BannerVideo({ children, breadCrumb, defaultStyles, defaultConfigs }: IBannerVideo) {
  return (
    <Error name='Banner Home'>
      <S.BannerVideo className='banner' $defaultStyles={defaultStyles}>
        {defaultConfigs.video && (
          <video autoPlay loop muted playsInline src={defaultConfigs.video} className='back-video'></video>
        )}

        <Container>
          {defaultConfigs.texts?.subtitle && (
            <span className={defaultConfigs.classes?.link ? defaultConfigs.classes.link : 'paragraph-2 ' + 'subtitle'}>
              {defaultConfigs.texts.subtitle}
            </span>
          )}

          {breadCrumb && <BreadCrumbComponent font={breadCrumb.font} isBg={breadCrumb.isBg} list={breadCrumb.list} />}

          {defaultConfigs.texts?.title && (
            <h1
              className={defaultConfigs.classes?.title ? defaultConfigs.classes.title : 'title-1 ' + 'title'}
              dangerouslySetInnerHTML={{ __html: defaultConfigs.texts.title }}
            ></h1>
          )}

          {children}

          {defaultConfigs.texts?.link && (
            <Link
              href={'/produtos'}
              className={defaultConfigs.classes?.link ? defaultConfigs.classes.link : 'paragraph-1 ' + 'link'}
            >
              <NavDownDoubleIcon />
              {defaultConfigs.texts.link}
            </Link>
          )}
        </Container>
      </S.BannerVideo>
    </Error>
  )
}
