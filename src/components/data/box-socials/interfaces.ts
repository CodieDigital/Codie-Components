export interface BoxSocialsProps {
  boxStyles?: IBoxSocials
  srcLinks: ISrcLinks
}

export interface IBoxSocials {
  bgColor?: string
  bgHoverColor?: string
  svgColor?: string
  svgHoverColor?: string
  svgWidth?: string
  padding?: string
  isEmptyIcon?: boolean
  boxGap?: string
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
  $bgColor?: string
  $bgHoverColor?: string
  $svgColor?: string
  $svgHoverColor?: string
  $svgWidth?: string
  $padding?: string
  $boxGap?: string
}
