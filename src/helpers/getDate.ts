const getDate = (timestamp: number): string => {
  var date = new Date(timestamp * 1000)
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()
  return day + '/' + month + '/' + year
}

export default getDate
