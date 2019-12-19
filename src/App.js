import React, { useState, useEffect } from 'react'
import { Card } from "./components/Card"
// import Boxi from './components/Box'
import Button from './components/Button'
import './App.css'
// import Grid from './layout/Grid'
import { Shower } from './components/Shower'
import { NextTemp } from './components/nextTemp'

import { formatDistance, subDays } from 'date-fns'
import format from 'date-fns/format'
import { id } from 'date-fns/locale'

const App = () => {
  let [data, setData] = useState({})
  let [algo, setAlgo] = useState(0)

  let [time, setTime] = useState([])

  let [selected, setSelected] = useState('')

  let key = 0
  async function getLocation() {
    await navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(resJson => {
          setData(resJson)
          console.log(resJson);

          let arr = []
          let prev = 0
          resJson.list.forEach((wData) => {
            let [date, hour] = wData.dt_txt.split(' ')
            let temp = wData.main.temp

            // let obj = {date, temp}
            let obj = { date, hour, wData }

            if (arr.length > 0) {
              if (prev != date) {
                arr.push(obj)
              }
            } else {
              arr.push(obj)
            }
            prev = date
          })
          setTime(arr)
          // console.log(arr);

        })
    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  function getDate(it) {
    // make a map that passes the values of arrDate and arrHour to formatDistance
    let arrDate = time[it].date.split('-')
    let arrHour = time[it].hour.split(':')
    return formatDistance(
      new Date(arrDate[0], arrDate[1] - 1, arrDate[2], arrHour[0], arrHour[1], arrHour[2]),
      new Date(),
      { addSuffix: true }
    )

  }

  if (typeof data.list != 'object') {
    return (
      <div style={divStyle}>
        <h1>The Weather, {'...'} </h1>
        <h2>Temperature: {'...'}</h2>
        <div style={flexDiv}>
          <Card data={data} clicker={() => { setAlgo(algo + 1) }}></Card>
          <Card data={data}></Card>
          <Card data={data}></Card>
        </div>
      </div>
    )
  } else {

    return (
      <div style={divStyle}>
        <h1>The Weather, {data.city.name} {typeof time[0] != 'undefined' ? getDate(0) : 'a'} </h1>
        <h2>Temperature: {data.list[0].main.temp}</h2>
        <div style={flexDiv}>

          {time.map(e => {
            key++
            return <Shower data={e} key={key} log={() =>{ setSelected(e.date); console.log(selected);
            }}></Shower>

          })}

        </div>

        <div style={flexDiv}>

          {( () => {
            if (selected != '') {
              let arr = []
              for (let i = 0; i < time.length; i++) { 
                if (selected == time[i].date) {
                  console.log(time[i].date);
                  

                  arr.push(<NextTemp data={getDate(i)} key={i}></NextTemp>) 
                  // console.log(arr);
                }
                
              }

            } else {
              return <div></div>
            }

            })() 
          }

        </div>
      </div>
    )

  }

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
