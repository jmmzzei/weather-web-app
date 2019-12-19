import React from 'react';

export const NextTemp = ({data}) => {
    return(
        <div style={showerStyle}>
            <h2>{data}</h2>
            {/* <h4>Temperature: {data.wData.main.temp}</h4> */}
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
  
  