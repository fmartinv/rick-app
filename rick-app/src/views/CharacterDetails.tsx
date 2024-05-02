import { FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CharacterDetailGrid from '../components/CharaterDetailGrid/CharacterDetailGrid'
import './characterDetails.css'

const CharacterDetails: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      {id && <CharacterDetailGrid id={id} />}
      <button className='btn-go-back' onClick={goBack}>
        Go Back
      </button>
    </div>
  )
}

export default CharacterDetails
