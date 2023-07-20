import React, { useContext } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { HomeContext } from '~/pages/home/HomePage'

interface Props {
  city: string
}

const SearchResultItem: React.FC<Props> = ({ city }) => {
  const { handleSetSelectedCity } = useContext(HomeContext)

  return (
    <div
      className='flex items-center justify-between border border-transparent px-3 py-4 cursor-pointer hover:border-primary group'
      onClick={() => handleSetSelectedCity(city)}
    >
      <span className='font-medium'>{city}</span>
      <span className='invisible group-hover:visible'>
        <ChevronRightIcon className='text-icon' />
      </span>
    </div>
  )
}

export default SearchResultItem
