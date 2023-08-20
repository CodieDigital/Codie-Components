import * as Icons from '../../../icons'

export interface INavigationButton {
  className: string
  iconName: keyof typeof Icons
  iconColor?: string
}
