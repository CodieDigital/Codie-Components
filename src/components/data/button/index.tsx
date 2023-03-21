import React from 'react'

import Link from 'next/link'

import { LoaderCircle } from '../loader-circle'

import * as S from './styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  text: string
  href?: string
  color: string
  target?: boolean
  loading?: boolean
  checked?: boolean
  sizeClass?: string
  backgroundColor: string
  type?: 'submit' | 'button'
}

export function ButtonComponent({
  text,
  href,
  type,
  color,
  target,
  checked,
  loading,
  sizeClass,
  backgroundColor,
  ...props
}: ButtonProps) {
  return (
    <S.Button
      color={color}
      checked={checked}
      $loading={loading}
      backgroundColor={backgroundColor}
      className={`button ${checked ? 'active' : ''}`}
    >
      {href && !type ? (
        <Link href={href} passHref>
          <a
            href='replace'
            target={target ? '_blank' : ''}
            className={sizeClass ? sizeClass : 'link-3-semibold '}
            {...props}
          >
            {text}
          </a>
        </Link>
      ) : (
        <button
          type={type ? type : 'submit'}
          disabled={checked || loading}
          className={sizeClass ? sizeClass : 'link-3-semibold '}
          {...props}
        >
          {loading ? <LoaderCircle size={40} /> : text}
        </button>
      )}
    </S.Button>
  )
}
