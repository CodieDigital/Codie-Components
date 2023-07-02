import { SwiperOptions } from 'swiper'

export interface IBoxSwiper {
  name: string
  navColor?: string
  slidesLenght: number
  hasAutoPlay?: boolean
  children: React.ReactNode
  breakpoints?: IBreakpoints
  hasNavigation?: boolean
  slidesBreakpoints?: IInitialSlides
  navPositions?: INavPositions
}

export interface IBreakpoints {
  [width: number]: SwiperOptions
  [ratio: string]: SwiperOptions
}

export interface IInitialSlides {
  [breakPoint: number]: ISlidesBreakpoints
}

export interface INavPositions {
  [breakPoint: number]: INavBreakpoints
}

export interface INavBreakpoints {
  position: string
}

export interface ISlidesBreakpoints {
  breaking: number
  pagination?: boolean
}

export interface IBoxSwiperStyles {
  $name: string
  $navColor?: string
  $slidesLenght: number
  $navPositions: INavPositions
  $slidesBreakpoints: IInitialSlides
}
