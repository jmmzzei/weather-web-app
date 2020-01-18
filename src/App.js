import React, { useState, useEffect } from "react"
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
	let [date, setDate] = useState('')

	const changeSelected = e => {
		setSelected(e)
	}

	const changeDate = e => {
		setDate(e)
	}

	const timeNow = () => {
        let timeLength = 10
        let date = new Date(Date.now())
        let arr = date.toString()
        let { index } = /GMT/.exec(arr)
        return arr.slice(0, index - timeLength)
	}

	useEffect(() => {
		const currentDate = timeNow()
		setDate(currentDate)
	}, [])


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
					<Main date={date}></Main>

					<Aside selected={selected} dateHandler={changeDate}></Aside>
					<Footer
						selected={selected}
						uniqueDate={uniqueDate}
						click={changeSelected}
					></Footer>
				</div>
			</ContextWrapper>
		)
	}
}

export default App
