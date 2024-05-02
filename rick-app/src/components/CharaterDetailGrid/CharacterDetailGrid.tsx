import { FC } from 'react'
import CharacterDetailLogic from './CharacterDetailLogic'
import useUtilLogic from './utilLogic'
import EpisodeModal from '../Modal/EpisodeModal/EpisodeModal'
import Spinner from '../Spinner/Spinner'
import { CharacterDetailProps } from './types'
import './characterDetailGrid.css'

const CharacterDetailGrid: FC<CharacterDetailProps> = ({ id }): JSX.Element => {
  const { isOpenModal, episodeNumber, handleEpisodeModal, setIsOpenModal } =
    useUtilLogic()
  const { dataFromUseFetch, isLoading, episodes, formattedDate } =
    CharacterDetailLogic(id)
  const { name, image, species, status, type, gender, location } =
    dataFromUseFetch || {}

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    )

  return (
    <>
      <div className='character-details-grid'>
        <div className='character-details-grid__item'>
          <img
            className='characters-container__img rounded'
            src={image}
            alt={name}
          />
        </div>
        <div className='character-details-grid-items__container'>
          <div className='character-details-grid__item'>
            <p>
              Name: <span>{name}</span>
            </p>
          </div>
          <div className='character-details-grid__item'>Specie: {species}</div>
          <div className='character-details-grid__item'>Status: {status}</div>
          <div className='character-details-grid__item'>Type: {type}</div>
          <div className='character-details-grid__item'>Gender: {gender}</div>
          <div className='character-details-grid__item'>
            Location: {location?.name}
          </div>
          <div className='character-details-grid__item'>
            Created: {formattedDate}
          </div>
        </div>
      </div>
      <h2>Episodes</h2>
      <div className='character-details-grid-items__episodes'>
        {episodes &&
          episodes?.map(el => (
            <span
              onClick={() => handleEpisodeModal(el)}
              key={el}
              className='character-details-grid-items__episodes-item'
            >
              {el}
            </span>
          ))}
      </div>
      <EpisodeModal
        isOpen={isOpenModal}
        onClose={() => {
          setIsOpenModal(false)
        }}
        episodeNumber={episodeNumber}
      />
    </>
  )
}

export default CharacterDetailGrid
