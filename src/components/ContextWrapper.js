import React, { useState } from 'react'
import { Context } from './Context'

export default (props) => {
  const [main, setMain] = useState(props.current)

  return (
    <Context.Provider value={{ main, setMain }}>
      {props.children}
    </Context.Provider>
  )
}
