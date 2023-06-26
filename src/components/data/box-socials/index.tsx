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

export function BoxSocials({ defaultData }: BoxSocialsProps) {
  return (
    <Error name='box-socials'>
      <S.BoxSocials
        className='box-socials'
        $hasBg={defaultData.hasBg}
        $svgColor={defaultData.svgColor}
        $svgWidth={defaultData.svgWidth}
      >
        {defaultData.srcLinks.instagram && (
          <Link href={defaultData.srcLinks.instagram} target='_blank' rel='external' className='link-redes'>
            {defaultData.isEmptyIcon ? <InstagramEmptyIcon /> : <InstagramIcon />}
          </Link>
        )}

        {defaultData.srcLinks.facebook && (
          <Link href={defaultData.srcLinks.facebook} target='_blank' rel='external' className='link-redes'>
            {defaultData.isEmptyIcon ? <FacebookNoBgIcon /> : <FacebookIcon />}
          </Link>
        )}

        {defaultData.srcLinks.whattsapp && (
          <Link href={defaultData.srcLinks.whattsapp} target='_blank' rel='external' className='link-redes'>
            {defaultData.isEmptyIcon ? <WhattsAppIcon /> : <WhattsAppInvIcon />}
          </Link>
        )}

        {defaultData.srcLinks.email && (
          <Link href={defaultData.srcLinks.email} target='_blank' rel='external' className='link-redes'>
            {defaultData.isEmptyIcon ? <EmailEmptyIcon /> : <EmailIcon />}
          </Link>
        )}

        {defaultData.srcLinks.maps && (
          <Link href={defaultData.srcLinks.maps} target='_blank' rel='external' className='link-redes'>
            <PinIcon />
          </Link>
        )}

        {defaultData.srcLinks.youtube && (
          <Link href={defaultData.srcLinks.youtube} target='_blank' rel='external' className='link-redes'>
            <YouTubeIcon />
          </Link>
        )}

        {defaultData.srcLinks.linkedin && (
          <Link href={defaultData.srcLinks.linkedin} target='_blank' rel='external' className='link-redes'>
            {defaultData.isEmptyIcon ? <LinkedinNoBgIcon /> : <LinkedinIcon />}
          </Link>
        )}
      </S.BoxSocials>
    </Error>
  )
}
