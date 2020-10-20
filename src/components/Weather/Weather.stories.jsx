import React from 'react'
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}

export const WeatherCloud = () => <Weather temperature={10} state={"cloud"}/>
export const WeatherCloudy = () => <Weather temperature={10} state={"cloudy"}/>
export const WeatherFog = () => <Weather temperature={10} state={"fog"}/>
export const WeatherSunny = () => <Weather temperature={10} state={"sunny"}/>
export const WeatherRain = () => <Weather temperature={10} state={"rain"}/>