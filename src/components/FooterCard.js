import React, { useState } from 'react';

export const FooterCard = ({date, click}) => {
    return(
        <div className="footerCard" onClick={click}>
            <h2>{date}</h2>
        </div>
    )
}


  
  