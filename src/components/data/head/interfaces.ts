export interface HeadComponentProps {
  headContent: PageInformationProps
  pageUrl: string
  api: string
}

export interface PageInformationProps {
  head: {
    pageTitle: string
    metaDescription: string
    imageOpenGraph: string
    headScripts: string
  }
  body: { bodyScripts: string }
  item?: {
    id: number
    titulo: string
    thumbnail: string
    imagem: string
    url: string
  }
  detail?: {
    id: number
    titulo: string
    thumbnail: string
    imagem: string
    url: string
    descricao: string
  }
  imagens?: Imagens[]
}

export interface Imagens {
  fileType: string
  fileSize: string
  fileData: string
  guid: string
  slug: string
  placeReceived: string
  tableId: number
  tableAction: string
  id: number
  ativo: boolean
  excluido: boolean
  dataCriacao: string
  dataEdicao: string
}
