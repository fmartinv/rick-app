import { Character } from './charater.model'
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
