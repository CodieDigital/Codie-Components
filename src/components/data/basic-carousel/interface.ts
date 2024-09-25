
export interface IBasicCarouselProps<T> {
  list: T[]
  component: React.ComponentType<{ data: T }>
  swiperConfigurations?: any
  iconColor?: string
}

export interface INavigationShape {
  nextEl: string
  prevEl: string
}
