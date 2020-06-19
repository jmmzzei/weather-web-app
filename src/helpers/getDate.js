import { formatDistance, subDays } from 'date-fns'
import format from 'date-fns/format'
import { id, ar } from 'date-fns/locale'

const getDate = (fullArr, iterator) => {
  let arrDate = fullArr[iterator][0].date.split('-')
  let arrHour = fullArr[iterator][0].hour.split(':')

  return formatDistance(
    new Date(
      arrDate[0],
      arrDate[1] - 1,
      arrDate[2],
      arrHour[0],
      arrHour[1],
      arrHour[2],
    ),
    new Date(),
    { addSuffix: true },
  )
}

export default getDate
