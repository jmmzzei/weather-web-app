import React, { useState } from "react"
import "./css/style.scss"
import fetchWeather from "./hooks/fetchWeather"
import ContextWrapper from "./components/ContextWrapper"
import Aside from "./components/Aside"
import Title from "./components/Title"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Grid from "./components/Grid"
import Loading from "./components/Loading"

const App = () => {
	let [selected, setSelected] = useState("")

	const change = e => {
		setSelected(e)
	}

	const { currentWeather, uniqueDate, fullArr } = fetchWeather()
	
	return (
		typeof uniqueDate[0] !== "object"
		? (<Grid>
			<Title title="..."/>

			<main className="main">
				<Loading />
			</main>
			<Aside selected=""/>
			<Footer />
		</Grid>)
		: (<ContextWrapper current={currentWeather}>
			<Grid>
				<Title title={currentWeather} />
				<Main date={currentWeather.date} />

				<Aside selected={selected} />
				<Footer
					uniqueDate={uniqueDate}
					click={change} />
			</Grid>
		</ContextWrapper>)
	)
}

export default App
