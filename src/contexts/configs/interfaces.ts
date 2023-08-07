import { ReactNode } from 'react'

interface IConfigsSiteContext {
  Swiper: any
  SwiperSlide: any
  EffectFade: any
  configs?: IConfigs
}

interface IConfigs {
  companyCode?: string
  facebookPixel?: string
  fantasyName?: string
  googleGTM?: string
  googleUA?: string
  rdStationSource?: string
  tawkToPropertyId?: string
  tawkToWidgetId?: string
  whatsapp?: string;
  ratedR?: boolean;
  domainVerify?: string;
  facebookDomainVerification?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  phone?: string;
  whatsappNumber?: string;
}

interface IContextConfigSite {
  children: ReactNode
  Swiper: any
  theme?: any;
  SwiperSlide: any
  EffectFade: any
  configs?: IConfigs
}

export type { IConfigsSiteContext, IContextConfigSite, IConfigs }
