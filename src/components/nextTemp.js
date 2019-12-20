import React from 'react'
import { Tester } from './Tester'

let key = 0
export const NextTemp = ({ fullArr }) => {
    return (
        fullArr.map(e => {
            let [date, hour] = e.dt_txt.split(' ')
            return <Tester fullArr={e} date={date} hour={hour} key={++key}></Tester>
        })
    )
}

