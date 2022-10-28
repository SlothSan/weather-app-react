import {useEffect, useState} from "react";
import CurrentWeatherDisplayCards from "./CurrentWeatherDisplayCards/CurrentWeatherDisplayCards";
import FiveDayForecastDisplayCards from "./FiveDayForecastDisplayCards/FiveDayForecastDisplayCards";


const WeatherDisplayContainer = (props) => {
    const [currentLatitude, setCurrentLatitude] = useState(0)
    const [currentLongitude, setCurrentLongitude] = useState(0)
    const [coordsSet, setCoordsSet] = useState(false)
    const [locationSet, setLocationSet] = useState(false)
    const [currentLocationName, setCurrentLocationName] = useState('')
    const [currentLocationState, setCurrentLocationState] = useState('')
    const [currentLocationCountry, setCurrentLocationCountry] = useState('')

    const getUsersLocationFromCoords = async () => {
        let url = `https://api.api-ninjas.com/v1/reversegeocoding?lat=${currentLatitude}&lon=${currentLongitude}`
        let requestOptions = {
            method: 'GET',
            headers: {
                'X-API-Key': 'NgxXwXnAZGKu4eFeI396cQ==VV0ycdY2IjSZo3g3'
            }
        }
        const locationData = await fetch(url, requestOptions);
        const locationDataJson = await locationData.json();
        props.setCurrentLocationName(locationDataJson[0].name)
        props.setCurrentLocationState(locationDataJson[0].state)
        props.setCurrentLocationCountry(locationDataJson[0].country)
        setLocationSet(true);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            //Set the long and lat using that
            setCurrentLatitude(position.coords.latitude)
            setCurrentLongitude(position.coords.longitude)
            setCoordsSet(true);
        })
    }, [])

    useEffect(() => {
        getUsersLocationFromCoords()
    }, [coordsSet === true])


    return (
        <div className={"weatherDisplayContainer"}>
            {locationSet ? props.currentWeatherSelected ? <CurrentWeatherDisplayCards
                currentLocationName={props.currentLocationName}
                currentLocationState={props.currentLocationState}
                currentLocationCountry={props.currentLocationCountry} /> : '' : ''}
            {locationSet ? props.forecastWeatherSelected ?
                <FiveDayForecastDisplayCards currentLocationName={props.currentLocationName} /> : '' : ''}
        </div>
    )
}

export default WeatherDisplayContainer