import { useState, useEffect, useCallback } from 'react'
import fetchCurrentWeather from '../helpers/fetchCurrentWeather'
import fetchForecastWeather from '../helpers/fetchForecastWeather'
// import { useContext } from 'react'
// import { Context } from '../components/Context'

type Args = string | undefined

const useFetch = (type: Args) => {
  // let { setMain } = useContext(Context)
  let [data, setData] = useState<Partial<Weather>>({})

  const getWeather = useCallback(() => {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      if (type === 'current') {
        let current = await fetchCurrentWeather(coords)
        setData({ currentWeather: current, uniqueDate: undefined })
        // setMain(current)
      }
      if (type === 'forecast') {
        let { resUnique } = await fetchForecastWeather(coords)
        setData({ currentWeather: undefined, uniqueDate: resUnique })
      }
    })
  }, [])

  if (!type) {
    throw new Error('Must provide a type.')
  }

  useEffect(() => {
    getWeather()
  }, [])

  return [data, getWeather]
}

export default useFetch
