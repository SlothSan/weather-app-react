import {useEffect, useState} from "react";
import ForecastCard from "./ForecastCard/ForecastCard";

const FiveDayForecastDisplayCards = (props) => {
    const [forecastData, setForecastData] = useState({})
    const [forecastDataSet, setForecastDataSet] = useState(false)

    const getForecastData = async () => {
        let url = `http://api.weatherapi.com/v1/forecast.json?key=2bb1c7417c4749d9a28102637222510
                   &q=${props.currentLocationName}&days=5&aqi=no&alerts=no`
        const forecastDataFromApi = await fetch(url)
        const forecastDataJson = await forecastDataFromApi.json()
        setForecastData(forecastDataJson)
        setForecastDataSet(true)
    }

    useEffect(() => {
        getForecastData()
        console.log(forecastData)
    }, [])

    return (
        <div>
            {forecastDataSet ? <ForecastCard forecastData={forecastData}/> : <p>Data is not set</p>}
        </div>
    )
}

export default FiveDayForecastDisplayCards