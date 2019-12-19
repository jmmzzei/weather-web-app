import React, { useState, useEffect } from 'react'
import { Card } from "./components/Card"
// import Boxi from './components/Box'
import Button from './components/Button'
import './App.css'
// import Grid from './layout/Grid'

const App = () => {
  let [data, setData] = useState({})
  let [algo, setAlgo] = useState(0)

  async function getLocation() {
    await navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(resJson => {setData(resJson)
        console.log(resJson);
        })

    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <div style={divStyle}>

      <h1>The Weather, {typeof data.coord != 'object' ? '...' : data.coord.lat}</h1>
      <h2>{algo}</h2>


      <div style={flexDiv}>
        
        {/* <Button txt='add' functio={() => setData(data + 1)} ></Button>
        <Button txt='remove' functio={() => setData(data - 1)}></Button> */}

        <Card data={data} clicker={()=>{setAlgo(algo +1)}}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
      </div>

    </div>

  );
}
const divStyle = {
  display: 'grid',
  gridTemplateColumns: ' 1fr',
  gridTemplateRows: '1fr 200px',
  gridGap: '20px',
  height: '100vh',
  margin: 0,
  padding: 0,
  width: '100vw',
  background: '#f1f1f1',
}

const flexDiv = {
  display: 'flex',
  width: '100%',
  borderColor: '1px solid red',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
}


export default App;
