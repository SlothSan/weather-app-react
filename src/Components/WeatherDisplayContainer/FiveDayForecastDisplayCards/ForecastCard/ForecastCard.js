const ForecastCard = (props) => {
    return (
        <div className={"currentWeatherCard"}>
            <div className={"locationContainer"}>
                <p>Forecast for {props.currentLocationName}</p>
                <p>Date: {props.forecastData.date}</p>
            </div>
            <div className={"conditionsContainer"}>
                <p>Conditions: {props.forecastData.day.condition.text}</p>
                <img src={props.forecastData.day.condition.icon} alt={"forecasted weather"} />
                <p>Average Temperature: {props.forecastData.day.avgtemp_c}<span>&#8451;</span></p>
                <p>Average Humidity: {props.forecastData.day.avghumidity}%</p>
                <p>Chance of rain: {props.forecastData.day.daily_chance_of_rain}%</p>
                <p>Max wind speed: {props.forecastData.day.maxwind_mph}mph</p>
            </div>
        </div>
    )
}

export default ForecastCard