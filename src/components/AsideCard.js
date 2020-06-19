import React, { useContext } from 'react'
import { Context } from './Context'

export const AsideCard = ({ ownArr, hour }) => {
  const { setMain } = useContext(Context)

  return (
    <div
      className="asideCard"
      onClick={() => {
        setMain(ownArr)
      }}
    >
      <h4>{typeof ownArr != 'object' ? '...' : ownArr.main.temp}°C</h4>
      <h4>
        {typeof ownArr != 'object'
          ? '...'
          : hour.split('').slice(0, -3).join('')}
        hs
      </h4>
    </div>
  )
}
