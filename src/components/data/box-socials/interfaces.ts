export interface BoxSocialsProps {
  defaultData: IBoxSocials
}

export interface IBoxSocials {
  hasBg?: string
  svgColor?: string
  svgWidth?: string
  srcLinks: ISrcLinks
  isEmptyIcon?: boolean
}

export interface ISrcLinks {
  maps?: string
  email?: string
  youtube?: string
  facebook?: string
  linkedin?: string
  whattsapp?: string
  instagram?: string
}

export interface IBoxSocialsStyles {
  $hasBg?: string
  $svgColor?: string
  $svgWidth?: string
}
