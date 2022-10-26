const CurrentWeatherCard = (props) => {

    return (
        <div className={"currentWeatherCard"}>
            <div className={"locationContainer"}>
                <p>Current weather for {props.currentLocationName}</p>
                <p>Last updated: {props.currentWeatherData.last_updated}</p>
            </div>
            <div className={"conditionsContainer"}>
                <p>Conditions: {props.currentWeatherData.condition.text}</p>
                <img src={props.currentWeatherData.condition.icon} alt={"current weather image"} />
                <p>Temperature: {props.currentWeatherData.temp_c}<span>&#8451;</span></p>
                <p>Feels like: {props.currentWeatherData.feelslike_c}<span>&#8451;</span></p>
                <p>Humidity: {props.currentWeatherData.humidity}%</p>
                <p>Wind speed: {props.currentWeatherData.wind_mph}mph</p>
                <p>Direction: {props.currentWeatherData.wind_dir}</p>
            </div>
        </div>
    )
}

export default CurrentWeatherCard