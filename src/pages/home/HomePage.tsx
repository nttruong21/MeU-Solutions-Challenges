import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'

import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import SearchNav from './components/SearchNav'
import { DaysWeather, CityWeather } from '~/types/weather'

interface GetCountriesResponseData {
  error: boolean
  msg: string
  data: Array<{
    iso2: string
    iso3: string
    country: string
    cities: Array<string>
  }>
}

interface GetWeatherResponseData {
  cod: string
  list: Array<{
    clouds: {
      all: number
    }
    dt: number
    dt_txt: string
    main: {
      feels_like: number
      grnd_level: number
      humidity: number
      pressure: number
      sea_level: number
      temp: number
      temp_kf: number
      temp_max: number
      temp_min: number
    }
    pop: number
    sys: {
      pod: string
    }
    visibility: number
    weather: Array<{
      id: number
      main: string
      icon: string
      description: string
    }>
    wind: {
      deg: number
      gust: number
      speed: number
    }
  }>
}

interface GetCurrentLocationResponseData {
  address: {
    city: string
  }
}

export const HomeContext = createContext({
  handleSetSelectedCity: (value: string) => {
    console.log(value)
  },
  isCelsiusDegree: true
})

const HomePage = () => {
  const [isShowSearchNav, setIsShowSearchNav] = useState(false)
  const [citiesList, setCitiesList] = useState<Array<string>>([])
  const [selectedCity, setSelectedCity] = useState<string>()
  const [selectedCityWeather, setSelectedCityWeather] = useState<CityWeather>()
  const [nextFiveDaysWeather, setNextFiveDaysWeather] = useState<DaysWeather>({})
  const [isCelsiusDegree, setIsCelsiusDegree] = useState(true)

  // Get cities data
  useEffect(() => {
    axios
      .get('https://countriesnow.space/api/v0.1/countries')
      .then((response) => {
        const axiosResponseData = response.data as GetCountriesResponseData
        if (axiosResponseData.error) {
          console.error('Get countries error:', axiosResponseData.msg)
          return
        }
        const cities = axiosResponseData.data.flatMap((country) => country.cities)
        setCitiesList(cities)
      })
      .catch((error) => {
        console.error('Axios error:', error)
      })
  }, [])

  // Get current location
  useEffect(() => {
    if ('geolocation' in navigator) {
      // Request the current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          console.log('Latitude:', latitude)
          console.log('Longitude:', longitude)

          // Get city name
          axios
            .get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then((getCurrentLocationResponse) => {
              const currentLocation = getCurrentLocationResponse.data as GetCurrentLocationResponseData
              const city =
                currentLocation.address && currentLocation.address.city
                  ? currentLocation.address.city
                  : 'Ho Chi Minh City'
              setSelectedCity(city)
              localStorage.setItem('current_city', city)
            })

            .catch((error) => console.error('Get current city error:', error))
        },
        (error) => {
          console.error('Error getting location:', error.message)
        }
      )
    } else {
      console.error('Geolocation is not supported by your browser')
    }
  }, [])

  // Get city weather
  useEffect(() => {
    if (!selectedCity) {
      return
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?appid=5caf59265a678ca70e57d4763ad8ddcc&q=${selectedCity}&units=metric`
      )
      .then((response) => {
        console.log(`Get weather of ${selectedCity} response:`, response)
        const responseData = response.data as GetWeatherResponseData
        setWeatherInformation(responseData)
      })
      .catch((error) => {
        console.error(`Get weather of ${selectedCity} error:`, error)
      })
  }, [selectedCity])

  // Set weather when receive the weather data
  const setWeatherInformation = (responseData: GetWeatherResponseData) => {
    const daysList = responseData.list

    // Get today weather information of this city
    const currentDayWeather = daysList[0]
    setSelectedCityWeather({
      weather: {
        main: currentDayWeather.weather[0].main,
        description: currentDayWeather.weather[0].description,
        icon: currentDayWeather.weather[0].icon
      },
      date: new Date(currentDayWeather.dt_txt),
      humidity: currentDayWeather.main.humidity,
      visibility: currentDayWeather.visibility,
      pressure: currentDayWeather.main.pressure,
      temp: isCelsiusDegree ? currentDayWeather.main.temp : convertCelsiusToFahrenheit(currentDayWeather.main.temp),
      wind: {
        speed: currentDayWeather.wind.speed,
        deg: currentDayWeather.wind.deg
      }
    })

    // Get next 5 days
    const daysWeather: DaysWeather = {}
    const currentDayString = dayjs(new Date()).format('YYYY-MM-DD').toString()

    let count = 0
    daysList.forEach((day) => {
      if (count === 5) {
        return
      }
      const dayValue = day.dt_txt.split(' ')[0]
      if (currentDayString !== dayValue && dayValue && !daysWeather[dayValue]) {
        daysWeather[dayValue] = {
          icon: day.weather[0].icon,
          minTemp: isCelsiusDegree ? day.main.temp_min : convertCelsiusToFahrenheit(day.main.temp_min),
          maxTemp: isCelsiusDegree ? day.main.temp_max : convertCelsiusToFahrenheit(day.main.temp_max)
        }
        count++
      }
    })

    setNextFiveDaysWeather(daysWeather)
  }

  // When change temp degree
  useEffect(() => {
    // Reset temp values
    setSelectedCityWeather((prevState) => {
      if (prevState) {
        return {
          ...prevState,
          weather: {
            ...prevState?.weather
          },
          wind: {
            ...prevState?.wind
          },
          temp: isCelsiusDegree
            ? convertFahrenheitToCelsius(prevState?.temp)
            : convertCelsiusToFahrenheit(prevState?.temp)
        }
      }
    })

    setNextFiveDaysWeather((prevState) => {
      const keys = Object.keys(prevState)
      const newState: DaysWeather = {}

      keys.forEach((key) => {
        newState[key] = {
          ...prevState[key],
          minTemp: isCelsiusDegree
            ? convertFahrenheitToCelsius(prevState[key].minTemp!)
            : convertCelsiusToFahrenheit(prevState[key].minTemp!),
          maxTemp: isCelsiusDegree
            ? convertFahrenheitToCelsius(prevState[key].maxTemp!)
            : convertCelsiusToFahrenheit(prevState[key].maxTemp!)
        }
      })
      return newState
    })
  }, [isCelsiusDegree])

  // Set body scrollable
  useEffect(() => {
    document.body.style.overflow = isShowSearchNav ? 'hidden' : 'auto'
  }, [isShowSearchNav])

  const handleSetSearchNavVisible = (value: boolean) => {
    setIsShowSearchNav(value)
  }

  const handleSetSelectedCity = (city: string) => {
    setSelectedCity(city)
    setIsShowSearchNav(false)
  }

  const convertCelsiusToFahrenheit = (value: number) => {
    return value * 1.8 + 32
  }

  const convertFahrenheitToCelsius = (value: number) => {
    return (value - 32) / 1.8
  }

  const handleSetCelsiusDegree = (value: boolean) => {
    if (value !== isCelsiusDegree) {
      setIsCelsiusDegree(value)
    }
  }

  return (
    <HomeContext.Provider value={{ handleSetSelectedCity, isCelsiusDegree }}>
      <SearchNav
        isVisible={isShowSearchNav}
        handleCloseSearchNav={handleSetSearchNavVisible}
        citiesList={citiesList}
        handleSetSelectedCity={handleSetSelectedCity}
      />

      <div className='flex flex-col lg:flex-row'>
        <LeftSide
          handleOpenSearchNav={handleSetSearchNavVisible}
          weather={selectedCityWeather}
          selectedCity={selectedCity}
        />

        <div className='flex-auto lg:flex-1 bg-secondary'>
          <RightSide
            isCelsiusDegree={isCelsiusDegree}
            handleSetCelsiusDegree={handleSetCelsiusDegree}
            nextFiveDaysWeather={nextFiveDaysWeather}
            weather={selectedCityWeather}
          />
        </div>
      </div>
    </HomeContext.Provider>
  )
}

export default HomePage
