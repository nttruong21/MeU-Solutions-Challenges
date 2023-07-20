import React, { useContext } from 'react'
import dayjs from 'dayjs'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import { HomeContext } from '~/pages/home/HomePage'
import { CityWeather } from '~/types/weather'

interface Props {
  weather?: CityWeather
  selectedCity?: string
  handleOpenSearchNav: (value: boolean) => void
}

const LeftSide: React.FC<Props> = ({ weather, selectedCity, handleOpenSearchNav }) => {
  const { isCelsiusDegree, handleSetSelectedCity } = useContext(HomeContext)

  const handleGetCurrentLocation = () => {
    const currentCity = localStorage.getItem('current_city') || 'Ho Chi Minh City'
    handleSetSelectedCity(currentCity)
  }

  return (
    <div className='w-full lg:w-sidebar min-h-screen bg-primary px-4 lg:px-[46px] py-8 lg:py-[42px]'>
      {weather && selectedCity && (
        <div className='flex flex-col items-center gap-24'>
          <div className='relative w-full flex justify-between'>
            <button
              className='bg-button-primary px-[22px] py-[10px] text-sm font-medium'
              onClick={() => handleOpenSearchNav(true)}
            >
              Search for places
            </button>
            <button
              className='bg-button-primary rounded-full w-[40px] h-[40px] items-center justify-center peer'
              onClick={handleGetCurrentLocation}
            >
              <MyLocationIcon width={24} height={24} />
            </button>
            <span className='absolute right-0 top-12 bg-secondary text-sm font-medium px-2 py-2 rounded-md invisible opacity-0 peer-hover:visible peer-hover:opacity-100 transition-all'>
              Get current location
            </span>
          </div>

          <img
            src={`http://www.openweathermap.org/img/wn/${weather.weather.icon}@4x.png`}
            alt=''
            className='w-[150px] lg:w-[202px]'
          />

          <p className='text-[144px] font-medium'>
            {Math.round(weather?.temp)}
            <span className='text-5xl text-secondary'>°{isCelsiusDegree ? 'C' : 'F'}</span>
          </p>

          <p className='text-4xl font-semibold text-secondary'>{weather?.weather.main}</p>

          <div className='flex flex-col items-center gap-8'>
            <div className='flex text-tertiary font-medium items-center gap-4'>
              <p>Today</p>
              <div style={{ backgroundColor: 'rgba(160, 159, 177, 1)' }} className='w-1 h-1 rounded-full'></div>
              <p>{dayjs(new Date(weather.date)).format('ddd, D MMM')}</p>
            </div>

            <div className='flex text-tertiary gap-1 items-center mb-8 lg:mb-0'>
              <LocationOnIcon />
              <span className='text-[18px] font-semibold'>{selectedCity}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LeftSide
