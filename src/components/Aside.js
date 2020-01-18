import React from "react"
import { AsideGroup } from "./AsideGroup";

export default ({ selected, dateHandler }) => {
    return (
        <aside className="aside">
            {(() =>
                typeof selected != "string" ? (
                    <AsideGroup
                        fullArr={selected}
                        key={1}
                        dateHandler={dateHandler}
                    ></AsideGroup>
                ) : null)()}
        </aside>
    )
}