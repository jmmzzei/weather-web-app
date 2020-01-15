import React, { useState } from "react"
import "./css/style.scss"
import { FooterCard } from "./components/FooterCard"
import { AsideGroup } from "./components/AsideGroup"
import fetchWeather from "./hooks/fetchWeather"
import getDate from "./helpers/getDate"

const App = () => {
	let [selected, setSelected] = useState("")
	let [main, setMain] = useState(1)
	
	let key = 0
	const { current, uniqueDate, fullArr } = fetchWeather()

	const iconFormatter = str =>
		`https://openweathermap.org/img/wn/${str}@2x.png`

	if (typeof uniqueDate[0] !== "object") {
		return (
			<div className="grid">
				<h1 className="title">{current.name}</h1>

				<main className="main"></main>
				<aside className="aside"></aside>
				<section className="footer">
					<FooterCard></FooterCard>
					<FooterCard></FooterCard>
					<FooterCard></FooterCard>
					<FooterCard></FooterCard>
					<FooterCard></FooterCard>
					<FooterCard></FooterCard>
				</section>

			</div>
		)
	} else {
		return (
			<div className="grid">
				<h1 className="title">{current.name}</h1>

				<main className="main">

					<div className="dateAndTemp">
						
						<p>{current.main.temp}°C
							<img src={iconFormatter(current.weather[0].icon)}></img>
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
						<p><span>Humidity:</span> {current.main.humidity}%</p>
						<p><span>Pressure:</span> {current.main.pressure}hPa</p>
						<p><span>Min:</span> {current.main.temp_min}°C</p>
						<p><span>Max:</span> {current.main.temp_max}°C</p>
						<p><span>Visibility:</span> {current.visibility/1000}km</p>

						<p>
							<span>Wind:</span> {current.wind.deg}° <span>at</span> {current.wind.speed} m/s
						</p>

						<p><span>Clouds:</span> {current.clouds.all}%</p>

						<p><span>Sunrise:</span> {current.sys.sunrise}</p>
						<p><span>Sunset:</span> {current.sys.sunset}</p>
					</div>
				</main>

				<aside className="aside">
					{(() =>
						typeof selected != "string" ? (
							<AsideGroup click={()=>setMain(selected[0])} fullArr={selected} key={1}></AsideGroup>
						) : null)()}
				</aside>

				<section className="footer">
					{uniqueDate.map(e => {
						key++

						return (
							<FooterCard
								date={e[0]}
								fullArr={e[1]}
								id={key - 1}
								key={key}
								click={() => setSelected(e[1])}
							></FooterCard>
						)
					})}
				</section>
			</div>
		)
	}
}

export default App
