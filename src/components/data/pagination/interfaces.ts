export interface IPagination {
  pages: number[]
  currentPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  onSelect(page: number): void
}

export interface IPaginationStyles {
  $boxColors?: {
    $color?: string
    $borderColor?: string
    $hoverColor?: string
    $bgHoverColor?: string
    $borderHoverColor?: string
  }
}
