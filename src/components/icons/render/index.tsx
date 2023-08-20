import { RenderIcon } from '../../../utils/render-icon'

import * as icons from '../../icons'

export type IconsNames = keyof typeof icons

interface IIcon {
  name: IconsNames
  fill?: string
  stroke?: string
}

export function Icon({ name, fill, stroke }: IIcon) {
  return RenderIcon(name, fill, stroke)
}
