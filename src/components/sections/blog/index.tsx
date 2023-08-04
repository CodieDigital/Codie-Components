import React from 'react'

import { SwiperSlide } from 'swiper/react'

import { Error, BoxSwiper, Button, Container } from '../../data'
import { Card } from '../../cards'
import { IBlogList } from '../../../interfaces/blog-section'

import * as S from './styles'

interface IBlog {
  data: IBlogList[]
}

export function Blog({ data }: IBlog) {
  const breakpoints = {
    1401: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1025: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    651: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  }

  const slidesBreakpoints = {
    1920: {
      breaking: breakpoints[1401].slidesPerView,
    },
    650: {
      breaking: breakpoints[0].slidesPerView,
      pagination: true,
    },
  }

  return (
    <Error name='blog'>
      <S.Blog>
        <Container>
          <div className='box-top'>
            <h2 className='title-2 uppercase'>Blog</h2>

            <Button
              buttonData={{
                hasBg: true,
                url: '/posts',
                text: 'Ver todos os posts',
              }}
            />
          </div>

          <BoxSwiper
            hasNavigation
            slidesLenght={data.length}
            breakpoints={breakpoints}
            slidesBreakpoints={slidesBreakpoints}
            navColor='var(--primary-color)'
            name='blog'
          >
            {data.map((blog, index) => (
              <SwiperSlide key={blog.id + index}>
                <Card type='blog' data={blog} />
              </SwiperSlide>
            ))}
          </BoxSwiper>
        </Container>
      </S.Blog>
    </Error>
  )
}
