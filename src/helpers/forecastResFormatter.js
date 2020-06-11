export default (resJson) => {
  let list = resJson.list
  var daysData = [
    ['', []],
    ['', []],
    ['', []],
    ['', []],
    ['', []],
    ['', []],
    ['', []],
  ]
  let uniqueDays = [...new Set(list.map((list) => list.dt_txt.split(' ')[0]))]

  list.forEach((dayObj) => {
    uniqueDays.forEach((date, i) => {
        if (date ===  dayObj.dt_txt.split(' ')[0]){
        daysData[i] = [date, [...daysData[i][1], dayObj]]
        }
    })
  })

  return [daysData]
}

