import { FC } from 'react'
import './pagination.css'

const range = (start: number, end: number): number[] => {
  return [...Array(end).keys()].map(el => el + start)
}

const Pagination: FC<{
  currentPage: number
  total: number | undefined
  limit?: number
  onPageChangeProp: (page: number) => void
}> = ({ currentPage, total, onPageChangeProp }) => {
  const pagesCount = total ?? 1
  const pages = range(1, pagesCount)
  const lastPage = pages[pages.length - 1]
  const isPreviousToLastPage =
    currentPage === pagesCount - 1 || currentPage === pagesCount - 2

  const onPageChange = (selectedPage: number) => {
    if (
      pagesCount !== undefined &&
      selectedPage >= 1 &&
      selectedPage <= pagesCount &&
      selectedPage !== currentPage
    ) {
      return onPageChangeProp(selectedPage)
    }
  }

  const visiblePages = pages.filter(
    page => page === currentPage || Math.abs(page - currentPage) <= 2
  )

  return (
    <div className='pagination'>
      <button
        className={currentPage === 1 ? 'disabled' : ''}
        onClick={() => onPageChange(1)}
      >
        ⏮
      </button>
      <button
        className={currentPage === 1 ? 'disabled' : ''}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ◀
      </button>
      {visiblePages.map(page => (
        <span
          key={page}
          onClick={() => onPageChange(page)}
          className={
            currentPage === page
              ? 'pagination__item pagination__item--active'
              : 'pagination__item'
          }
        >
          {page}
        </span>
      ))}

      {currentPage !== lastPage && !isPreviousToLastPage && (
        <span
          className={
            currentPage === lastPage
              ? 'pagination__item pagination__item--active'
              : 'pagination__item'
          }
          onClick={() => onPageChange(lastPage)}
        >
          {lastPage}
        </span>
      )}
      <button
        className={currentPage === pagesCount ? 'disabled' : ''}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ▶
      </button>
      <button
        className={currentPage === pagesCount ? 'disabled' : ''}
        onClick={() => onPageChange(pagesCount)}
      >
        ⏯
      </button>
    </div>
  )
}

export default Pagination
