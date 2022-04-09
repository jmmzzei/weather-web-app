type ForecastClouds = {
  all: number
}

type ForecastMain = {
  feels_like: number
  grnd_level: number
  pressure: number
  sea_level: number
  temp: number
  temp_kf: number
  temp_max: number
  temp_min: number
}

type Wind = {
  speed: number
  deg: number
  gust: number
}

type ForecastWeather = {
  description: string
  icon: string
  id: number
  main: string
}

type ForecastSys = {
  pod: string
}

type ForecastItem = {
  clouds: ForecastClouds
  dt: number
  dt_txt: string
  main: ForecastMain
  pop: number
  sys: ForecastSys
  visibility: number
  weather: ForecastWeather[]
  wind: Wind
}

type Coord = {
  lon: number
  lat: number
}

type CurrentSys = {
  country: string
  id: number
  sunrise: number
  sunset: number
  type: number
}

type CurrentMain = {
  feels_like: number
  humidity: number
  pressure: number
  temp_max: number
  temp_min: number
}

interface CurrentWeather
  extends Omit<ForecastItem, 'dt_txt' | 'pop' | 'sys' | 'main'> {
  base: string
  cod: number
  main: CurrentMain
  coord: Coord
  id: number
  name: string
  sys: CurrentSys
  timezone: number
  date: string
}

type Weather = {
  currentWeather: CurrentWeather
  uniqueDate: any
}
