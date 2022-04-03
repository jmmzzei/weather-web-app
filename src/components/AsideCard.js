import { useContext } from 'react'
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
      <h4>{ownArr?.main?.temp}°C</h4>
      <h4>{ownArr && hour}</h4>
    </div>
  )
}
