import React from 'react'
import { useState } from 'react'

import Image from 'next/image'

import { Error } from '../error-body'

import { NextImageProps } from './interfaces'

import * as S from './styles'

export function NextImage({
  src,
  alt,
  sizes,
  hasAos,
  onClick,
  isBlogs,
  hasHover,
  pathsApi,
  className,
  isService,
  isUploads,
  isProduct,
  isPortfolio,
  forceLoading,
}: NextImageProps) {
  const [loading, setLoading] = useState(true)

  return (
    <Error name='next-image'>
      <S.Image
        onClick={onClick}
        $hasHover={hasHover}
        className={
          loading || forceLoading
            ? `loading next-image ${className ? className : ''}`
            : `next-image ${className ? className : ''}`
        }
        data-aos={hasAos && 'fade-up'}
        data-aos-duration={hasAos && '1500'}
      >
        <Image
          src={
            src
              ? isUploads
                ? pathsApi.uploads + src
                : isProduct
                ? pathsApi.product + src
                : isPortfolio
                ? pathsApi.portfolio + src
                : isService
                ? pathsApi.service + src
                : isBlogs
                ? pathsApi.blogs + src
                : src
              : '/images/default-image.png'
          }
          fill
          alt={alt || src || ''}
          onLoad={() => setLoading(true)}
          onLoadingComplete={() => setLoading(false)}
          onError={() => {
            setLoading(false)
          }}
          sizes={sizes}
        />
      </S.Image>
    </Error>
  )
}
