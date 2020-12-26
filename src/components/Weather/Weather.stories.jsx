import React from 'react'
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}

const Template = (args) => <Weather {...args} />

export const WeatheRclouds = Template.bind({})
WeatheRclouds.args = { temperature:10, state: "clouds" }

export const WeatheRfog = Template.bind({})
WeatheRfog.args = { temperature:10, state: "fog" }

export const WeatheRclear = Template.bind({})
WeatheRclear.args = { temperature:10, state: "clear" }

export const WeatheRrain = Template.bind({})
WeatheRrain.args = { temperature:10, state: "rain" }

export const WeatheRsnow = Template.bind({})
WeatheRsnow.args = { temperature:10, state: "snow" }

export const WeatheRdrizzle = Template.bind({})
WeatheRdrizzle.args = { temperature:10, state: "drizzle" }

export const WeatheRthunderstorm = Template.bind({})
WeatheRthunderstorm.args = { temperature:10, state: "thunderstorm" }
