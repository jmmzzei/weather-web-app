import { useState } from 'react'
import './css/style.scss'
import ContextWrapper from './components/ContextWrapper'
import Aside from './components/Aside'
import Title from './components/Title'
import Main from './components/Main'
import Footer from './components/Footer'
import Grid from './components/Grid'

const App = () => {
  let [selected, setSelected] = useState<ForecastItem[]>([])

  const change = (e: Array<ForecastItem>) => {
    setSelected(e)
  }

  return (
    <ContextWrapper>
      <Grid>
        <Title />
        <Main />
        <Aside selected={selected} />
        <Footer click={change} />
      </Grid>
    </ContextWrapper>
  )
}

export default App
