import React, { useState, useEffect } from 'react'
import { Card } from "./components/Card"
import Button from './components/Button'
import './App.css'
import { Shower } from './components/Shower'
import { NextTemp } from './components/nextTemp'

import { formatDistance, subDays } from 'date-fns'
import format from 'date-fns/format'
import { id, ar } from 'date-fns/locale'

const App = () => {
  let [current, setCurrent] = useState('...')
  let [uniqueDate, setUniqueDate] = useState([])
  let [fullArr, setFullArray] = useState([])
  let [selected, setSelected] = useState('')
  let key = 0

  async function getLocation() {
    await navigator.geolocation.getCurrentPosition(async ({ coords }) => {

      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(resJson => {setCurrent(resJson); console.log(resJson);
        })

      await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(resJson => {
          let fullArray = []
          let uniqueDates = []
          let prevDate = 0

          let formatter = []
          let objFormatter = []

          resJson.list.forEach(allData => {
            let arr = []

            let [date, ] = allData.dt_txt.split(' ')
            arr.push(date)
            arr.push(allData)
            fullArray.push(arr)

            if (formatter.length > 0) {
              if (prevDate != date) {
                formatter.push(objFormatter)
                uniqueDates.push(formatter)
                formatter = []
                objFormatter = []

                formatter.push(date)
                objFormatter.push(allData)
              }
              objFormatter.push(allData)

            } else {
              formatter.push(date)
              objFormatter.push(allData)
            }

            prevDate = date

          })

          if (formatter != []) {
            formatter.push(objFormatter)
            uniqueDates.push(formatter)
            formatter = []
            objFormatter = []
          }

          console.log(uniqueDates);
          
          // uniqueDates.push(formatter)

          // let conjunto = []
          // uniqueDates.map(e => {
          //   key++
          //   let arr = []
          //   fullArray.map(el =>{ 
          //     if (el[0] == e){
          //      arr.push(el[1])
          //   }})
          //   conjunto.push(arr)
          // })
          // console.log(conjunto);
          
          console.log(uniqueDates[0][0]);
          
          setUniqueDate(uniqueDates)
          setFullArray(fullArray)
          
        })
    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  function getDate(it) {
    // make a map that passes the values of arrDate and arrHour to formatDistance

    let arrDate = fullArr[it][0].date.split('-')
    let arrHour = fullArr[it][0].hour.split(':')

    return formatDistance(
      new Date(arrDate[0], arrDate[1] - 1, arrDate[2], arrHour[0], arrHour[1], arrHour[2]),
      new Date(),
      { addSuffix: true }
    )
  }

  const iconFormatter = str => `https://openweathermap.org/img/wn/${str}@2x.png`

  let t0 = performance.now()


  if (typeof uniqueDate[0] != 'object') {
    return (
      <div style={divStyle}>
        <h1>The Weather, {'...'} </h1>
        <h2>Temperature: {'...'}</h2>
        <div style={flexDiv}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    )
  } else {

    return (
      
      <div style={divStyle}>
        <h1>The Weather, now in {current.name} </h1>
        <h2>Temperature: {current.main.temp}°C</h2>
        <h2>Humidity: {current.main.humidity}%</h2>
        <img src={iconFormatter(current.weather[0].icon)}></img>

        <div style={left}>
            { (() => typeof selected != 'string' ? <NextTemp fullArr={selected} key={1} ></NextTemp> : null)() }
        </div>

        <div style={flexDiv}>
          
          { uniqueDate.map(e => {
              key++

              return <Shower date={e[0]} fullArr={e[1]} id={key-1} key={key} 
              click={() => setSelected(e[1])}></Shower>
            }) }
        </div>
        {(()=> {  let t1 = performance.now()
                  console.log(t1-t0);})()}
                  
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
  border: '1px solid red',
  display: 'flex',
  width: '100%',
  borderColor: '1px solid red',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
}

const left = {
  border: '1px solid red',
  position: 'absolute',
  top: 0,
  right: 0,
  height: '90%',
  width: 300,

}

export default App;
