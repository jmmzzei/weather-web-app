import { FC, useContext } from 'react'
import { Context } from './Context'

type Props = {
  ownArr: any
  hour: string
}

export const AsideCard: FC<Props> = ({ ownArr, hour }) => {
  const { main, setMain } = useContext(Context)

  return (
    <div className="asideCard">
      <input
        type="radio"
        name="radio"
        id={hour}
        onClick={() => {
          setMain({ ...ownArr, name: main?.name })
        }}
      />
      <label htmlFor={hour}>
        <span>{hour} | </span>
        <span>{ownArr?.main?.temp}°C</span>
      </label>
    </div>
  )
}
