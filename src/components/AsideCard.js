import React, { useContext } from "react"
import { Context } from './Context'

export const AsideCard = ({ fullArr, date, hour, dateHandler }) => {
	const { setMain } = useContext(Context)

	return (
		<div className="asideCard" onClick={() => {
			setMain(fullArr)
			dateHandler(date)
		}} >
			<h4>{typeof fullArr != "object" ? "..." : fullArr.main.temp}°C</h4>
			<h4>
				{typeof fullArr != "object" ? "..." : hour.split("").slice(0, -3).join("")}hs
			</h4>
		</div>
	)
}
