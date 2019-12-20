import React from 'react'

export const Tester = ({ fullArr, date, hour }) => {
    return (
        <div style={showerStyle} >
            <h4>Date: {typeof fullArr != 'object' ? '...' : date}</h4>
            <h4>time: {typeof fullArr != 'object' ? '...' : hour}</h4>
            <h4>Temperature: {typeof fullArr != 'object' ? '...' : fullArr.main.temp}</h4>
        </div>
    )
}

const showerStyle = {
    display: 'block',
    width: '100%',
    border: '1px solid black',
    margin: 10,
    borderRadius: 20,
    padding: 8,
  }
