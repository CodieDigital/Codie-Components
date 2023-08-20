import React from 'react'

import { IIcon } from '../interface'

export function IconArrowRight({ fill }: IIcon) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='18' height='39' viewBox='0 0 18 39'>
      <g>
        <g>
          <path
            fill={fill}
            d='M.666 38.313c-.375-.301-.605-.74-.654-1.219-.053-.48.09-.95.396-1.33l13.438-16.399L.408 2.961A1.811 1.811 0 0 1 .666.412C.988.142 1.395 0 1.812 0c.543 0 1.055.243 1.405.66l14.37 17.554c.55.665.55 1.631 0 2.296L3.218 38.065a1.817 1.817 0 0 1-2.551.248z'
          />
        </g>
      </g>
    </svg>
  )
}
