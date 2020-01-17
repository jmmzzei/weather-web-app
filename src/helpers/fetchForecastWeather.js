export default async coords => {
        let resUnique = ''
        let resFull = ''

		await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
		)
        .then(res => res.json())
        .then(resJson => {
            let fullArray = []
            let uniqueDates = []
            let prevDate = 0

            let formatter = []
            let objFormatter = []
            let arrayNumber = 0

            resJson.list.forEach(allData => {
                let arr = []

                let [date] = allData.dt_txt.split(" ")
                arr.push(date)
                arr.push(allData)
                fullArray.push(arr)

                if (formatter.length > 0) {

                    if (prevDate !== date) {

                        if (arrayNumber !== 0){
                            objFormatter.shift()
                        }
                        arrayNumber++

                        formatter.push(objFormatter)
                        uniqueDates.push(formatter)

                        formatter = []
                        objFormatter = []

                        formatter.push(date)
                        objFormatter.push(allData)
                    }
                    objFormatter.push(allData)
                } else {
                    formatter.push(date)
                    objFormatter.push(allData)
                }

                prevDate = date
            })

            if (formatter !== []) {
                objFormatter.shift()
                formatter.push(objFormatter)
                uniqueDates.push(formatter)
                formatter = []
                objFormatter = []
            }
           
            resUnique = uniqueDates
            resFull = fullArray
           
        })
        
        return { resUnique, resFull}
}