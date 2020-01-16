import { useState, useEffect } from "react"

export default () => {
	let [current, setCurrent] = useState("...")
	let [uniqueDate, setUniqueDate] = useState([])
	let [fullArr, setFullArray] = useState([])

	const fetchCurrentWeather = async coords => {
		await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
		)
			.then(res => res.json())
			.then(resJson => {
				setCurrent(resJson)
				return current
			})
	}

	const fetchForecastWeather = async coords => {
		await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
		)
			.then(res => res.json())
			.then(resJson => {
				let fullArray = []
				let uniqueDates = []
				let prevDate = 0

				let formatter = []
				let objFormatter = []

				resJson.list.forEach(allData => {
					let arr = []

					let [date] = allData.dt_txt.split(" ")
					arr.push(date)
					arr.push(allData)
					fullArray.push(arr)

					if (formatter.length > 0) {
						if (prevDate !== date) {
							formatter.push(objFormatter)
							uniqueDates.push(formatter)
							formatter = []
							objFormatter = []

							formatter.push(date)
							objFormatter.push(allData)
						}
						objFormatter.push(allData)
					} else {
						formatter.push(date)
						objFormatter.push(allData)
					}

					prevDate = date
				})

				if (formatter !== []) {
					formatter.push(objFormatter)
					uniqueDates.push(formatter)
					formatter = []
					objFormatter = []
				}

				setUniqueDate(uniqueDates)
				setFullArray(fullArray)
				
				return { uniqueDate, fullArr }
			})
    }
    
    async function getLocation() {
		await navigator.geolocation.getCurrentPosition(async ({ coords }) => {
			fetchCurrentWeather(coords)
			fetchForecastWeather(coords)
		})
	}

	useEffect(() => {
		getLocation()
	}, [])

	return { current, uniqueDate, fullArr }
}

