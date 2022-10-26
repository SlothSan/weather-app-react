const ForecastCard = (props) => {
    return (
        <div>
            <p>{props.forecastData.forecast.forecastday[0].date}</p>
            <p>{props.forecastData.forecast.forecastday[1].date}</p>
        </div>
    )
}

export default ForecastCard