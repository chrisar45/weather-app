import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    { weekDay: "Jueves", hour: 18, state: "clear", temperature: 17 },
    { weekDay: "Viernes", hour: 6, state: "clouds", temperature: 18 },
    { weekDay: "Viernes", hour: 12, state: "fog", temperature: 18 },
    { weekDay: "Viernes", hour: 18, state: "clouds", temperature: 19 },
    { weekDay: "Sábado", hour: 8, state: "rain", temperature: 19 },
    { weekDay: "Sábado", hour: 14, state: "rain", temperature: 17 },
    { weekDay: "Domingo", hour: 8, state: "clear", temperature: 17 }
]

export const ForecastExample = () => <Forecast forecastItemList={forecastItemList}/>