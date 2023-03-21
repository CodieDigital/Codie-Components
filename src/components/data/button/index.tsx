import React from 'react'

import Link from 'next/link'

import { LoaderCircle } from '../loader-circle'

import * as S from './styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  text: string
  href?: string
  target?: boolean
  loading?: boolean
  checked?: boolean
  backgroundColor?: string
  type?: 'submit' | 'button'
}

export function ButtonComponent({
  text,
  href,
  type,
  target,
  checked,
  loading,
  backgroundColor,
  ...props
}: ButtonProps) {
  return (
    <S.Button checked={checked} $loading={loading} className='button' backgroundColor={backgroundColor}>
      {href && !type ? (
        <Link href={href} passHref>
          <a href='replace' target={target ? '_blank' : ''} className='link-3-semibold ' {...props}>
            {text}
          </a>
        </Link>
      ) : (
        <button className='link-3-semibold ' type={type ? type : 'submit'} disabled={checked || loading} {...props}>
          {loading ? <LoaderCircle size={40} /> : text}
        </button>
      )}
    </S.Button>
  )
}
