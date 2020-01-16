import React from 'react';

export const FooterCard = ({date, click}) => {
    return(
        <div className="footerCard" onClick={click}>
            <h2>{date ? date : ''}</h2>
        </div>
    )
}


  
  