import { FC } from 'react'
import Pagination from '../Pagination/Pagination'
import useCharactersGridLogic from './useCharactersGridLogic'
import { Character } from '../../models/charater.model'
import './charactersGrid.css'
import CharacterModal from '../Modal/CharacterModal/CharacterModal'
import MoreDetailButton from '../MoreDetailButton/MoreDetailButton'

const CharactersGrid: FC = () => {
  const {
    currentPage,
    data,
    error,
    handleClick,
    handleModalClose,
    isLoading,
    isOpen,
    modalData,
    setCurrentPage,
    totalPages
  } = useCharactersGridLogic()
  console.log('render')

  if (isLoading) return <div>Loading...</div>
  if (data?.results.length === 0)
    return <div className='no-results'>No results</div>
  if (error) return <div>'Sorry there was an error'</div>

  return (
    <>
      <div className='character-container'>
        {data?.results.map(
          ({
            id,
            image,
            name,
            species,
            status,
            gender,
            location
          }: Character) => (
            <div className='characters-container__item' key={id}>
              <img
                className='characters-container__img rounded'
                src={image}
                alt={name}
                onClick={() =>
                  handleClick({
                    name,
                    species,
                    status,
                    gender,
                    image,
                    location
                  })
                }
              />
              <div className='character-container__description'>
                <p>
                  name:<span>{name}</span>
                </p>
                <MoreDetailButton id={id} name={name} />
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
      {isOpen && (
        <CharacterModal
          isOpen={isOpen}
          modalData={modalData}
          onClose={handleModalClose}
        />
      )}
    </>
  )
}

export default CharactersGrid
