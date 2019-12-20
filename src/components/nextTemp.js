import React from 'react';

export const NextTemp = ({time, log, fullArr, keyChild}) => {
    console.log();
    
    return(
        <div style={showerStyle} >
            <h4>Date: {typeof fullArr != 'object' ? '...' : fullArr.dt_txt}</h4>
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
  
  