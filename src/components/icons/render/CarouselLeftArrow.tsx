import React from 'react'

import { IIcon } from '../interface'

export function IconArrowLeft({ fill }: IIcon) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='18' height='39' viewBox='0 0 18 39'>
      <g>
        <g>
          <path
            fill={fill}
            d='M14.787 38.065L.41 20.51a1.807 1.807 0 0 1 0-2.296L14.787.665a1.807 1.807 0 0 1 2.549-.253c.771.633.887 1.774.254 2.55L4.152 19.364 17.59 35.764c.306.38.45.85.4 1.329a1.798 1.798 0 0 1-1.804 1.63 1.795 1.795 0 0 1-1.399-.658z'
          />
        </g>
      </g>
    </svg>
  )
}
