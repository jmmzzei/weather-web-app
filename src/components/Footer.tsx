import React from 'react'
import { FooterCard } from './FooterCard'

type Props = {
  uniqueDate?: any[]
  click?: any
}

const Footer = ({ uniqueDate, click }: Props) => {
  return (
    <footer className="footer">
      {uniqueDate ? (
        uniqueDate.map(
          (e) =>
            e[1].length !== 0 && (
              <FooterCard
                date={e[0]}
                click={() => click(e[1])}
                key={e[1][0].dt}
              />
            ),
        )
      ) : (
        <>
          {(() => {
            let footerCardArr = []
            for (let i = 0; i < 5; i++) {
              footerCardArr.push(<FooterCard />)
            }
            return footerCardArr
          })()}
        </>
      )}
    </footer>
  )
}

export default Footer
