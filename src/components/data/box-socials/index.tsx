import React from 'react'

import Link from 'next/link'
import { Error } from '../error-body'

import {
  PinIcon,
  EmailIcon,
  YouTubeIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  WhattsAppIcon,
  EmailEmptyIcon,
  FacebookNoBgIcon,
  WhattsAppInvIcon,
  LinkedinNoBgIcon,
  InstagramEmptyIcon,
} from '../../icons'

import { BoxSocialsProps } from './interfaces'

import * as S from './styles'

export function BoxSocials({ srcLinks, boxStyles }: BoxSocialsProps) {
  return (
    <Error name='box-socials'>
      <S.BoxSocials
        className='box-socials'
        $bgColor={boxStyles?.bgColor}
        $bgHoverColor={boxStyles?.bgHoverColor}
        $svgColor={boxStyles?.svgColor}
        $svgHoverColor={boxStyles?.svgHoverColor}
        $svgWidth={boxStyles?.svgWidth}
        $padding={boxStyles?.padding}
        $boxGap={boxStyles?.boxGap}
      >
        {srcLinks.instagram && (
          <Link href={srcLinks.instagram} target='_blank' rel='external' className='link-redes'>
            {boxStyles?.isEmptyIcon ? <InstagramEmptyIcon /> : <InstagramIcon />}
          </Link>
        )}

        {srcLinks.facebook && (
          <Link href={srcLinks.facebook} target='_blank' rel='external' className='link-redes'>
            {boxStyles?.isEmptyIcon ? <FacebookNoBgIcon /> : <FacebookIcon />}
          </Link>
        )}

        {srcLinks.whattsapp && (
          <Link href={srcLinks.whattsapp} target='_blank' rel='external' className='link-redes'>
            {boxStyles?.isEmptyIcon ? <WhattsAppIcon /> : <WhattsAppInvIcon />}
          </Link>
        )}

        {srcLinks.email && (
          <Link href={srcLinks.email} target='_blank' rel='external' className='link-redes'>
            {boxStyles?.isEmptyIcon ? <EmailEmptyIcon /> : <EmailIcon />}
          </Link>
        )}

        {srcLinks.maps && (
          <Link href={srcLinks.maps} target='_blank' rel='external' className='link-redes'>
            <PinIcon />
          </Link>
        )}

        {srcLinks.youtube && (
          <Link href={srcLinks.youtube} target='_blank' rel='external' className='link-redes'>
            <YouTubeIcon />
          </Link>
        )}

        {srcLinks.linkedin && (
          <Link href={srcLinks.linkedin} target='_blank' rel='external' className='link-redes'>
            {boxStyles?.isEmptyIcon ? <LinkedinNoBgIcon /> : <LinkedinIcon />}
          </Link>
        )}
      </S.BoxSocials>
    </Error>
  )
}
