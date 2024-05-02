import { useState } from 'react'

const useUtilLogic = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [episodeNumber, setEpisodeNumber] = useState<string>('')
  const handleEpisodeModal = (episode: string) => {
    setIsOpenModal(true)
    setEpisodeNumber(episode)
  }
  return {
    isOpenModal,
    episodeNumber,
    handleEpisodeModal,
    setIsOpenModal
  }
}

export default useUtilLogic
