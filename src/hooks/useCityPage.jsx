import { useState, useEffect, useDebugValue } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getForecastUrl } from './../utils/apis'
import getCharData from './../utils/transform/getCharData'
import getForecastItemList from './../utils/transform/getForecastItemList'

const useCityPage = () => {
    const [charData, setCharData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)
    const [error, setError] = useState(null)

    const { city, countryCode } = useParams()

    useDebugValue(`useCityPage ${city},${countryCode}`)
    useEffect(() => {
        const getForecast = async (city, countryCode) => {
            const url = getForecastUrl( city, countryCode )

            try {
                const { data } = await axios.get(url)

                const dataAux = getCharData(data)
                
                setCharData(dataAux)

                const forecastItemListAux = getForecastItemList( data )

                setForecastItemList(forecastItemListAux)

            } catch (error) {
                if (error.response) { // Errores que nos responde el server
                    setError("Ha ocurrido un error en el servidor del clima")
                } else if (error.request) { // Errores que suceden por no llegar al server
                    setError("Verifique la conexión a internet")
                } else { // Errores imprevistos
                    setError("Error al cargar los datos")
                }
            }
        }

        getForecast(city, countryCode)

    }, [city, countryCode])

    return { city, countryCode, charData, forecastItemList, error, setError }
}

export default useCityPage