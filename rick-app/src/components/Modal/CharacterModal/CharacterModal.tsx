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
  console.log(modalData)
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
              name:<span>{modalData.name}</span>
            </p>
            <p>
              species: <span>{modalData.species}</span>
            </p>
            <p>
              status:<span>{modalData.status}</span>
            </p>
            <p>
              gender:<span>{modalData.gender}</span>
            </p>
            <p>
              loaction:<span>{modalData?.location?.name}</span>
            </p>
          </div>
        </div>
      )}
    </Modal>
  )
}

export default CharacterModal
