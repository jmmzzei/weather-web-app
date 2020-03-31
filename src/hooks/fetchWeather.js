import { useState, useEffect } from "react"
import fetchCurrentWeather from '../helpers/fetchCurrentWeather'
import fetchForecastWeather from '../helpers/fetchForecastWeather'

export default () => {
	let [current, setCurrent] = useState("...")
	let [uniqueDate, setUniqueDate] = useState([])
	let [fullArr, setFullArray] = useState([])

    async function getLocation() {
		await navigator.geolocation.getCurrentPosition(async ({ coords }) => {
			let response = await fetchCurrentWeather(coords)
			setCurrent(response)

			let {resUnique, resFull} = await fetchForecastWeather(coords)
			setUniqueDate(resUnique)
            setFullArray(resFull)
		})
	}

	useEffect(() => {
		getLocation()
	}, [])

	return { current, uniqueDate, fullArr }
}

