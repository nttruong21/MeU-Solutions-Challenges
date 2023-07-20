import { FC, Dispatch } from 'react'
import SearchIcon from '@mui/icons-material/Search'

import { Container } from '~/components'
import HomeSearch from './HomeSearch'

interface Props {
  setIsShowSearchNav: Dispatch<React.SetStateAction<boolean>>
}

const HomeBanner: FC<Props> = ({ setIsShowSearchNav }) => {
  return (
    <div
      className={`relative bg-[url("src/assets/images/banner.webp")] bg-center bg-cover w-full pt-[42%] rounded-t-3xl`}
    >
      <Container>
        <div className='w-1/2 lg:w-1/3 absolute top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-6 md:gap-10'>
          <span className='text-white text-sm sm:text-4xl md:text-5xl lg:text-[64px] font-medium'>CatWiki</span>
          <span className='text-white text-[10px] sm:text-sm leading-normal md:text-xl lg:text-2xl'>
            Get to know more about your cat breed
          </span>

          <button
            className='flex sm:hidden items-center justify-between gap-1 bg-white rounded-full px-4'
            onClick={() => setIsShowSearchNav(true)}
          >
            <span className='text-sm text-primary font-medium'>Search</span>
            <span className='py-2 text-primary cursor-pointer'>
              <SearchIcon />
            </span>
          </button>

          <HomeSearch />
        </div>
      </Container>
    </div>
  )
}

export default HomeBanner
