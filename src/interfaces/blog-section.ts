export interface IBlogs {
  pageTotal: number
  pageSize: number
  pageNumber: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  posts: IBlogList[]
}

export interface IBlogList {
  id: number
  titulo: string
  subtitulo: string
  thumbnail: string
  imagem: string
  url: string
  categoriaTitle: string
  categoriaId: number
  destaque: string
  dataCriacao: string
  descricao: string
}

export interface IDetach {
  categoriaBlogId: number
  categoriaBlog: ICategoryBlog
  titulo: string
  subtitulo: string
  descricao: string
  imagem: string
  thumbnail: string
  pageTitle: string
  metaDescription: string
  url: string
  id: number
  ativo: boolean
  destaque: boolean
  dataCriacao: string
  dataEdicao: string
}

export interface ICategoryBlog {
  urlFull: string
  subCategoriaBlogs: []
  autor: []
  noticias: []
  titulo: string
  pageTitle: string
  metaDescription: string
  url: string
  id: number
  ativo: boolean
  excluido: boolean
  destaque: boolean
  dataCriacao: string
}
