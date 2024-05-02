import './modal.css'
import { ModalProps } from './modal.types'

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>
          X
        </span>
        <div className='modal-body'>{children}</div>
      </div>
    </div>
  )
}

export default Modal
