export interface ButtonProps {
  buttonData: IButton
}

export interface IButton {
  url: string
  name?: string
  text?: string
  font?: string
  hasBg?: boolean
  hasAos?: boolean
  icon?: JSX.Element
  borderRadius?: string
  externalLink?: boolean
}

export interface IButtonStyles {
  $hasBg?: boolean
  $borderRadius?: string
}
