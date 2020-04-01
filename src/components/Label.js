import React from "react"

export default ({ text, value, winSpeed }) => {
    const unit =
    {
        Humidity: "%",
        Pressure: "hPa",
        Min: "°C",
        Max: "°C",
        Visibility: "km",
        Clouds: "%",
        Wind: "°"
    }

    return (
        winSpeed
            ? (
                <p className="label">
                    <span>{text}:</span>{value}{unit[text]}<span>at</span>{" "}
                    {winSpeed} m / s
                </p >
            )
            : (
                <p className="label">
                    <span>{text}: </span> {value}{unit[text]}
                </p>
            )
    )
}