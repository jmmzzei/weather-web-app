import React from 'react'
import styled from 'styled-components'
// import "../css/layout/style.scss"

export default (prop) => {
    return (
        <div className='grid' style={gridStyle}>
            
            {prop.propsy}
            {prop.propsy1}
        </div>
    )
}

const gridStyle = {
    display: 'grid',
    gridTemplateColumns:' repeat(2, 1fr)',
    gridTemplateRows: '1fr 200px',
    gridGap: '20px',
    height: '100vh',
    margin: 0,
    padding: 0,
    width: '100vw',
    background: '#f1f1f1',
}
