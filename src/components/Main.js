import React, { useContext } from "react"
import { Context } from './Context'

export default ({ date }) => {
    let { main } = useContext(Context)
    const iconFormatter = str =>
        `https://openweathermap.org/img/wn/${str}@2x.png`

    
    return (
        <main className="main">
            <div className="dateAndTemp">
                <p>
                    {main.main.temp}°C
					<img
                        alt="Icon Weather"
                        src={iconFormatter(main.weather[0].icon)}
                    ></img>
                </p>

                <h3>
                    {date}
                </h3>
            </div>

            <div className="weatherData">
                <p>
                    <span>Humidity:</span> {main.main.humidity}%
				</p>
                <p>
                    <span>Pressure:</span> {main.main.pressure}
                    hPa
				</p>
                <p>
                    <span>Min:</span> {main.main.temp_min}°C
				</p>
                <p>
                    <span>Max:</span> {main.main.temp_max}°C
				</p>

                {main.visibility 
                ? <p>Visibility:<span>{main.visibility}</span>km</p>
                : <span></span>
                }

                <p>
                    <span>Wind:</span> {main.wind.deg}° <span>at</span>{" "}
                    {main.wind.speed} m/s
				</p>

                <p>
                    <span>Clouds:</span> {main.clouds.all}%
				</p>

                {main.sys.sunrise
                ? <p>Sunrise: <span>{main.sys.sunrise}</span> </p>
                : <span></span>
                }

                {main.sys.sunrise
                ? <p>Sunset: <span>{main.sys.sunset}</span> </p>
                : <span></span>
                }

            </div>
        </main>
    )
}
