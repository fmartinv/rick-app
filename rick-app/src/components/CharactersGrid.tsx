import { FC } from 'react'
import { Character } from '../types'
import Pagination from '../Pagination'
import './charactersGrid.css'
import { useLogic } from '../useLogic'

const CharactersGrid: FC = () => {
  const { currentPage, data, setCurrentPage, totalPages } = useLogic()
  return (
    <>
      <div className='character-container'>
        {data &&
          data.results.map(
            ({ id, image, name, species, status, gender }: Character) => (
              <div className='characters-container__item' key={id}>
                <img
                  className='characters-container__img rounded'
                  src={image}
                  alt={name}
                />
                <div className='character-container__description'>
                  <p>
                    name:<span>{name}</span>
                  </p>
                  <p>
                    species: <span>{species}</span>
                  </p>
                  <p>
                    status:<span>{status}</span>
                  </p>
                  <p>
                    gender:<span>{gender}</span>
                  </p>
                </div>
              </div>
            )
          )}
      </div>
      <Pagination
        currentPage={currentPage}
        total={totalPages}
        onPageChangeProp={page => setCurrentPage(page)}
      />
    </>
  )
}

export default CharactersGrid
