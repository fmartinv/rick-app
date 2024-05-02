import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { CharacterResponse } from '../../models/characterResponse.services'
import { formatDate } from '../../utils/helpers'
import { CHARACTER_URL } from '../../utils/constants'

const CharacterDetailLogic = (id: string) => {
  const [dataFromUseFetch, setDataFromUseFetch] =
    useState<CharacterResponse | null>(null)
  const [episodes, setEpisodes] = useState<string[] | undefined>(undefined)

  const { data, isLoading } = useFetch<CharacterResponse>(
    id ? `${CHARACTER_URL}${id}` : ''
  )
  useEffect(() => {
    setDataFromUseFetch(data)
  }, [data])

  const manageEpisodes = (
    episodes: string[] | undefined
  ): string[] | undefined => {
    if (episodes && episodes.length > 0) {
      return episodes.map(episode => episode.split('/').pop() || '')
    }
    return undefined
  }
  useEffect(() => {
    if (dataFromUseFetch && dataFromUseFetch.episode) {
      const result = manageEpisodes(dataFromUseFetch.episode)
      setEpisodes(result)
    }
  }, [dataFromUseFetch])
  const createdDate = dataFromUseFetch?.created
  let formattedDate = 'N/A'
  if (createdDate) {
    formattedDate = formatDate(createdDate)
  }

  return {
    dataFromUseFetch,
    isLoading,
    episodes,
    formattedDate
  }
}

export default CharacterDetailLogic
