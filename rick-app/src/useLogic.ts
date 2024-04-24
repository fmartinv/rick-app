import { useCallback, useEffect, useState } from 'react'
import { ApiResponse } from './types'
import { CHARACTERS_URL } from './utils/constants'

export const useLogic = () => {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const fetchCharacters = useCallback(async (currentPage: number) => {
    try {
      const response = await fetch(`${CHARACTERS_URL}?page=${currentPage}`)
      console.log('response', response)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      const dataFromApi: ApiResponse = await response.json()

      if (dataFromApi !== undefined) {
        setData(dataFromApi)
        setTotalPages(dataFromApi.info.pages)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, [])

  useEffect(() => {
    fetchCharacters(currentPage)
  }, [currentPage])

  return {
    currentPage,
    data,
    setCurrentPage,
    totalPages
  }
}
