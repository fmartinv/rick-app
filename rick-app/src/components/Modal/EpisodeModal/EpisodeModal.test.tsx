import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import EpisodeModal from './EpisodeModal'

describe('Renders the modal with the correct data', () => {
  it('should render the modal with correct data when isOpen is true and modalData is not null', () => {
    const isOpen = true
    const onClose = vi.fn()
    const episodeNumber = '2'

    const { container } = render(
      <EpisodeModal
        isOpen={isOpen}
        onClose={onClose}
        episodeNumber={episodeNumber}
      />
    )

    expect(container.firstChild).toBeTruthy()
  })

  it('should not render anything when isOpen is false', () => {
    const isOpen = false
    const onClose = vi.fn()
    const episodeNumber = '1'
    const { container } = render(
      <EpisodeModal
        isOpen={isOpen}
        onClose={onClose}
        episodeNumber={episodeNumber}
      />
    )

    expect(container.firstChild).toBeNull()
  })
})
