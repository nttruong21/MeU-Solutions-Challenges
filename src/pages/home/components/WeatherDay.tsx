import { FC, useContext } from 'react'
import dayjs from 'dayjs'

import { DayWeather } from '~/types/weather'
import { HomeContext } from '~/pages/home/HomePage'

interface Props {
  dayWeather: DayWeather
}

const WeatherDay: FC<Props> = ({ dayWeather }) => {
  const { isCelsiusDegree } = useContext(HomeContext)

  return (
    <div className='w-full h-[170px] bg-primary flex flex-col items-center py-4 justify-between'>
      <p className='font-medium'>{dayjs(new Date(dayWeather.date)).format('ddd, D MMM')}</p>
      <img
        src={`http://www.openweathermap.org/img/wn/${dayWeather.info.icon || ''}@4x.png`}
        alt=''
        width={56}
        className='mb-4'
      />

      <div className='flex items-center justify-center gap-3 w-full px-4 font-medium'>
        <p className='text-primary'>
          {Math.round(dayWeather.info.minTemp!)}°{isCelsiusDegree ? 'C' : 'F'}
        </p>
        <p className='text-secondary'>
          {Math.round(dayWeather.info.maxTemp!)}°{isCelsiusDegree ? 'C' : 'F'}
        </p>
      </div>
    </div>
  )
}

export default WeatherDay
