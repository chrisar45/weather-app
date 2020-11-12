import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy, WiDayFog, WiDaySunny, WiRain, WiSnow, WiRaindrop, WiThunderstorm } from 'react-icons/wi'

export const validValues = [
    "clouds",
    "fog",
    "clear",
    "rain",
    "snow",
    "drizzle",
    "thunderstorm"
]

const stateByName = {
    clouds: WiDayCloudy, 
    fog: WiDayFog, 
    clear: WiDaySunny, 
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm
}

const IconState = ({ state }) => {
    const StatebyName = stateByName[state]
    return (
        <StatebyName />
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
