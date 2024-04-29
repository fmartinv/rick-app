import { useEffect, useState } from 'react'
import { ApiResponse } from '../../models/characterResponse.services'
import { CHARACTERS_URL } from '../../utils/constants'
import { useFetch } from '../../hooks/useFetch'
import { Character } from '../../models/charater.model'

const useCharactersGridLogic = () => {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [totalPages, setTotalPages] = useState<number | undefined>(1)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [modalData, setModalData] = useState<Partial<Character> | null>(null)

  const {
    data: modalDataFromApi,
    isLoading,
    error
  } = useFetch<ApiResponse | null>(`${CHARACTERS_URL}?page=${currentPage}`)
  useEffect(() => {
    setData(modalDataFromApi)
    setTotalPages(modalDataFromApi?.info.pages)
  }, [modalDataFromApi, isLoading, error, currentPage])

  const handleModalClose = () => {
    setIsOpen(false)
  }
  const handleClick = ({
    name,
    species,
    status,
    gender,
    image,
    location
  }: Partial<Character>) => {
    setIsOpen(true)
    setModalData({ name, species, status, gender, image, location })
  }

  return {
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
  }
}

export default useCharactersGridLogic
