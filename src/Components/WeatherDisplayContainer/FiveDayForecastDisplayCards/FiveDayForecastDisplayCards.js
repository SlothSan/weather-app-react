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
        setForecastData(forecastDataJson.forecast.forecastday)
        setForecastDataSet(true)
    }

    useEffect(() => {
        getForecastData()
    },)

    return (
        <div>
            {forecastDataSet ? forecastData.map(data => {
                    return (
                        <ForecastCard currentLocationName={props.currentLocationName}
                                      forecastData={data}/>
                    )
                }) : <p>Data is not set</p>}
        </div>
    )
}

export default FiveDayForecastDisplayCards