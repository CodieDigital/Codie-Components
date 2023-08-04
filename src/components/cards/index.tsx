import React from 'react'

import { CardBlog } from './card-blog'
import { CardContactLink } from './card-contact-link'
import { CardFaq } from './card-faq'
import { ICard } from './interfaces'

export function Card({ type, data, generalProps }: ICard) {
  switch (type) {
    case 'blog':
      return <CardBlog pathsApi={generalProps?.blogProps!} card={data} />
    case 'contact':
      return <CardContactLink card={data} cardConfigs={generalProps?.contactProps} />
    case 'faqs':
      return <CardFaq index={generalProps?.faqProps!} faq={data} />
    default:
      throw new Error(`Invalid card type: ${type}`)
  }
}
