import React from "react"
import { FooterCard } from "./FooterCard";

export default ({ uniqueDate, change }) => {
    return (
        <section className="footer">
            {uniqueDate.map(e => 
            (
                <FooterCard
                    date={e[0]}
                    click={() => change(e[1])}
                    key={e[1][0].dt}
                ></FooterCard>
            ))}
        </section>
    )
}