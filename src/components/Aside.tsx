import { FC } from 'react'
import { AsideCard } from './AsideCard'

type Props = {
  selected: Array<ForecastItem>
}

const formatHour = (e: ForecastItem) =>
  e.dt_txt.split(' ')[1].split('').slice(0, -3).join('') + 'hs'

const Aside: FC<Partial<Props>> = ({ selected }) => {
  if (!selected) return null

  return (
    <aside className="aside">
      {selected.map((e) => (
        <AsideCard ownArr={e} hour={formatHour(e)} key={e.dt} />
      ))}
    </aside>
  )
}

export default Aside
