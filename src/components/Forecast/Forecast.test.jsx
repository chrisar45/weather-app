import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
    { weekDay: "Jueves", hour: 18, state: "clear", temperature: 17 },
    { weekDay: "Viernes", hour: 6, state: "clouds", temperature: 18 },
    { weekDay: "Viernes", hour: 12, state: "fog", temperature: 18 },
    { weekDay: "Viernes", hour: 10, state: "clouds", temperature: 19 },
    { weekDay: "Sábado", hour: 7, state: "rain", temperature: 19 },
    { weekDay: "Sábado", hour: 14, state: "rain", temperature: 17 },
    { weekDay: "Domingo", hour: 8, state: "clear", temperature: 17 }
]

test('Forcast render', async() => {
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList} />)

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(7)
})
