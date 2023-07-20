import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div className='w-full max-w-screen-xl mx-auto px-4 md:px-[32px] lg:px-[60px] xl:px-[96px] py-3 sm:py-5'>
      {children}
    </div>
  )
}

export default Container
