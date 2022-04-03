import { createContext } from 'react'

type Context = {
  main?: any
  setMain: any
}

export const Context = createContext<Context>({
  main: '',
  setMain: () => {},
})
