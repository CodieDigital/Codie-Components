import { IBlogList } from '../../interfaces/blog-section'
import { IPathsApi } from '../data/next-image/interfaces'
import { CardContactProps, IContactLinkConfigs } from './card-contact-link'
import { IFaqs } from './card-faq'

interface ICardDataMap {
  blog: { type: 'blog'; data: IBlogList }
  contact: { type: 'contact'; data: CardContactProps }
  faqs: { type: 'faqs'; data: IFaqs }
}

interface GeneralProps {
  generalProps?: {
    faqProps?: number
    contactProps?: IContactLinkConfigs
    blogProps?: IPathsApi
  }
}

export type ICard = ICardDataMap[keyof ICardDataMap] & GeneralProps
