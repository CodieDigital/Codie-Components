import React from 'react'

import { useConfigSite } from '../../../contexts/configs'
import { Container } from '../container'

import { BannerRotativoProps } from './interfaces'

import * as S from './styles'

export const BannerRotativo = ({
  listBanners,
  urlBaseImage,
  upTitle,
  title,
  scroll,
  fontFamily,
}: BannerRotativoProps) => {
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

      <div className='content'>
        <Container>
          <div className='titles'>
            {upTitle && <h2 className={`title-3${fontFamily}-regular`}>{upTitle}</h2>}
            <h1 className={`title-1${fontFamily}-bold`}>{title}</h1>

            {scroll && (
              <span className={`title-10${fontFamily}-medium`}>
                <svg xmlns='http://www.w3.org/2000/svg' width='18' height='24' viewBox='0 0 18 24'>
                  <defs>
                    <clipPath id='7kdwa'>
                      <path d='M8 24a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8h1.846a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8z' />
                    </clipPath>
                  </defs>
                  <g>
                    <g>
                      <path
                        fill='none'
                        strokeMiterlimit='20'
                        strokeWidth='4'
                        d='M8 24a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8h1.846a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8z'
                        clipPath='url("#7kdwa")'
                      />
                    </g>
                    <g>
                      <path fill='none' strokeMiterlimit='20' strokeWidth='2' d='M8.923 6.462v4.923' />
                    </g>
                  </g>
                </svg>
                scroll para baixo
              </span>
            )}
          </div>
        </Container>
      </div>
    </S.BannerRotativo>
  )
}
