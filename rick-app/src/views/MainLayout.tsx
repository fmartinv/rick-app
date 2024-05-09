import { ReactNode } from 'react'
import Header from '../components/Header/Header'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div data-testid='main-layout'>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default MainLayout
