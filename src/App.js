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
import { id, ar } from 'date-fns/locale'

const App = () => {
  let [data, setData] = useState({})
  let [algo, setAlgo] = useState(0)

  let [uniqueDate, setUniqueDate] = useState([])

  let [fullArr, setFullArray] = useState([])

  let [selected, setSelected] = useState('')

  let key = 0
  async function getLocation() {
    await navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(resJson => {
          setData(resJson)
          console.log(typeof resJson.city);

          let arr = []
          let arrReduced = []
          let prev = 0

          resJson.list.forEach((wData) => {

            console.log(wData);
            
            let array = []
            let dateAndHour = {}
            let [date, hour] = wData.dt_txt.split(' ')
            dateAndHour.date = date
            dateAndHour.hour = hour

            array.push(dateAndHour)
            array.push(wData)

            arr.push(array)

            if (arrReduced.length > 0) {
              if (prev != date) {
                arrReduced.push(dateAndHour)
              }
            } else {
              arrReduced.push(dateAndHour)
            }
            prev = date

          })
          console.log(arrReduced);

          setUniqueDate(arrReduced)
          console.log(typeof arr);

          setFullArray(arr)

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
    // console.log(fullArr);

    return formatDistance(
      new Date(arrDate[0], arrDate[1] - 1, arrDate[2], arrHour[0], arrHour[1], arrHour[2]),
      new Date(),
      { addSuffix: true }
    )
  }

  if (typeof data.city != 'object') {
    return (
      <div style={divStyle}>
        <h1>The Weather, {'...'} </h1>
        <h2>Temperature: {'...'}</h2>
        <div style={flexDiv}>
          <Card data={data} clicker={() => { setAlgo(algo + 1) }}></Card>
          <Card data={data}></Card>
          <Card data={data}></Card>
          <Card data={data}></Card>
          <Card data={data}></Card>
        </div>
      </div>
    )
  } else {

    return (
      <div style={divStyle}>
        <h1>The Weather, {data.city.name} {typeof fullArr[0] != 'undefined' ? getDate(0) : 'a'} </h1>
        <h2>Temperature: {data.list[0].main.temp}</h2>
        <h2>date: {data.list[0].dt_txt}</h2>
        <div style={flexDiv}>

          {
            uniqueDate.map(e => {
              key++

              let arr = []
              fullArr.map(el=>{
                if (el[0].date == e.date) {
                  arr.push(el[1])  
                }
              })

              return <Shower time={e} fullArr={arr} id={key-1} key={key} log={() => {
                setSelected(key); console.log(key)
              }}></Shower>
            })
          }

        </div>

        {/* <div style={flexDiv}>

          {( () => {
            if (selected != '') {
              let arr = []
              for (let i = 0; i < fullArr.length; i++) {
                if (selected == fullArr[i].date) {
                  console.log(fullArr[i].date);

                  arr.push(<NextTemp data={getDate(i)} key={i} log={()=>{console.log('a');
                  }} ></NextTemp>)
                }

              }

            } else {
              return <div></div>
            }

            })()
          }

        </div> */}
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
