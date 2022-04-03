import { FC, useState } from 'react'
import type { ReactNode } from 'react'
import { Context } from './Context'

type Props = {
  current: CurrentWeather
  children: ReactNode
}

const ContextWrapper: FC<Partial<Props>> = ({ current, children }) => {
  const [main, setMain] = useState(current)

  return (
    <Context.Provider value={{ main, setMain }}>{children}</Context.Provider>
  )
}

export default ContextWrapper
