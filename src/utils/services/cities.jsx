const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
    { city: "Bogotá", country: "Colombia", countryCode: "CO" },
    { city: "Madrid", country: "España", countryCode: "ES" },
    { city: "Ciudad de México", country: "México", countryCode: "MX" }
]

export const getCities = () => (cities)

export const getCountryNameByCountrycode = (countryCode) => (
    cities.filter(city => city.countryCode === countryCode)[0].country
)