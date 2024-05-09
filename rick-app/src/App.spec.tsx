import App from './App'
import {
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'

describe('App', () => {
  it('renders App component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText('Rick and Morty')).toBeVisible()
    expect(screen.getByTestId('main-layout')).toBeInTheDocument()
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  it('renders CharactersGrid component', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    waitForElementToBeRemoved(document.querySelector('div.spiner')).then(() =>
      expect(document.querySelector('div.spiner')).not.toBeInTheDocument()
    )
  })
})
