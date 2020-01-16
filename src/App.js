import React, { useState } from "react"
import "./css/style.scss"
import { FooterCard } from "./components/FooterCard"
import fetchWeather from "./hooks/fetchWeather"
import getDate from "./helpers/getDate"
import ContextWrapper from "./components/ContextWrapper"
import Aside from "./components/Aside"
import Title from "./components/Title"
import Main from "./components/Main"
import Footer from "./components/Footer"

const App = () => {
	let [selected, setSelected] = useState("")

	const change = (e) => 
		setSelected(e)
	

	const { current, uniqueDate, fullArr } = fetchWeather()
	
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
			<ContextWrapper current={current}>
				<div className="grid">
					<Title current={current}></Title>
					<Main current={current}></Main>
					
					<Aside selected={selected}></Aside>
					<Footer
					selected= {selected}
						uniqueDate={uniqueDate}
						change={change}
					></Footer>
				</div>
			</ContextWrapper>
		)
	}
}

export default App
