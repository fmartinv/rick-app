export interface OriginLocation {
  name: string
  url: string
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: OriginLocation
  location: OriginLocation
  image: string
  episode: string[]
  url: string
  created: string
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
