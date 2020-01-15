import React from "react"

export const AsideCard = ({ click, fullArr, date, hour }) => {
	return (
		<div className="asideCard" onClick={click}>
			<h4>{typeof fullArr != "object" ? "..." : fullArr.main.temp}°C</h4>
			<h4>
				{typeof fullArr != "object" ? "..." : hour.split("").slice(0, -3).join("")}hs
			</h4>
		</div>
	)
}
