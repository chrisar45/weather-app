const appid = "28d89d5fed8378ab373fbc1dc5e62d16"
export const getWeatherUrl = (city, countryCode) => (
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
)

export const getForecastUrl = (city, countryCode) => (
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
)