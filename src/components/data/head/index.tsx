import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

interface HeadComponentProps {
  headContent: PageInformationProps
  pageUrl: string
  api: string
}

interface PageInformationProps {
  head: {
    pageTitle: string
    metaDescription: string
    imageOpenGraph: string
    headScripts: string
  }
  body: { bodyScripts: string }
  item: {
    id: number
    titulo: string
    thumbnail: string
    imagem: string
    url: string
  }
}

export function HeadComponent({ headContent, pageUrl, api }: HeadComponentProps) {
  const router = useRouter()

  return (
    <Head>
      <title>{headContent.head.pageTitle}</title>
      <meta name='description' content={headContent.head.metaDescription} />
      <meta property='og:url' content={pageUrl + router.pathname} />
      <link rel='canonical' href={pageUrl + router.pathname} />

      {/*Open Graph Facebook*/}
      <meta property='og:locale' content='pt_BR' />
      <meta property='og:url' content='https://gps.com.br' />
      <meta property='og:title' content={headContent.head.pageTitle} />
      <meta property='og:site_name' content='Guiadas para o Sucesso' />
      <meta property='og:description' content={headContent.head.metaDescription} />
      <meta property='og:image' content={`${api}upload/uploads/download/${headContent.head.imageOpenGraph}`} />
      <meta property='og:image:type' content='image/jpeg' />
      <meta property='og:image:width' content='400' />
      <meta property='og:image:height' content='400' />
      <meta property='og:type' content='website' />

      {/* Twitter */}
      <meta name='twitter:title' content={headContent.head.pageTitle} />
      <meta name='twitter:description' content={headContent.head.metaDescription} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content={`${api}upload/uploads/download/${headContent.head.imageOpenGraph}`} />
    </Head>
  )
}
