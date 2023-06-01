interface IBlogContentDefaultProps {
  titleBlog: string
  bannerImage: string
}

interface IListBlog {
  pageSize: number
  pageTotal: number
  pageNumber: number
  posts: IBlogItem[]
  isLastPage: boolean
  hasNextPage: boolean
  isFirstPage: boolean
  hasPreviousPage: boolean
}

interface IBlogItem {
  id: number
  url: string
  titulo: string
  imagem: string
  destaque: boolean
  subtitulo: string
  thumbnail: string
  descricao: string
  dataCadastro: string
  categoriaUrl: string
  categoriaTitle: string
}

interface IBlogDetailProps {
  head: {
    pageTitle: string
    headScripts: string
    metaDescription: string
    imageOpenGraph: string
  }
  body: {
    bodyScripts: string
  }
  detail: IPostDetail
}

interface IPostDetail {
  id: number
  url: string
  imagem: string
  titulo: string
  thumbnail: string
  descricao: string
  subtitulo: string
  dataCadastro: string
  categoriaUrl: string
  categoriaTitle: string
}

export type { IBlogContentDefaultProps, IBlogItem, IListBlog, IBlogDetailProps, IPostDetail }
