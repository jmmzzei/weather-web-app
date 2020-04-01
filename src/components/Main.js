import React, { useContext } from "react"
import { Context } from './Context'
import Label from './Label'
import DateAndTemp from './DateAndTemp'
import WeatherData from './WeatherData'
import MainLayout from './MainLayout'

export default ({ date }) => {
    let { main } = useContext(Context)

    return (
        <MainLayout>
            <DateAndTemp date={date}/>
            <WeatherData>
                <Label text="Humidity" value={main.main.humidity}/>
                <Label text="Pressure" value={main.main.pressure}/>
                <Label text="Min" value={main.main.temp_min}/>
                <Label text="Max" value={main.main.temp_max}/>
                <Label text="Clouds" value={main.clouds.all}/>

                {main.visibility
                    &&
                    <Label text="Visibility" value={main.visibility}/>}

                <Label text="Wind" value={main.wind.deg} winSpeed={main.wind.speed}/>

                {main.sys.sunrise
                    &&
                    <Label text="Sunrise" value={main.sys.sunrise}/> }

                {main.sys.sunset
                    && 
                    <Label text="Sunset" value={main.sys.sunset}/> }
            </WeatherData>
        </MainLayout>
    )
}
