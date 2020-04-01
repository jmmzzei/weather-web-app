import React from "react"
import { FooterCard } from "./FooterCard";

export default ({ uniqueDate, click }) => {
    return (
        <footer className="footer">

            {uniqueDate  
            ? uniqueDate.map(e => 
            (
                <FooterCard
                    date={e[0]}
                    click={() => click(e[1])}
                    key={e[1][0].dt}
                />
            ))
            : <>
            {
            (()=>{
                let footerCardArr = []
                for (let i = 0; i < 5; i++) {
                    footerCardArr.push(<FooterCard />) 
                }
                return footerCardArr
            })()
            }
            </>
            }
        </footer>
    )
}