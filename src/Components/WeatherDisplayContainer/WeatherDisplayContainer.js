import {useEffect, useState} from "react";
import CurrentWeatherDisplayCards from "./CurrentWeatherDisplayCards/CurrentWeatherDisplayCards";
import FiveDayForecastDisplayCards from "./FiveDayForecastDisplayCards/FiveDayForecastDisplayCards";


const WeatherDisplayContainer = (props) => {

    const getUsersCoordsFromLocation =  async () => {
        props.setCurrentLocationCountry('')
        let url = `https://api.api-ninjas.com/v1/geocoding?city=${props.currentLocationName}`
        let requestOptions = {
            method: 'GET',
            headers: {
                'X-API-Key': 'NgxXwXnAZGKu4eFeI396cQ==VV0ycdY2IjSZo3g3'
            }
        }
        const locationData = await fetch(url, requestOptions)
        const locationDataJson = await locationData.json()
        props.setCurrentLatitude(locationDataJson[0].latitude)
        props.setCurrentLongitude(locationDataJson[0].longitude)
        props.setCurrentLocationCountry(locationDataJson[0].country)
        props.setCurrentLocationName(locationDataJson[0].name);
    }

    const getUsersLocationFromCoords = async () => {
        let url = `https://api.api-ninjas.com/v1/reversegeocoding?lat=${props.currentLatitude}&lon=${props.currentLongitude}`
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
        props.setLocationSet(true);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            props.setCurrentLatitude(position.coords.latitude)
            props.setCurrentLongitude(position.coords.longitude)
            props.setCoordsSet(true);
        }, (error) => {
            //TODO come back to this its broken!
            props.setCurrentLatitude(51.4545)
            props.setCurrentLongitude(2.5879)
            props.setCoordsSet(true);
        })
    }, [])

    useEffect(() => {
        getUsersLocationFromCoords()
    }, [props.coordsSet === true])

    useEffect(() => {
        getUsersCoordsFromLocation()
        props.setLocationChanged(false)
    }, [props.locationChanged])

    return (
        <div className={"weatherDisplayContainer"}>
            {props.locationSet ? props.currentWeatherSelected ? <CurrentWeatherDisplayCards
                currentLocationName={props.currentLocationName}
                currentLocationState={props.currentLocationState}
                currentLocationCountry={props.currentLocationCountry} /> : '' : ''}
            {props.locationSet ? props.forecastWeatherSelected ?
                <FiveDayForecastDisplayCards currentLocationName={props.currentLocationName} /> : '' : ''}
        </div>
    )
}

export default WeatherDisplayContainer