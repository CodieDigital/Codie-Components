import React from 'react'

import Head from 'next/head'

import { HeadComponentProps } from './interfaces'

export function HeadComponent({ headContent, painel }: HeadComponentProps) {
  return (
    <Head>
      <title>{headContent.pageTitle}</title>
      <meta property='og:title' content={headContent.pageTitle} />
      <meta property='og:site_name' content={headContent.pageTitle} />
      <meta name='description' content={headContent.metaDescription} />
      <meta itemProp='description' content={headContent.metaDescription} />
      <meta property='og:description' content={headContent.metaDescription} />
      {headContent.imageOpenGraph && (
        <meta property='og:image' content={`${painel}uploads/${headContent.imageOpenGraph}`} />
      )}
      {headContent.imageOpenGraph && (
        <meta name='twitter:image' content={`${painel}uploads/${headContent.imageOpenGraph}`} />
      )}
      {headContent.imageOpenGraph && (
        <meta property='og:image:secure_url' content={`${painel}uploads/${headContent.imageOpenGraph}`} />
      )}
      <meta name='twitter:title' content={headContent.pageTitle} />
      <meta name='twitter:description' content={headContent.metaDescription} />
    </Head>
  )
}
