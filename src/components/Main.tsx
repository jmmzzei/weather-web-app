import { FC, useContext } from 'react'
import { Context } from './Context'
import Label from './Label'
import DateAndTemp from './DateAndTemp'
import WeatherData from './WeatherData'
import MainLayout from './MainLayout'

type Props = {
  date?: string
}

const Main: FC<Props> = ({ date }) => {
  let { main } = useContext(Context)

  const {
    main: { humidity, pressure, temp_min, temp_max },
    clouds,
    visibility,
    wind,
    sys,
  } = main

  return (
    <MainLayout>
      <DateAndTemp date={date} />
      <WeatherData>
        <Label text="Humidity" value={humidity} />
        <Label text="Pressure" value={pressure} />
        <Label text="Min" value={temp_min} />
        <Label text="Max" value={temp_max} />
        <Label text="Clouds" value={clouds?.all} />
        <Label text="Visibility" value={visibility} />
        <Label text="Wind" value={wind?.deg} winSpeed={wind?.speed} />
        <Label text="Sunrise" value={sys?.sunrise} />
        <Label text="Sunset" value={sys?.sunset} />
      </WeatherData>
    </MainLayout>
  )
}

export default Main
