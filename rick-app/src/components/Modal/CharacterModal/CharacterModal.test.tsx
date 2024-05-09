import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CharacterModal from './CharacterModal'
import '@testing-library/jest-dom'
// Renders the modal with the correct data when isOpen is true and modalData is not null
describe('Renders the modal with the correct data', () => {
  it('should render the modal with correct data when isOpen is true and modalData is not null', () => {
    const isOpen = true
    const onClose = vi.fn()
    const modalData = {
      id: 1,
      name: 'Test Character',
      status: 'Alive',
      species: 'Human',
      type: 'Test Type',
      gender: 'Male',
      origin: {
        name: 'Test Origin',
        url: 'test-url'
      },
      location: {
        name: 'Test Location',
        url: 'test-url'
      },
      image: 'test-image-url',
      episode: ['test-episode'],
      url: 'test-url',
      created: '2022-01-01'
    }

    render(
      <CharacterModal isOpen={isOpen} onClose={onClose} modalData={modalData} />
    )

    expect(screen.getByText(modalData.name)).toBeInTheDocument()
    expect(screen.getByText(modalData.species)).toBeInTheDocument()
    expect(screen.getByText(modalData.status)).toBeInTheDocument()
    expect(screen.getByText(modalData.gender)).toBeInTheDocument()
    expect(screen.getByText(modalData.location.name)).toBeInTheDocument()
  })

  it('should not render the modal when isOpen is false', () => {
    const isOpen = false
    const onClose = vi.fn()
    const modalData = null

    render(
      <CharacterModal isOpen={isOpen} onClose={onClose} modalData={modalData} />
    )

    expect(screen.queryByTestId('character-modal')).not.toBeInTheDocument()
  })
})
