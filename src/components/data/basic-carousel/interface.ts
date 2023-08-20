import { SwiperOptions } from 'swiper'

export interface IBasicCarouselProps<T> {
  list: T[]
  component: React.ComponentType<{ data: T }>
  swiperConfigurations?: SwiperOptions
  iconColor?: string
}

export interface INavigationShape {
  nextEl: string
  prevEl: string
}
