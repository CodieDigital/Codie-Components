export interface BannerRotativoProps {
  listBanners: Banners[]
  urlBaseImage: string
  upTitle: string
  title: string
  scroll?: string
  fontFamily?: string
}

export interface Banners {
  id: number
  ordem: number
  titulo: string
  subtitulo: string
  thumbnail: string
  imagem: string
}
