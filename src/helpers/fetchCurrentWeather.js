export default async coords => {
    let response = ''
    await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
    .then(res => res.json())
    .then(resJson => {
        response = resJson
    })

    return response
}
