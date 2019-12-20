import React, { useState } from 'react';

export const Shower = ({date, click}) => {
    return(
        <div style={showerStyle} onClick={click}>
            <h2>{date}</h2>
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
    background: '#fff'
  }
  
  