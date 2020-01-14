import React, { useState } from "react"
import { Card } from "./components/Card"
import "./App.css"
import "./css/style.scss"
import { FooterCard } from "./components/FooterCard"
import { NextTemp } from "./components/nextTemp"
import fetchWeather from "./hooks/fetchWeather"
import getDate from "./helpers/getDate"

const App = () => {
	let [selected, setSelected] = useState("")
	let key = 0
	const { current, uniqueDate, fullArr } = fetchWeather()

	const iconFormatter = str =>
		`https://openweathermap.org/img/wn/${str}@2x.png`

	if (typeof uniqueDate[0] != "object") {
		return (
			<div className="grid">
				<main className="main"></main>

				<section className="footer">
					<Card></Card>
					<Card></Card>
					<Card></Card>
					<Card></Card>
					<Card></Card>
					<Card></Card>
				</section>
			</div>
		)
	} else {
		return (
			<div className="grid">
				<main className="main">
					<h1>{current.name}</h1>
					<p>{current.main.temp}°C</p>
					<h2>Humidity: {current.main.humidity}%</h2>

					<img src={iconFormatter(current.weather[0].icon)}></img>
				</main>

				<aside className="aside">
					{(() =>
						typeof selected != "string" ? (
							<NextTemp fullArr={selected} key={1}></NextTemp>
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
