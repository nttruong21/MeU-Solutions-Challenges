export type DaysWeather = {
  [key: string]: {
    icon?: string
    minTemp?: number
    maxTemp?: number
  }
}

export interface DayWeather {
  date: string
  info: {
    icon?: string
    minTemp?: number
    maxTemp?: number
  }
}

export interface CityWeather {
  weather: {
    main: string
    description: string
    icon: string
  }
  humidity: number
  visibility: number
  pressure: number
  temp: number
  date: Date
  wind: {
    speed: number
    deg: number
  }
}
