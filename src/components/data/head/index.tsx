import React from 'react'

import Head from 'next/head'

import { HeadComponentProps } from './interfaces'

export function HeadComponent({ headContent, siteDomain, painel, pathname }: HeadComponentProps) {
  return (
    <Head>
      <title>{headContent.pageTitle}</title>
      <link rel='canonical' href={siteDomain + pathname} />
      <meta name='description' content={headContent.metaDescription} />
      <meta property='og:url' content={siteDomain + pathname} />

      {/*Open Graph Facebook*/}
      <meta property='og:type' content='website' />
      <meta property='og:image:width' content='400' />
      <meta property='og:image:height' content='400' />
      <meta property='og:image:type' content='image/jpeg' />
      <meta property='og:title' content={headContent.pageTitle} />
      <meta property='og:site_name' content={headContent.pageTitle} />
      <meta property='og:url' content={siteDomain + pathname} />
      <meta property='og:description' content={headContent.metaDescription} />
      {headContent.imageOpenGraph && (
        <meta property='og:image' content={`${painel}uploads/${headContent.imageOpenGraph}`} />
      )}

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={headContent.pageTitle} />
      <meta name='twitter:description' content={headContent.metaDescription} />
      {headContent.imageOpenGraph && (
        <meta name='twitter:image' content={`${painel}uploads/${headContent.imageOpenGraph}`} />
      )}
    </Head>
  )
}
