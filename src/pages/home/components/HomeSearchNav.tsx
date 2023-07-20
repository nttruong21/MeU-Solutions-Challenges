import { FC, Dispatch, useContext, useState, useEffect, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'

import { HomePageContext } from '~/pages/home/HomePage'
import { BreedSummary } from '~/types/breed.type'

interface Props {
  isVisible: boolean
  setIsShowSearchNav: Dispatch<React.SetStateAction<boolean>>
}

const HomeSearchNav: FC<Props> = ({ isVisible, setIsShowSearchNav }) => {
  const navigate = useNavigate()
  const { breedsSummaryList } = useContext(HomePageContext)

  const [breedsSummaryFilteredList, setBreedsSummaryFilteredList] = useState<Array<BreedSummary>>([])

  useEffect(() => {
    breedsSummaryList && setBreedsSummaryFilteredList([...breedsSummaryList])
  }, [breedsSummaryList])

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const searchKeyword = e.target.value.trim()
    console.log(searchKeyword)
    if (!breedsSummaryList) {
      return
    }
    setBreedsSummaryFilteredList(
      searchKeyword
        ? breedsSummaryList.filter((breedSummary) => breedSummary.name.toLowerCase().includes(searchKeyword))
        : [...breedsSummaryList]
    )
  }

  return (
    <div
      className={clsx(
        'fixed left-0 right-0 px-4 md:px-[32px] lg:px-[60px] xl:px-[96px] py-3 sm:py-5 bg-white shadow-md z-10 transition-all duration-200 ease-in-out',
        isVisible ? 'opacity-100 top-0' : 'opacity-0 -top-full'
      )}
    >
      <div className='flex flex-col gap-6'>
        <div className='flex justify-end'>
          <button className='p-2 bg-gray-100 rounded-3xl' onClick={() => setIsShowSearchNav(false)}>
            <CloseIcon fontSize='medium' />
          </button>
        </div>

        {/* Search bar */}
        <div className='flex w-full items-center justify-between gap-4 bg-white text-primary border border-primary h-[46px] md:h-[70px] rounded-full px-6 peer'>
          <input
            id='home-search-nav-input'
            type='text'
            className='flex-1 h-full bg-transparent outline-none border-none placeholder-primary font-medium'
            placeholder='Enter your breed'
            onChange={handleChangeSearchInput}
          />
          <label htmlFor='home-search-nav-input' className='py-2 text-primary cursor-pointer'>
            <SearchIcon />
          </label>
        </div>

        {/* Search result */}
        {breedsSummaryFilteredList && (
          <div className='absolute left-0 right-0 top-full h-auto bg-white p-4 hidden peer-focus-within:block shadow-md'>
            {breedsSummaryFilteredList.length > 0 ? (
              <ul className='w-full max-h-[220px] overflow-y-auto'>
                {breedsSummaryFilteredList.map((breedSummary) => (
                  <li
                    key={breedSummary.id}
                    onMouseDown={() => navigate(`/breeds/${breedSummary.id}`)}
                    className='p-2 bg-white hover:bg-gray-200 cursor-pointer transition-all duration-200 rounded-md'
                  >
                    <span className='font-medium custom-text-overflow'>{breedSummary.name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className='font-medium'>There are no results matching the keyword</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomeSearchNav
