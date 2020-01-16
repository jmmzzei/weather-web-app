import React from "react"
import { AsideGroup } from "./AsideGroup";

export default ({ selected }) => {
    return (
        <aside className="aside">
            {(() =>
                typeof selected != "string" ? (
                    <AsideGroup
                        fullArr={selected}
                        key={1}
                    ></AsideGroup>
                ) : null)()}
        </aside>
    )
}