import React from 'react'
import Link from 'next/link'
import * as S from './styles'
import { WhattsappButtonProps } from './interfaces'

export function WhattsappButton({ href, text }: WhattsappButtonProps) {
  return (
    <Link href={href}>
      <S.WhattsappButton className='link-3-objective-bold'>
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
          <g>
            <g>
              <path d='M9.046 16.313h-.012a7.503 7.503 0 0 1-3.792-1.035l-.27-.161-2.812.731.754-2.734-.18-.28a7.401 7.401 0 0 1-1.136-3.946c0-4.084 3.34-7.414 7.456-7.414a7.4 7.4 0 0 1 5.266 2.183A7.341 7.341 0 0 1 16.5 8.899c-.003 4.083-3.345 7.414-7.45 7.414M15.39 2.587A9.106 9.106 0 0 0 9.034 0C4.097 0 .078 4 .076 8.92c0 1.572.412 3.105 1.196 4.459L0 18l4.751-1.239a9.047 9.047 0 0 0 4.283 1.085h.004c4.939 0 8.96-4.002 8.962-8.922 0-2.382-.93-4.624-2.621-6.308m-2.255 8.17c-.226-.112-1.326-.65-1.53-.724-.205-.076-.355-.113-.505.113-.148.22-.578.722-.708.871-.131.146-.262.158-.485.056-.225-.112-.947-.349-1.802-1.114-.666-.596-1.113-1.327-1.245-1.552-.13-.225-.014-.349.098-.461.102-.101.225-.259.338-.392.11-.136.145-.226.223-.372.075-.158.036-.282-.02-.393-.055-.113-.503-1.215-.69-1.655-.18-.438-.366-.383-.505-.383-.129-.01-.278-.01-.428-.01a.845.845 0 0 0-.598.268c-.204.225-.783.765-.783 1.857 0 1.091.802 2.148.914 2.306.112.146 1.579 2.396 3.825 3.364.535.225.952.36 1.278.471.535.17 1.024.147 1.41.091.43-.068 1.325-.54 1.512-1.07.191-.528.191-.967.135-1.068-.056-.101-.203-.158-.428-.259' />
            </g>
          </g>
        </svg>
        {text}
      </S.WhattsappButton>
    </Link>
  )
}