import { Character } from './charater.model'
import { Episode } from './episode.model'
export interface RickResponse {
  data: ApiResponse
}
export interface ApiResponse {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Character[]
}

export interface CharacterResponse extends Character {
  data: Character
}

export interface EpisodeResponse extends Episode {
  data: Episode
}
