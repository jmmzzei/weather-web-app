import React from 'react'
import { AsideCard } from './AsideCard'

export default ({ selected }) => {
  return typeof selected !== 'string' ? (
    <aside className="aside">
      {selected.map((e) => {
        return <AsideCard ownArr={e} hour={e.dt_txt.split(' ')[1]} key={e.dt} />
      })}
    </aside>
  ) : null
}
