const OptionsSection = (props) => {

    const handleClickCurrentWeather = () => {
        props.setCurrentWeatherSelected(!props.currentWeatherSelected)
        props.setForecastWeatherSelected(false)
    }

    const handleClickForecastWeather = () => {
        props.setForecastWeatherSelected(!props.forecastWeatherSelected)
        props.setCurrentWeatherSelected(false)
    }

    return (
        <section className={"optionsSection"}>
            <button onClick={handleClickCurrentWeather}>Current Weather</button>
            <button onClick={handleClickForecastWeather}>Ten Day Forecast</button>
        </section>
    )
}

export default OptionsSection