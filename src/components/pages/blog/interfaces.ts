export interface BlogProps {
  pageTotal: number
  pageSize: number
  pageNumber: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  posts: Post[]
}

export interface Post {
  id: number
  titulo: string
  subtitulo: string
  thumbnail: string
  imagem: string
  url: string
  descricao: string
  dataCadastro: string
}

export interface IBlogContentDefaultProps {
  bannerImage: string
  titleBlog: string
}

export interface StateForm {
  state: 'error' | 'loading' | 'send' | 'default'
  message?: string
}
