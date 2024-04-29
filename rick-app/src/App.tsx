import { Route, Routes } from 'react-router-dom'
import CharactersGrid from './components/CharactersGrid/CharactersGrid'
import './App.css'
// import MainLayout from './views/MainLayout'
import CharacterDetails from './views/CharacterDeatils'
import MainLayout from './views/MainLayout'

function App() {
  return (
    <>
      {/* <Router> */}
      <Routes>
        <Route
          path='/undefined'
          element={
            <MainLayout>
              <CharactersGrid />
            </MainLayout>
          }
        />

        <Route path='/characters/:id' element={<CharacterDetails />} />
      </Routes>
      {/* </Router> */}
    </>
  )
}

export default App
