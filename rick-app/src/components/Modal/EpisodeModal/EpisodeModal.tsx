import { useEffect, useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { Episode } from '../../../models/episode.model'
import { EPISODES_URL } from '../../../utils/constants'
import Modal from '../Modal'
import { EpisodeModalProps } from './episodeModal.types'

const EpisodeModal = ({
  isOpen,
  onClose,
  episodeNumber
}: EpisodeModalProps) => {
  const [episodeModalData, setEpisodeModalData] = useState<Episode | null>(null)

  const { data } = useFetch<Episode>(
    episodeNumber ? `${EPISODES_URL}${episodeNumber}` : ''
  )

  useEffect(() => {
    if (isOpen) {
      setEpisodeModalData(data)
    }
  }, [data, isOpen])

  if (!isOpen) return null
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {episodeModalData && (
        <div className='EpisodeModal-container'>
          <div className='character-container__description'>
            <p>
              Episode number:<span>{episodeNumber}</span>
            </p>
            <p>
              Name:<span>{episodeModalData.name}</span>
            </p>
            <p>
              Species: <span>{episodeModalData.air_date}</span>
            </p>
            <p>
              Season:<span>{episodeModalData.episode}</span>
            </p>
          </div>
        </div>
      )}
    </Modal>
  )
}

export default EpisodeModal
