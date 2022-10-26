import {useEffect, useState} from "react";
import CurrentWeatherDisplayCards from "./CurrentWeatherDisplayCards/CurrentWeatherDisplayCards";


const WeatherDisplayContainer = () => {
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
        setCurrentLocationName(locationDataJson[0].name)
        setCurrentLocationState(locationDataJson[0].state)
        setCurrentLocationCountry(locationDataJson[0].country)
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
            {locationSet ? <CurrentWeatherDisplayCards
                            currentLocationName={currentLocationName}
                            currentLocationState={currentLocationState}
                            currentLocationCountry={currentLocationCountry} /> : ''}
        </div>
    )
}

export default WeatherDisplayContainer