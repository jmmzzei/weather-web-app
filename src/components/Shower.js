import React from 'react';

export const Shower = ({data, log}) => {
    return(
        <div style={showerStyle} onClick={log}>
            <h2>{data.date}</h2>
            <h4>Temperature: {data.wData.main.temp}</h4>
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
  
  