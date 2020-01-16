import React from "react"
import { AsideCard } from "./AsideCard"

export const AsideGroup = ({ fullArr }) => {
	let key = 0

	return fullArr.map(e => {
		let [date, hour] = e.dt_txt.split(" ")
		return (
			<AsideCard
				fullArr={e}
				date={date}
				hour={hour}
				key={++key}
			></AsideCard>
		)
	})
}
