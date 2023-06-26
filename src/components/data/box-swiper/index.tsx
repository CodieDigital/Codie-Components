import React from 'react'

import { Error } from '../error-body'

import { NavLeftIcon, NavRightIcon } from '../../icons'

import { IBoxSwiper, IInitialSlides } from './interfaces'

import { useConfigSite } from '../../../contexts/configs'

import * as S from './styles'

export function BoxSwiper({
  name,
  children,
  navColor,
  hasAutoPlay,
  breakpoints,
  slidesLenght,
  hasNavigation,
  slidesBreakpoints,
}: IBoxSwiper) {
  const { Swiper }: any = useConfigSite()

  const defaultBreakpoints = {
    1400: { slidesPerView: 3, spaceBetween: 30 },
    1201: { slidesPerView: 3, spaceBetween: 20 },
    1025: { slidesPerView: 3, spaceBetween: 10 },
    769: { slidesPerView: 2, spaceBetween: 20 },
    651: { slidesPerView: 2, spaceBetween: 10 },
    0: { slidesPerView: 1, spaceBetween: 20 },
  }

  const defaultSlidesBreakpoints: IInitialSlides = {
    1920: {
      breaking: defaultBreakpoints[1400].slidesPerView,
    },
    1600: {
      breaking: defaultBreakpoints[1400].slidesPerView,
    },
    1400: {
      breaking: defaultBreakpoints[1400].slidesPerView,
    },
    1200: {
      breaking: defaultBreakpoints[1400].slidesPerView,
    },
    1024: {
      breaking: defaultBreakpoints[769].slidesPerView,
    },
    900: {
      breaking: defaultBreakpoints[769].slidesPerView,
    },
    768: {
      breaking: defaultBreakpoints[769].slidesPerView,
    },
    650: {
      breaking: defaultBreakpoints[0].slidesPerView,
      pagination: true,
    },
    500: {
      breaking: defaultBreakpoints[0].slidesPerView,
      pagination: true,
    },
    390: {
      breaking: defaultBreakpoints[0].slidesPerView,
      pagination: true,
    },
  }

  const defaultAutoPlay = {
    delay: 3500,
    disableOnInteraction: false,
  }

  return (
    <Error name={`box-swiper ${name}`}>
      <S.BoxSwiper
        className={`box-swiper ${name}`}
        $name={name}
        $navColor={navColor}
        $slidesLenght={slidesLenght}
        $slidesBreakpoints={slidesBreakpoints ? slidesBreakpoints : defaultSlidesBreakpoints}
      >
        {hasNavigation && (
          <>
            <button type='button' className={`nav-left-${name} button-nav`} aria-label='botão de navegação esquerdo'>
              <NavLeftIcon />
            </button>

            <button type='button' className={`nav-right-${name} button-nav`} aria-label='botão de navegação direito'>
              <NavRightIcon />
            </button>
          </>
        )}

        <div className={`swiper-pagination-${name}`}></div>

        <Swiper
          className={`swiper-${name}`}
          slidesPerView={'auto'}
          navigation={{
            nextEl: `.nav-right-${name}`,
            prevEl: `.nav-left-${name}`,
          }}
          autoplay={hasAutoPlay ? defaultAutoPlay : false}
          pagination={{
            el: `.swiper-pagination-${name}`,
            clickable: true,
            renderBullet: function (className) {
              return `<div class="${className} pagination-bullet"></div>`
            },
            bulletClass: 'swiper-pagination-bullet',
          }}
          breakpoints={breakpoints ? breakpoints : defaultBreakpoints}
        >
          {children}
        </Swiper>
      </S.BoxSwiper>
    </Error>
  )
}
