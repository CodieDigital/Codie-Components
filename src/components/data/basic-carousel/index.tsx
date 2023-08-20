import React from 'react'

import { createElement } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Error } from '../../data'
import { NavigationButton } from './navigation-button'

import { IBasicCarouselProps, INavigationShape } from './interface'

import * as S from './styles'

export function BasicCarousel<T>({ list, component, iconColor, swiperConfigurations }: IBasicCarouselProps<T>) {
  const Navigation = swiperConfigurations?.navigation as INavigationShape

  return (
    <Error name='BasicCarousel'>
      <S.BasicCarousel>
        <div className='swiper-box'>
          {Navigation && (
            <div className='desktop-left-button hide-tablet'>
              <NavigationButton className={Navigation.prevEl} iconName='IconArrowLeft' iconColor={iconColor} />
            </div>
          )}

          <Swiper
            slidesPerView='auto'
            style={{ paddingBottom: swiperConfigurations ? '30px' : '0' }}
            {...{
              ...swiperConfigurations,
              navigation: Navigation && {
                nextEl: '.' + Navigation.nextEl,
                prevEl: '.' + Navigation.prevEl,
              },
            }}
          >
            {list.map((item, index) => (
              <SwiperSlide key={index}>{createElement(component, { data: item })}</SwiperSlide>
            ))}
          </Swiper>

          {Navigation && (
            <div className='desktop-right-button hide-tablet'>
              <NavigationButton className={Navigation.nextEl} iconName='IconArrowRight' iconColor={iconColor} />
            </div>
          )}

          <div className='mobile-nav-buttons show-tablet'>
            {Navigation && (
              <NavigationButton className={Navigation.prevEl} iconName='IconArrowLeft' iconColor={iconColor} />
            )}

            {Navigation && (
              <NavigationButton className={Navigation.nextEl} iconName='IconArrowRight' iconColor={iconColor} />
            )}
          </div>
        </div>
      </S.BasicCarousel>
    </Error>
  )
}
