import { useState, useEffect, useDebugValue } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getForecastUrl } from './../utils/apis'
import getCharData from './../utils/transform/getCharData'
import getForecastItemList from './../utils/transform/getForecastItemList'
import { getCityCode } from './../utils/utils'

const useCityPage = (allCharData, allForecastItemList, actions) => {
    const [error, setError] = useState(null)

    const { city, countryCode } = useParams()

    useDebugValue(`useCityPage ${city},${countryCode}`)
    useEffect(() => {
        const cityCode = getCityCode(city, countryCode)
        const getForecast = async () => {
            const url = getForecastUrl( city, countryCode )
            try {
                const { data } = await axios.get(url)

                const dataAux = getCharData(data)
                
                actions({type: 'SET_CHART_DATA', payload: { [cityCode]: dataAux }})

                const forecastItemListAux = getForecastItemList( data )

                actions({type: 'SET_FORECAST_ITEM_LIST', payload: { [cityCode]: forecastItemListAux }})
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

        if(allCharData && allForecastItemList && !allCharData[cityCode] && !allForecastItemList[cityCode]){
            getForecast()
        }

    }, [city, countryCode, actions, allCharData, allForecastItemList])

    return { city, countryCode, error, setError }
}

export default useCityPage