import { ReactNode } from 'react'
import Header from '../components/Header/Header'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}

export default MainLayout
