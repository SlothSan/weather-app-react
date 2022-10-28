import {useEffect, useState} from "react";
import ForecastCard from "./ForecastCard/ForecastCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

const FiveDayForecastDisplayCards = (props) => {
    const [forecastData, setForecastData] = useState({})
    const [forecastDataSet, setForecastDataSet] = useState(false)

    const getForecastData = async () => {
        let url = `http://api.weatherapi.com/v1/forecast.json?key=2bb1c7417c4749d9a28102637222510
                   &q=${props.currentLocationName}&days=10&aqi=no&alerts=no`
        const forecastDataFromApi = await fetch(url)
        const forecastDataJson = await forecastDataFromApi.json()
        setForecastData(forecastDataJson.forecast.forecastday)
        setForecastDataSet(true)
    }

    useEffect(() => {
        getForecastData()
    },)

    return (
        <Carousel className={'carouselContainer'} showIndicators={true}
                  axis={"vertical"}
                  showStatus={false}
                  showThumbs={false}
                  dynamicHeight={false}>
            {forecastDataSet ? forecastData.map(data => {
                    return (
                        <ForecastCard key={data.date} currentLocationName={props.currentLocationName}
                                      forecastData={data}/>
                    )
                }) : ''}
        </Carousel>
    )
}

export default FiveDayForecastDisplayCards