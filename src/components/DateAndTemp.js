import React, { useContext } from 'react'
import { Context } from './Context'

export default ({ date }) => {
  let { main } = useContext(Context)
  const iconFormatter = (str) =>
    `https://openweathermap.org/img/wn/${str}@2x.png`

  return (
    <section className="dateAndTemp">
      <p>
        {main.main.temp}°C
        <img alt="Icon Weather" src={iconFormatter(main.weather[0].icon)}></img>
      </p>
      <h3>{date}</h3>
    </section>
  )
}
