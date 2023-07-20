import { useState, useEffect, useContext, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'

import { HomePageContext } from '~/pages/home/HomePage'
import { BreedSummary } from '~/types/breed.type'

const HomeSearch = () => {
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
    <>
      {/* Search bar */}
      <div className='hidden sm:flex w-full items-center justify-between gap-4 bg-white text-primary h-[46px] md:h-[70px] rounded-full px-6 peer'>
        <input
          id='home-search-input'
          type='text'
          className='flex-1 h-full bg-transparent outline-none border-none placeholder-primary font-medium'
          placeholder='Enter your breed'
          onChange={handleChangeSearchInput}
        />
        <label htmlFor='home-search-input' className='py-2 text-primary cursor-pointer'>
          <SearchIcon />
        </label>
      </div>

      {/* Search result */}
      {breedsSummaryFilteredList && (
        <div className='absolute left-0 right-0 top-[calc(100%_+_1rem)] h-auto bg-white rounded-3xl p-4 hidden peer-focus-within:block'>
          {breedsSummaryFilteredList.length > 0 ? (
            <ul className='w-full max-h-[220px] overflow-y-auto'>
              {breedsSummaryFilteredList.map((breedSummary) => (
                <li
                  key={breedSummary.id}
                  onMouseDown={() => navigate(`/breeds/${breedSummary.id}`)}
                  className='p-2 bg-white hover:bg-gray-200 cursor-pointer rounded-xl transition-all duration-200'
                >
                  <span className='font-medium custom-text-overflow'>{breedSummary.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className='text-sm md:text-base font-medium'>There are no results matching the keyword</div>
          )}
        </div>
      )}
    </>
  )
}

export default HomeSearch
