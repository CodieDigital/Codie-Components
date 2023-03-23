export interface HeadComponentProps {
  painel: string
  pathname: string
  siteDomain: string
  headContent: IHeadPage
}

interface IHeadPage {
  pageTitle: string
  headScripts?: string
  imageOpenGraph?: string
  metaDescription: string
}
