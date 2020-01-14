import React from 'react'

export const AsideCard = ({ fullArr, date, hour }) => {
    
    return (
        <div className="asideCard">
            <h4>{typeof fullArr != 'object' ? '...' : fullArr.main.temp}</h4>
            <h4>{typeof fullArr != 'object' ? '...' : hour}hs</h4>
        </div>
    )
}
