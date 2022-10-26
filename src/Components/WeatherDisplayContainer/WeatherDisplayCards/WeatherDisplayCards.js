import {useEffect, useState} from "react";
import CurrentWeatherCard from "./CurrentWeatherCard/CurrentWeatherCard";

const WeatherDisplayCards = (props) => {
    const [currentWeatherData, setCurrentWeatherData] = useState({})
    const [weatherDataSet, setWeatherDataSet] = useState(false)

    const getWeatherData = async () => {
        let url = `http://api.weatherapi.com/v1/current.json?key=
                   2bb1c7417c4749d9a28102637222510&q=${props.currentLocationName}&aqi=no`
        const weatherData = await fetch(url)
        const weatherDataJson = await weatherData.json()
        setCurrentWeatherData(weatherDataJson.current)
        setWeatherDataSet(true)
    }

    useEffect(() => {
        getWeatherData()
    }, [])



    return (
        <div>
            {weatherDataSet ? <CurrentWeatherCard currentWeatherData={currentWeatherData}
                                                      currentLocationName={props.currentLocationName}/> : ''}
        </div>
    )
}

export default WeatherDisplayCards