import { useState, useEffect } from 'react'
import fetchCurrentWeather from '../helpers/fetchCurrentWeather'
import fetchForecastWeather from '../helpers/fetchForecastWeather'

type Weather = {
  currentWeather?: any
  uniqueDate?: any
}

const useFetch = () => {
  let [data, setData] = useState<Weather>({})

  const getWeather = () => {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      let current = await fetchCurrentWeather(coords)
      let { resUnique } = await fetchForecastWeather(coords)
      setData({ currentWeather: current, uniqueDate: resUnique })
    })
  }

  useEffect(() => {
    getWeather()
  }, [])

  return data
}

export default useFetch
