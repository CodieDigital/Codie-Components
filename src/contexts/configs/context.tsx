import React, { useContext, createContext } from 'react'
import { IConfigsSiteContext, IContextConfigSite } from './interfaces'

import { Scripts } from '../../components/scripts'

import { ThemeProvider } from 'styled-components'

const ConfigSiteContext = createContext<IConfigsSiteContext | undefined>(undefined)

function ConfigSiteProvider({ children, Swiper, SwiperSlide, EffectFade, configs, theme }: IContextConfigSite) {
  return (
    <ConfigSiteContext.Provider
      value={{
        Swiper,
        SwiperSlide,
        EffectFade,
        configs,
      }}
    >
         <ThemeProvider theme={theme}>{configs && <Scripts children={children} informations={configs} />}</ThemeProvider>
    </ConfigSiteContext.Provider>
  )
}

function useConfigSite() {
  const context = useContext(ConfigSiteContext)

  return context
}

export { ConfigSiteProvider, useConfigSite }
