import React from 'react';
import {NextTemp} from './nextTemp'

export const Shower = ({time, log, fullArr, id}) => {
    let keyChild = 0
    console.group(id)
    console.log(time.date);
    console.log(fullArr);
    console.groupEnd()

    return(
        <div style={showerStyle} onClick={log}>
            <h2>{time.date}</h2>
            <h2>{time.hour}</h2>
            
            {fullArr.map(e => {
            keyChild++
            return <NextTemp time={e} fullArr={e} key={keyChild} log={log}></NextTemp>

          })}
            
        </div>
    )
}

const showerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    border: '1px solid red',
    margin: 10,
    borderRadius: 20,
    padding: 8,
  }
  
  