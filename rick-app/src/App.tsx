import { Route, Routes } from 'react-router-dom'
import CharactersGrid from './components/CharactersGrid/CharactersGrid'
import './App.css'
// import MainLayout from './views/MainLayout'
import CharacterDetails from './views/CharacterDetails'
import MainLayout from './views/MainLayout'

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <MainLayout>
              <CharactersGrid />
            </MainLayout>
          }
        />

        <Route path='/characters/:id' element={<CharacterDetails />} />
      </Routes>
    </>
  )
}

export default App
