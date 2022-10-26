const ForecastCard = (props) => {
    return (
        <div>
            <p>{props.forecastData[0].date}</p>
            <p>{props.forecastData[1].date}</p>
        </div>
    )
}

export default ForecastCard