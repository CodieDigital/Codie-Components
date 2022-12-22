export interface BannerRotativoProps {
  listBanners: Banners[]
  urlBaseImage: string
}

export interface Banners {
  id: number
  ordem: number
  titulo: string
  subtitulo: string
  thumbnail: string
  imagem: string
}
