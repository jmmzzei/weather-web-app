import { FC, useContext } from 'react'
import { Context } from './Context'

type Props = {
  ownArr: any
  hour: string
}

export const AsideCard: FC<Props> = ({ ownArr, hour }) => {
  const { main, setMain } = useContext(Context)

  return (
    <div
      className="asideCard"
      onClick={() => {
        setMain({ ...ownArr, name: main?.name })
      }}
    >
      <h4>{ownArr?.main?.temp}°C</h4>
      <h4>{ownArr && hour}</h4>
    </div>
  )
}
