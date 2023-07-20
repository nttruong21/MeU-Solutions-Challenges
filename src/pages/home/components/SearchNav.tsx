import { useState, FC, FormEvent } from 'react'
import clsx from 'clsx'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'

import SearchResultItem from './SearchResultItem'

interface Props {
  isVisible: boolean
  citiesList: Array<string>
  handleCloseSearchNav: (value: boolean) => void
  handleSetSelectedCity: (city: string) => void
}

const SearchNav: FC<Props> = ({ isVisible, handleCloseSearchNav, citiesList }) => {
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [filteredCities, setFilteredCities] = useState<Array<string>>()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Filter cities and remove duplicate values
    const cities = searchKeyword.trim()
      ? Array.from(
          new Set(citiesList.filter((city) => city.toLowerCase().includes(searchKeyword.trim().toLowerCase())))
        )
      : undefined

    setFilteredCities(cities)
  }

  return (
    <div
      className={clsx(
        'fixed top-0 bottom-0 w-full md:w-sidebar bg-primary px-4 md:px-[42px] py-4 flex flex-col gap-10 transition-all duration-200 z-10',
        isVisible ? 'left-0 opacity-100' : '-left-full opacity-0'
      )}
    >
      <div className='flex justify-end'>
        <button className='text-primary text-[32px] cursor-pointer' onClick={() => handleCloseSearchNav(false)}>
          <CloseIcon fontSize='inherit' />
        </button>
      </div>

      {/* Search box */}
      <form className='flex justify-between items-center gap-3' onSubmit={(e) => handleSubmit(e)}>
        <div className='flex-1 h-[48px] flex items-center gap-2 border border-input bg-transparent outline-none px-2'>
          <span className='text-2xl text-icon leading-5'>
            <SearchIcon fontSize='inherit' />
          </span>
          <input
            type='text'
            className='w-full bg-transparent outline-none text-base font-medium placeholder-primary'
            placeholder='Search location'
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </div>
        <button type='submit' className='font-semibold text-primary bg-[#3C47E9] px-[17px] py-3'>
          Search
        </button>
      </form>

      {/* Search result */}
      <div className='flex-1 overflow-y-auto flex flex-col gap-6 mt-4'>
        {!filteredCities && <p>Please enter the city keyword to search</p>}
        {filteredCities && filteredCities.length === 0 && <p>No city match with this keyword</p>}
        {filteredCities &&
          filteredCities.length > 0 &&
          filteredCities.map((city, index) => <SearchResultItem key={city + index.toString()} city={city} />)}
      </div>
    </div>
  )
}

export default SearchNav
