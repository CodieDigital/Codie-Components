import React from 'react'

import Link from 'next/link'

import * as S from './styles'

export interface BreadCrumbProps {
  isBg?: boolean
  font?: string
  list?: {
    label: string
    url: string
  }[]
}

export function BreadCrumbComponent({ isBg, list, font }: BreadCrumbProps) {
  if (!list) {
    return <div></div>
  }

  return (
    <S.BreadCrumb $isBg={isBg}>
      {list.map((itemList) => (
        <li key={itemList.label} className={font ? font : 'link-1'}>
          {itemList.url ? <Link href={itemList.url}>{itemList.label}</Link> : <span>{itemList.label}</span>}
        </li>
      ))}
    </S.BreadCrumb>
  )
}
