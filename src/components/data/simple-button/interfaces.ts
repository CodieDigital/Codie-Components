export interface ButtonProps {
  buttonData: IButton
}

export interface IButton {
  url: string
  text?: string
  hasBg?: boolean
  icon?: JSX.Element
  className?: string
  borderRadius?: string
  externalLink?: boolean
}

export interface IButtonStyles {
  $hasBg?: boolean
  $borderRadius?: string
}
