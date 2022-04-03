import { FC } from 'react'

type Props = {
  text: string
  value: string
  winSpeed?: string
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

const Label: FC<Props> = ({ text, value, winSpeed }) => (
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

export default Label
