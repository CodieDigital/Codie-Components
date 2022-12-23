export interface PostDetail {
  head: {
    pageTitle: string
    metaDescription: string
    imageOpenGraph: string
    headScripts: string
  }
  body: {
    bodyScripts: string
  }
  detail: {
    id: number
    titulo: string
    subtitulo: string
    thumbnail: string
    imagem: string
    url: string
    descricao: string
    dataCadastro: string
  }
}

export interface PostPageComponentProps {
  bgBanner: string
  fontFamily?: string
  baseImage: string
  baseImageGallery: string
  isBaseUrl: boolean
  isBaseImageGallery: boolean
  data: PostDetail
  tags: Tags[]
}

export interface Tags {
  id: number
  title: string
  href: string
}
