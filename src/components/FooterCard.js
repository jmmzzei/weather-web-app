import React from 'react'

export const FooterCard = ({ date, click }) => {
  return (
    <div className="footerCard" onClick={click}>
      <h3>{date ? date : ''}</h3>
    </div>
  )
}
