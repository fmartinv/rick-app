import { Character } from '../../../models/charater.model'
import Modal from '../Modal'
import './characterModal.css'

const CharacterModal = ({
  isOpen,
  onClose,
  modalData
}: {
  isOpen: boolean
  onClose: () => void
  modalData: Partial<Character> | null
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {modalData && (
        <div className='characterModal-container'>
          <img
            className='characterModal-container__img rounded'
            src={modalData.image}
            alt={modalData.name}
          />
          <div className='character-container__description'>
            <p>
              Name:<span>{modalData.name}</span>
            </p>
            <p>
              Specie: <span>{modalData.species}</span>
            </p>
            <p>
              Status:<span>{modalData.status}</span>
            </p>
            <p>
              Gender:<span>{modalData.gender}</span>
            </p>
            <p>
              Location:<span>{modalData?.location?.name}</span>
            </p>
          </div>
        </div>
      )}
    </Modal>
  )
}

export default CharacterModal
