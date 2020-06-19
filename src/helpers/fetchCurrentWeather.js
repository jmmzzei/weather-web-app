export default async ({latitude,longitude}) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,
  ).then((res) => res.json())
}
