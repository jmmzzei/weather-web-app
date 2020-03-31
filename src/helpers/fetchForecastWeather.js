import forecastResFormatter from './forecastResFormatter'

export default async coords => {
    let resUnique = '',  resFull = ''
    
    await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
        .then(res => res.json())
        .then(resJson => {
            [ resUnique, resFull ] = forecastResFormatter(resJson)
        })

    return { resUnique, resFull }
}