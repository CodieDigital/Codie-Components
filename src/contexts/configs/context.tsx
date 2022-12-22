import React, { useContext, createContext } from 'react'
import { IConfigsSiteContext, IContextConfigSite } from './interfaces'

const ConfigSiteContext = createContext<IConfigsSiteContext | undefined>(undefined)

function ConfigSiteProvider({ children, Swiper, SwiperSlide, EffectFade }: IContextConfigSite) {
  return (
    <ConfigSiteContext.Provider
      value={{
        Swiper,
        SwiperSlide,
        EffectFade,
      }}
    >
      {children}
    </ConfigSiteContext.Provider>
  )
}

function useConfigSite() {
  const context = useContext(ConfigSiteContext)

  return context
}

export { ConfigSiteProvider, useConfigSite }
