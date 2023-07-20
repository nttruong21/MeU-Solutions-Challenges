import { FC, ReactNode } from 'react'

import { Header, Footer } from './components'

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='mb-[72px]'>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
