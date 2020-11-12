import React, { useMemo } from 'react'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import useCityPage from './../hooks/useCityPage'
import useCityList from './../hooks/useCityList'
import { getCityCode } from './../utils/utils'
import { getCountryNameByCountrycode } from './../utils/services/cities'

const CityPage = ({ data, actions }) => {
    const { allWeather, allCharData, allForecastItemList } = data
    const { onSetAllWeather, onSetCharData, onSetForecastItemList } = actions

    const { city, countryCode, error, setError } = useCityPage(allCharData, allForecastItemList, onSetCharData, onSetForecastItemList)

    const cities = useMemo(() => ([{ city, countryCode }]), [ city, countryCode ])

    useCityList(cities, allWeather, onSetAllWeather)

    const citycode = getCityCode(city, countryCode)

    const weather = allWeather[citycode]
    
    const charData = allCharData[citycode]
    
    const forecastItemList = allForecastItemList[citycode]

    const country = countryCode && getCountryNameByCountrycode(countryCode)

    const state = weather && weather.state
    const temperature = weather && weather.temperature
    
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind
    
    return (
        <AppFrame>
            {
                error && <Alert severity="error" onClose={() => setError(null)} >{error}</Alert>
            }
            <Grid container justify="space-around" direction="column" spacing={2}>
                <Grid item container xs={12} justify="center" alignItems="flex-end">
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12} justify="center">
                    <Weather state={state} temperature={temperature} />
                    { humidity && wind && <WeatherDetails humidity={humidity} wind={wind} /> }
                    
                </Grid>
                <Grid container item xs={12} justify="center">
                    {
                        !charData && !forecastItemList && <LinearProgress />
                    }
                </Grid>
                <Grid item xs={12}>
                    {
                        charData && <ForecastChart data={charData} />
                    }
                </Grid>
                <Grid item xs={12}>
                    {
                        forecastItemList && <Forecast forecastItemList={forecastItemList} />
                    }
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage
