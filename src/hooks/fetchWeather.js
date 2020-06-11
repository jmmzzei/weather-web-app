import { useState, useEffect } from 'react'
import fetchCurrentWeather from '../helpers/fetchCurrentWeather'
import fetchForecastWeather from '../helpers/fetchForecastWeather'

export default () => {
  let [currentWeather, setCurrentWeather] = useState('...')
  let [uniqueDate, setUniqueDate] = useState([])

  function getLocation() {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      let current = await fetchCurrentWeather(coords)
      setCurrentWeather(current)
      let { resUnique } = await fetchForecastWeather(coords)
      setUniqueDate(resUnique)
    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  return { currentWeather, uniqueDate }
}
