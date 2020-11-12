import React, { useState, useCallback, useMemo } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    const [allWeather, setAllWeather] = useState({})
    const [allCharData, setAllCharData] = useState({})
    const [allForecastItemList, setAllForecastItemList] = useState({})

    const onSetAllWeather = useCallback((weatherCity) => {
        setAllWeather(allWeather => ({ ...allWeather, ...weatherCity }))
    }, [setAllWeather])

    const onSetCharData = useCallback((charDataCity) => {
        setAllCharData(allCharData => ({ ...allCharData, ...charDataCity }))
    }, [setAllCharData])

    const onSetForecastItemList = useCallback((forecastItemListCity) => {
        setAllForecastItemList(allForecastItemList => ({ ...allForecastItemList, ...forecastItemListCity }))
    }, [setAllForecastItemList])

    const actions = useMemo(() => ({
        onSetAllWeather,
        onSetCharData, 
        onSetForecastItemList
    }), [onSetAllWeather, onSetCharData, onSetForecastItemList])

    const data = useMemo(() => ({
        allWeather,
        allCharData,
        allForecastItemList
    }), [allWeather, allCharData, allForecastItemList])

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route path="/main">
                    <MainPage data={data} actions={actions} />
                </Route>
                <Route path="/city/:countryCode/:city">
                    <CityPage data={data} actions={actions} />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
