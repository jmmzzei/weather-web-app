import React, { useState } from "react"
import { AsideCard } from "./AsideCard"

let key = 0
export const AsideGroup = ({ fullArr, click }) => {
	
	return fullArr.map(e => {
		let [date, hour] = e.dt_txt.split(" ")
		return (
			<AsideCard
                click={click}
				fullArr={e}
				date={date}
				hour={hour}
				key={++key}
			></AsideCard>
		)
	})
}
