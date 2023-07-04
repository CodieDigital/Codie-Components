export interface NextImageProps {
  alt?: string
  sizes?: string
  hasAos?: boolean
  pathsApi: IPathsApi
  isBlogs?: boolean
  className?: string
  hasHover?: boolean
  isUploads?: boolean
  isProduct?: boolean
  isService?: boolean
  onClick?: () => void
  isPortfolio?: boolean
  forceLoading?: boolean
  isBasePathApi?: boolean
  src: string | undefined
}

export interface IPathsApi {
  apiURL: string
  projectName: string
  base: string
  uploads: string
  blogs: string
  service: string
  product: string
  portfolio: string
}

export interface IImageStyles {
  $hasHover?: boolean
}
