import { useState } from 'react'
import './css/style.scss'
import fetchWeather from './hooks/fetchWeather'
import ContextWrapper from './components/ContextWrapper'
import Aside from './components/Aside'
import Title from './components/Title'
import Main from './components/Main'
import Footer from './components/Footer'
import Grid from './components/Grid'
import Loading from './components/Loading'

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

type Weather = {
  currentWeather: any
  uniqueDate: any
}

const App = () => {
  let [selected, setSelected] = useState<ForecastItem[]>([])

  const change = (e: Array<ForecastItem>) => {
    setSelected(e)
  }

  const { currentWeather, uniqueDate }: Weather = fetchWeather()

  return typeof uniqueDate[0] !== 'object' ? (
    <Grid>
      <Title />

      <main className="main">
        <Loading />
      </main>
      <Aside selected="" />
      <Footer />
    </Grid>
  ) : (
    <ContextWrapper current={currentWeather}>
      <Grid>
        <Title title={currentWeather} />
        <Main date={currentWeather.date} />

        <Aside selected={selected} />
        <Footer uniqueDate={uniqueDate} click={change} />
      </Grid>
    </ContextWrapper>
  )
}

export default App
