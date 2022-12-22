import React from 'react'

import { useConfigSite } from '../../../contexts/configs'

import { BannerRotativoProps } from './interfaces'

import * as S from './styles'

export const BannerRotativo = ({ listBanners, urlBaseImage }: BannerRotativoProps) => {
  const { EffectFade, Swiper, SwiperSlide }: any = useConfigSite()

  return (
    <S.BannerRotativo>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        slidesPerView={1}
        modules={[EffectFade]}
        className='swiper-banner'
      >
        {listBanners.map((banner) => (
          <SwiperSlide key={banner.id + banner.imagem}>
            <div
              className='absolute-image hide-mobile'
              style={{ backgroundImage: `url(${urlBaseImage + banner.imagem})` }}
            ></div>

            <div
              className='absolute-image show-mobile'
              style={{ backgroundImage: `url(${urlBaseImage + banner.thumbnail})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.BannerRotativo>
  )
}
