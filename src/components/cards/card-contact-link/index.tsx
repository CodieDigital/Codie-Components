import React from 'react'

import * as S from './styles'

export interface ICardContactLink {
  card: CardContactProps
  cardConfigs?: IContactLinkConfigs
}

export interface IContactLinkConfigs {
  color?: string
  fontClass?: string
  hoverColor?: string
  svgProps?: {
    fill?: string
    maxWidth?: string
    fillHover?: string
  }
}

export interface CardContactProps {
  url: string
  title?: string
  adress: string
  icon?: JSX.Element
}

export function CardContactLink({ card, cardConfigs }: ICardContactLink) {
  return (
    <S.CardContactLink
      href={card.url}
      $hasTitle={card.title}
      $color={cardConfigs?.color}
      $svgProps={cardConfigs?.svgProps}
      $hoverColor={cardConfigs?.hoverColor}
    >
      {card.icon && card.icon}

      <div className='box-text'>
        {card.title && (
          <h3 className={`${cardConfigs?.fontClass ? cardConfigs?.fontClass : 'link-1'} uppercase`}>{card.title}</h3>
        )}
        <span
          className={cardConfigs?.fontClass ? cardConfigs?.fontClass : 'link-1'}
          dangerouslySetInnerHTML={{ __html: card.adress }}
        ></span>
      </div>
    </S.CardContactLink>
  )
}
