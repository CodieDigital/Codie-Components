import { BreadCrumbProps } from '../breadcrumb'

export interface IBannerVideo {
  defaultConfigs: IBanners
  children?: React.ReactNode
  breadCrumb?: BreadCrumbProps
  defaultStyles?: {
    titleAlign?: 'flex-start' | 'center' | 'flex-end'
    titleColor?: string
    linkColor?: string
    linkHovervColor?: string
    subtitleColor?: string
    linkCenter?: boolean
    linkBottom?: string
    aspectRatio?: string
  }
}

export interface IBanners {
  video: string
  className?: string
  texts?: {
    title?: string
    subtitle?: string
    link?: string
    linkUrl?: string
  }
  classes?: {
    title?: string
    subtitle?: string
    link?: string
  }
}

export interface IBannerVideoStyles {
  $defaultStyles?: {
    titleAlign?: 'flex-start' | 'center' | 'flex-end'
    titleColor?: string
    linkColor?: string
    linkHovervColor?: string
    subtitleColor?: string
    linkCenter?: boolean
    linkBottom?: string
    aspectRatio?: string
  }
}
