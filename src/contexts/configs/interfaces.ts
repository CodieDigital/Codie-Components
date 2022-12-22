import { ReactNode } from 'react'

interface IConfigsSiteContext {
  Swiper: any
  SwiperSlide: any
  EffectFade: any
}

interface IContextConfigSite {
  children: ReactNode
  Swiper: any
  SwiperSlide: any
  EffectFade: any
}

export type { IConfigsSiteContext, IContextConfigSite }
