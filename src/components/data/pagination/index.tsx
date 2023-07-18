import React from 'react'

import { IPagination } from './interfaces'

import * as S from './styles'

export function PaginationComponent({
  pages,
  onSelect,
  boxColors,
  currentPage,
  hasNextPage,
  hasPreviousPage,
}: IPagination) {
  if (pages.length === 1) {
    return <div></div>
  }

  const goToTopPage = () => {
    window.location.href = '#top-page'
  }

  const handlePaginationButton = (pageItem) => {
    goToTopPage()
    return onSelect(pageItem)
  }

  const handleRightButton = (currentPage) => {
    goToTopPage()
    return onSelect(currentPage + 1)
  }

  const handleLeftButton = (currentPage) => {
    goToTopPage()
    return onSelect(currentPage - 1)
  }
  return (
    <S.PaginationComponent $boxColors={boxColors} className='pagination'>
      {hasPreviousPage && (
        <button
          style={{ display: currentPage == 1 ? 'none' : 'flex' }}
          type='button'
          onClick={() => handleLeftButton(currentPage)}
        >
          {'<'}
        </button>
      )}

      {pages.map((pageItem) => {
        return (
          <button
            key={`${pageItem}-pagination`}
            type='button'
            className={`${currentPage === pageItem ? 'active' : ''}`}
            onClick={() => handlePaginationButton(pageItem)}
          >
            {pageItem}
          </button>
        )
      })}

      {hasNextPage && (
        <button
          style={{
            display: pages[pages.length - 1] == currentPage ? 'none' : 'flex',
          }}
          type='button'
          onClick={() => handleRightButton(currentPage)}
        >
          {'>'}
        </button>
      )}
    </S.PaginationComponent>
  )
}
