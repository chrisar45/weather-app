import moment from 'moment'
import 'moment/locale/es'
import { toCelsius } from './../utils'

const getForecastItemList = (data) => {
    const interval = [4, 8, 12, 16, 20, 24]
    const forecastItemListAux = data.list
        .filter((item, index) => interval.includes(index))
        .map(item => {
            return (
                {
                    weekDay: moment.unix(item.dt).format('dddd'),
                    hour: moment.unix(item.dt).hour(),
                    state: item.weather[0].main.toLowerCase(),
                    temperature: toCelsius(item.main.temp)
                }
            )
        })

    return forecastItemListAux
}

export default getForecastItemList
