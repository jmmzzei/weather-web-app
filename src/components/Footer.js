import React from "react"
import { FooterCard } from "./FooterCard";

export default ({ uniqueDate, click }) => {
    let key = 0
    return (
        <section className="footer">
            {uniqueDate.map(e => {
                key++

                return (
                    <FooterCard
                        date={e[0]}
                        fullArr={e[1]}
                        id={key - 1}
                        key={key}
                        click={() => click(e[1])}
                    ></FooterCard>
                )
            })}
        </section>
    )
}