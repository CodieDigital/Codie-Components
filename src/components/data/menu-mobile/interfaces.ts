import { IButton } from '../simple-button/interfaces'
import { IBoxSocials } from '../box-socials/interfaces'

export interface MenuMobileProps {
  menu: boolean
  defaultFonts?: IFonts
  defaultButton?: IButton
  data: ICategoriesHeader[]
  defaultBoxSocials?: IBoxSocials
  setStateMenu: React.Dispatch<boolean>
}

export interface IFonts {
  title?: string
  link?: string
  isUppercase?: boolean
}

export interface ICategoriesHeader {
  id: number
  link?: string
  href: string
  categorias?: IServices[]
  logo?: string
}

export interface IServices {
  titulo: string
  subtitulo: string
  url: string
  id: number
}
