/* React/Next */
import Image from 'next/image'
import React from 'react'

/* Styles */
import * as S from './styles'

interface NextImageProps {
  isBaseUrl?: boolean
  isBaseImageGallery?: boolean
  src: string | undefined
  alt: string
  loading?: 'eager' | 'lazy' | undefined
  priority?: boolean
  baseImage?: string
  baseImageGallery?: string
}
export function NextImage({ src, isBaseUrl, isBaseImageGallery, alt, baseImage, baseImageGallery }: NextImageProps) {
  return (
    <S.Image className='next-image'>
      <Image
        alt={alt}
        src={
          src
            ? isBaseUrl
              ? baseImage + src
              : isBaseImageGallery
              ? baseImageGallery + src
              : src
            : '/images/default-image.webp'
        }
        fill
      />
    </S.Image>
  )
}
