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

import { IBoxSocials } from './interfaces'

import * as S from './styles'

export function BoxSocials({ hasBg, srcLinks, svgWidth, svgColor, isEmptyIcon }: IBoxSocials) {
  return (
    <Error name='box-socials'>
      <S.BoxSocials className='box-socials' $hasBg={hasBg} $svgColor={svgColor} $svgWidth={svgWidth}>
        {srcLinks.instagram && (
          <Link href={srcLinks.instagram} target='_blank' rel='external' className='link-redes'>
            {isEmptyIcon ? <InstagramEmptyIcon /> : <InstagramIcon />}
          </Link>
        )}

        {srcLinks.facebook && (
          <Link href={srcLinks.facebook} target='_blank' rel='external' className='link-redes'>
            {isEmptyIcon ? <FacebookNoBgIcon /> : <FacebookIcon />}
          </Link>
        )}

        {srcLinks.whattsapp && (
          <Link href={srcLinks.whattsapp} target='_blank' rel='external' className='link-redes'>
            {isEmptyIcon ? <WhattsAppIcon /> : <WhattsAppInvIcon />}
          </Link>
        )}

        {srcLinks.email && (
          <Link href={srcLinks.email} target='_blank' rel='external' className='link-redes'>
            {isEmptyIcon ? <EmailEmptyIcon /> : <EmailIcon />}
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
            {isEmptyIcon ? <LinkedinNoBgIcon /> : <LinkedinIcon />}
          </Link>
        )}
      </S.BoxSocials>
    </Error>
  )
}
