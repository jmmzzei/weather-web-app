import { useState } from 'react'
import './css/style.scss'
import useFetch from './hooks/useFetch'
import ContextWrapper from './components/ContextWrapper'
import Aside from './components/Aside'
import Title from './components/Title'
import Main from './components/Main'
import Footer from './components/Footer'
import Grid from './components/Grid'
import Loading from './components/Loading'

const App = () => {
  let [selected, setSelected] = useState<ForecastItem[]>([])

  const change = (e: Array<ForecastItem>) => {
    setSelected(e)
  }

  const { currentWeather, uniqueDate }: Partial<Weather> = useFetch()

  if (!uniqueDate) {
    return (
      <Grid>
        <Title />
        <main className="main">
          <Loading />
        </main>
        <Aside />
        <Footer />
      </Grid>
    )
  }

  return (
    <ContextWrapper current={currentWeather}>
      <Grid>
        <Title title={currentWeather} />
        <Main date={currentWeather?.date} />
        <Aside selected={selected} />
        <Footer uniqueDate={uniqueDate} click={change} />
      </Grid>
    </ContextWrapper>
  )
}

export default App
