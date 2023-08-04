import React from 'react'

import Link from 'next/link'

import { NavDownDoubleIcon } from '../../icons'
import { Error, Container, BreadCrumbComponent } from '..'

import { IBannerVideo } from './interfaces'

import * as S from './styles'

export function BannerVideo({ children, breadCrumb, defaultStyles, defaultConfigs }: IBannerVideo) {
  return (
    <Error name='Banner Home'>
      <S.BannerVideo
        className={defaultConfigs.className ? defaultConfigs.className : 'banner'}
        $defaultStyles={defaultStyles}
      >
        {defaultConfigs.video && (
          <video autoPlay loop muted playsInline src={defaultConfigs.video} className='back-video'></video>
        )}

        <Container>
          {defaultConfigs.texts?.subtitle && (
            <span
              className={
                defaultConfigs.classes?.link ? defaultConfigs.classes.link + ' subtitle' : 'paragraph-2 ' + 'subtitle'
              }
            >
              {defaultConfigs.texts.subtitle}
            </span>
          )}

          {breadCrumb && <BreadCrumbComponent font={breadCrumb.font} isBg={breadCrumb.isBg} list={breadCrumb.list} />}

          {defaultConfigs.texts?.title && (
            <h1
              className={defaultConfigs.classes?.title ? defaultConfigs.classes.title + ' title' : 'title-1 ' + 'title'}
              dangerouslySetInnerHTML={{ __html: defaultConfigs.texts.title }}
            ></h1>
          )}

          {children}

          {defaultConfigs.texts?.link && (
            <Link
              href={'/produtos'}
              className={defaultConfigs.classes?.link ? defaultConfigs.classes.link + ' link' : 'paragraph-1 ' + 'link'}
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
