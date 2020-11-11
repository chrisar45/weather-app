import convertUnits from 'convert-units'

export const toCelsius = (temp) => Number(convertUnits(temp).from('K').to('C').toFixed(0))

export const getCityCode = ( city, countryCode ) => `${city}-${countryCode}`