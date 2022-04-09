import { FC, useContext, useEffect } from 'react'
import { Context } from './Context'
import Label from './Label'
import DateAndTemp from './DateAndTemp'
import MainLayout from './MainLayout'
import useFetch from '../hooks/useFetch'

const Main: FC = () => {
  let { main, setMain } = useContext(Context)
  const [{ currentWeather }]: any = useFetch('current')
  const { clouds, visibility, wind } = main || {}
  const { humidity, pressure, temp_min, temp_max } = main?.main || {}

  useEffect(() => {
    setMain(currentWeather)
  }, [currentWeather, setMain])

  return (
    <MainLayout>
      <DateAndTemp />
      <section className="weatherData">
        <Label text="Humidity" value={humidity} />
        <Label text="Pressure" value={pressure} />
        <Label text="Min" value={temp_min} />
        <Label text="Max" value={temp_max} />
        <Label text="Clouds" value={clouds?.all} />
        <Label text="Visibility" value={visibility} />
        <Label text="Wind" value={wind?.deg} winSpeed={wind?.speed} />
      </section>
    </MainLayout>
  )
}

export default Main
