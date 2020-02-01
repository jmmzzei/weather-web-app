import React from "react"
import { AsideCard } from "./AsideCard"

export default ({ selected }) => {
    if (typeof selected != 'string') {
        return (
            <aside className="aside">
                {selected.map(e => {
                    return  <AsideCard
                            ownArr={e}
                            hour={e.dt_txt.split(" ")[1]}
                            key={e.dt}/>
                })}
            </aside>
        )
    }
    else {
        return ''
    }
}