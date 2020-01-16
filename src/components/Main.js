import React, { useContext } from "react"
import {Context} from './Context'

export default ({current}) => {
    let { main } = useContext(Context)
    const iconFormatter = str =>
    `https://openweathermap.org/img/wn/${str}@2x.png`

    return (
		<main className="main">
			<div className="dateAndTemp">
				<p>
					{current.main.temp}°C
					<img
						alt="Icon Weather"
						src={iconFormatter(main.weather[0].icon)}
					></img>
				</p>

				<h3>
					{(() => {
						let timeLength = 10
						let date = new Date(Date.now())
						let arr = date.toString()
						let { index } = /GMT/.exec(arr)
						return arr.slice(0, index - timeLength)
					})()}
				</h3>
			</div>

			<div className="weatherData">
				<p>
					<span>Humidity:</span> {main.main.humidity}%
				</p>
				<p>
					<span>Pressure:</span> {main.main.pressure}
					hPa
				</p>
				<p>
					<span>Min:</span> {main.main.temp_min}°C
				</p>
				<p>
					<span>Max:</span> {main.main.temp_max}°C
				</p>
				<p>
					<span>Visibility:</span> {main.visibility / 1000}km
				</p>

				<p>
					<span>Wind:</span> {main.wind.deg}° <span>at</span>{" "}
					{main.wind.speed} m/s
				</p>

				<p>
					<span>Clouds:</span> {main.clouds.all}%
				</p>

				<p>
					<span>Sunrise:</span> {main.sys.sunrise ? main.sys.sunrise : ''}
				</p>
				<p>
					<span>Sunset:</span> {main.sys.sunset ? main.sys.sunset : ''}
				</p>
			</div>
		</main>
	)
}
