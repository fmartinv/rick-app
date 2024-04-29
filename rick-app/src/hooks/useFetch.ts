import { useState, useEffect, useCallback } from 'react'

export const useFetch = <T>(
  url: string,
  params?: T
): {
  data: T | null
  isLoading: boolean
  error: unknown
} => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const responseData: T = await response.json()
      setData(responseData)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData, params])

  return { data, isLoading, error }
}
