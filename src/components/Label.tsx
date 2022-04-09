import { FC } from 'react'
import Loader from './Loader'

type Props = {
  text: string
  value?: number
  winSpeed?: number
}

const getUnit: Record<string, string> = {
  Humidity: '%',
  Pressure: 'hPa',
  Min: '°C',
  Max: '°C',
  Visibility: 'km',
  Clouds: '%',
  Wind: '°',
}

const Label: FC<Props> = ({ text, value, winSpeed }) => {
  // value could be zero, so !value won't work in this case
  if (value === undefined) return <Loader />

  return (
    <p className="label">
      <span>{text}:</span>
      {value}
      {getUnit[text]}
      {winSpeed && (
        <p>
          <span>
            <span>at </span>
            {winSpeed}
          </span>
          m / s
        </p>
      )}
    </p>
  )
}

export default Label
