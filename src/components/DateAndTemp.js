import { useContext } from 'react'
import { Context } from './Context'
import getDate from '../helpers/getDate'
import Loader from './Loader'

const DateAndTemp = () => {
  let { main } = useContext(Context)
  const iconFormatter = (str) =>
    str ? `https://openweathermap.org/img/wn/${str}@2x.png` : null

  if (!main) {
    return (
      <>
        <Loader height={100} />
        <Loader />
      </>
    )
  }

  return (
    <section className="dateAndTemp">
      <p>
        {main ? <span>{main?.main?.temp}°C</span> : <Loader />}
        <img
          alt="Icon Weather"
          src={iconFormatter(main?.weather[0].icon)}
        ></img>
      </p>
      <h3>{getDate(main?.dt)}</h3>
    </section>
  )
}

export default DateAndTemp
