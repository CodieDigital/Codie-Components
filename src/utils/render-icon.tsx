import React from 'react'

import * as Icons from '../../src/components/icons'

export function RenderIcon(nameIcon: any, color?: string, stroke?: string) {
  return (
    <>
      {(Icons as any)[nameIcon] &&
        (Icons as any)[nameIcon]({
          fill: color || 'unset',
          stroke: stroke || 'unset',
        })}
    </>
  )
}
