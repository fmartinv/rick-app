import { render, screen } from '@testing-library/react'
import CharactersGrid from './CharactersGrid'
import { expect, test, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'

// Mock the useCharactersGridLogic hook
vi.mock('./useCharactersGridLogic', () => ({
  __esModule: true,
  default: vi.fn(() => ({
    currentPage: 1,
    data: {
      results: [
        {
          id: 1,
          image: 'image1.jpg',
          name: 'Character 1',
          species: 'Species 1',
          status: 'Status 1',
          gender: 'Gender 1',
          location: 'Location 1'
        }
      ]
    },
    error: null,
    handleClick: vi.fn(),
    handleModalClose: vi.fn(),
    isLoading: false,
    isOpen: true,
    modalData: {
      id: 1,
      image: 'image1.jpg',
      name: 'Character 1',
      species: 'Species 1',
      status: 'Status 1',
      gender: 'Gender 1',
      location: 'Location 1'
    },
    setCurrentPage: vi.fn(),
    totalPages: 2
  }))
}))

test('renders CharactersGrid component', () => {
  // Render the CharactersGrid component within BrowserRouter
  render(
    <BrowserRouter>
      <CharactersGrid />
    </BrowserRouter>
  )

  // Assert that the character grid container is present
  expect(screen.getByTestId('characters-grid')).toBeInTheDocument()

  // Assert that individual characters are rendered
  expect(screen.getByText('name:')).toBeInTheDocument()
  const nameElements = screen.getAllByText(/Character 1/i)
  expect(nameElements).toHaveLength(3)
})
