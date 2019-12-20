import React from 'react';

export const Card = props => {
    // console.log(props.data.name);
    
    return(
        <div style={cardStyle} onClick={props.clicker}>
            <h1>{typeof props.data.coord != 'object' ? '...' : props.data.name}</h1>
            <h2>{typeof props.data.coord != 'object' ? '...' : Math.floor(props.data.main.temp)}</h2>
        </div>
    )
}


const cardStyle = {
    display: 'block',
    width: '100%',
    border: '1px solid black',
    margin: 10,
    borderRadius: 20,
    padding: 8,
  }
  
  