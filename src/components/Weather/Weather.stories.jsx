import React from 'react'
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}

export const WeatheRclouds = () => <Weather temperature={10} state={"clouds"} />
export const WeatheRfog = () => <Weather temperature={10} state={"fog"} />
export const WeatheRclear = () => <Weather temperature={10} state={"clear"} />
export const WeatheRrain = () => <Weather temperature={10} state={"rain"} />
export const WeatheRsnow = () => <Weather temperature={10} state={"snow"} />
export const WeatheRdrizzle = () => <Weather temperature={10} state={"drizzle"} />
export const WeatheRthunderstorm = () => <Weather temperature={10} state={"thunderstorm} />