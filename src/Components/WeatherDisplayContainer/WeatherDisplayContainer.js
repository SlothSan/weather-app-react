import {useEffect, useState} from "react";

const WeatherDisplayContainer = () => {
    const [locationEnabled, setLocationEnabled] = useState(true)
    const [currentLatitude, setCurrentLatitude] = useState(0)
    const [currentLongitude, setCurrentLongitude] = useState(0)
    const [currentLocation, setCurrentLocation] = useState({})

    const convertCoordsToLocation = async () => {
        let url = `https://api.api-ninjas.com/v1/reversegeocoding?lat=${currentLatitude}&lon=${currentLongitude}`;
        const locationData = await fetch(url, {
            method: 'GET',
            headers: {'X-Api-Key': 'NgxXwXnAZGKu4eFeI396cQ==VV0ycdY2IjSZo3g3'}
        })
        const locationDataJson = await locationData.json()
        console.log(locationDataJson[0]);
        setCurrentLocation(locationDataJson[0])
    }

    useEffect(() => {
        if(navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
                setCurrentLatitude(position.coords.latitude)
                setCurrentLongitude(position.coords.longitude)
            })
            convertCoordsToLocation()
        } else {
            setLocationEnabled(false)
            setCurrentLocation({name: 'Bristol', Country: 'GB', state: 'England'})
        }
    }, [])

    return (
        <div className={"weatherDisplayContainer"}>
            <p>Your current latitude is: {currentLatitude}</p>
            <p>Your current longitude is: {currentLongitude}</p>
        </div>
    )
}

export default WeatherDisplayContainer