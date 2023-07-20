import { FC } from 'react'
import NavigationIcon from '@mui/icons-material/Navigation'

import WeatherDay from './WeatherDay'
import DegreeButton from './DegreeButton'
import { DaysWeather, CityWeather, DayWeather } from '~/types/weather'

interface Props {
  nextFiveDaysWeather: DaysWeather
  weather?: CityWeather
  isCelsiusDegree: boolean
  handleSetCelsiusDegree: (value: boolean) => void
}

const RightSide: FC<Props> = ({ nextFiveDaysWeather, weather, isCelsiusDegree, handleSetCelsiusDegree }) => {
  const nextFiveDaysWeatherArray: Array<DayWeather> = Object.entries(nextFiveDaysWeather).map(([key, value]) => ({
    date: key,
    info: value
  }))

  return (
    <div className='min-h-screen py-[38px] flex flex-col gap-16'>
      <div className='flex justify-end gap-3 px-[32px] md:px-[60px] lg:px-[120px]'>
        <DegreeButton active={isCelsiusDegree} handleClick={() => handleSetCelsiusDegree(true)}>
          °C
        </DegreeButton>
        <DegreeButton active={!isCelsiusDegree} handleClick={() => handleSetCelsiusDegree(false)}>
          °F
        </DegreeButton>
      </div>

      <div className='px-[32px] md:px-[60px] lg:px-[120px]'>
        <div className='flex flex-wrap xl:flex-nowrap -mx-3 gap-y-6 '>
          {nextFiveDaysWeatherArray.map((dayWeather) => (
            <div key={dayWeather.date} className='w-1/2 md:w-1/3 xl:w-1/5 px-3'>
              {<WeatherDay dayWeather={dayWeather} />}
            </div>
          ))}
        </div>
      </div>

      {/*  */}
      {weather && (
        <div className='flex flex-col gap-8 px-4 md:px-[60px] lg:px-[120px]'>
          <p className='text-2xl font-bold'>Today's Highlights</p>

          <div className='grid grid-flow-row auto-rows-auto grid-cols-1 xl:grid-cols-2 gap-10'>
            <div className='h-[204px] bg-primary flex flex-col items-center px-8 pt-6'>
              <div className='flex flex-col items-center gap-7'>
                <p className='font-medium'>Wind status</p>
                <p className='text-[64px] font-bold'>
                  {weather.wind.speed.toString().replace('.', ',')}
                  <span className='text-[36px] font-medium'> mph</span>
                </p>
              </div>
              <div className='flex flex-1 items-center gap-3'>
                <div
                  className={`w-[30px] h-[30px] rounded-full flex items-center justify-center `}
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', transform: `rotate(${weather.wind.deg}deg)` }}
                >
                  <span className='text-base'>
                    <NavigationIcon fontSize='inherit' />
                  </span>
                </div>
                <p className='text-sm font-medium'>WSW</p>
              </div>
            </div>

            <div className='h-[204px] bg-primary flex flex-col items-center px-8 pt-6'>
              <div className='flex flex-col items-center gap-7'>
                <p className='font-medium'>Humidity</p>
                <p className='text-[64px] font-bold'>
                  {weather.humidity}
                  <span className='text-[36px] font-medium'> %</span>
                </p>
              </div>
              <div className='w-11/12 flex flex-1 items-center'>
                <div className='w-full flex flex-col items-center gap-1'>
                  <div className='w-full flex items-center justify-between text-xs font-bold text-secondary'>
                    <p>0</p>
                    <p>50</p>
                    <p>100</p>
                  </div>
                  <div className='relative w-full h-2 bg-button-secondary rounded-full overflow-hidden'>
                    <div
                      style={{ width: `${weather.humidity}%` }}
                      className={`absolute top-0 right-0 bottom-0 left-0 bg-progress`}
                    ></div>
                  </div>
                  <div className='w-full text-right'>
                    <p className='text-xs font-bold text-secondary'>%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='h-[160px] bg-primary flex flex-col items-center gap-8 px-8 pt-6'>
              <p className='font-medium'>Visibility</p>
              <p className='text-[64px] font-bold text-center'>
                {(weather.visibility / 1000).toString().replace('.', ',')}{' '}
                <span className='text-[36px] font-medium'>miles</span>
              </p>
            </div>

            <div className='h-[160px] bg-primary flex flex-col items-center gap-8 px-8 pt-6'>
              <p className='font-medium'>Air Pressure</p>
              <p className='text-[64px] font-bold text-center'>
                {weather.pressure} <span className='text-[36px] font-medium'>mb</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RightSide
