import './App.css';
import Header from "./Components/Header/Header";
import WeatherDisplayContainer from "./Components/WeatherDisplayContainer/WeatherDisplayContainer";
import Footer from "./Components/Footer/Footer";
import OptionsSection from "./Components/OptionsSection/OptionsSection";
import {useState} from "react";
import SearchSection from "./Components/SearchSection/SearchSection";

function App() {
    const [currentWeatherSelected, setCurrentWeatherSelected] = useState(true)
    const [forecastWeatherSelected, setForecastWeatherSelected] = useState(false)
    const [currentLocationName, setCurrentLocationName] = useState('')
    const [currentLocationState, setCurrentLocationState] = useState('')
    const [currentLocationCountry, setCurrentLocationCountry] = useState('')
    const [currentLatitude, setCurrentLatitude] = useState(0)
    const [currentLongitude, setCurrentLongitude] = useState(0)
    const [coordsSet, setCoordsSet] = useState(false)
    const [locationSet, setLocationSet] = useState(false)
    const [locationChanged, setLocationChanged] = useState(false);


  return (
    <div className="App">
      <Header/>
      <SearchSection setCurrentLocationName={setCurrentLocationName}
                     currentLocationName={currentLocationName}
                    currentLocationCountry={currentLocationCountry}
                    setLocationChanged={setLocationChanged}/>
      <OptionsSection currentWeatherSelected={currentWeatherSelected}
                      setCurrentWeatherSelected={setCurrentWeatherSelected}
                      forecastWeatherSelected={forecastWeatherSelected}
                      setForecastWeatherSelected={setForecastWeatherSelected}/>
      <WeatherDisplayContainer
          currentWeatherSelected={currentWeatherSelected}
          forecastWeatherSelected={forecastWeatherSelected}
          currentLocationName={currentLocationName}
          setCurrentLocationName={setCurrentLocationName}
          setCurrentLocationState={setCurrentLocationState}
          setCurrentLocationCountry={setCurrentLocationCountry}
          currentLocationState={currentLocationState}
          currentLocationCountry={currentLocationCountry}
          currentLatitude={currentLatitude}
          currentLongitude={currentLongitude}
          setCurrentLatitude={setCurrentLatitude}
          setCurrentLongitude={setCurrentLongitude}
          coordsSet={coordsSet}
          setCoordsSet={setCoordsSet}
          locationSet={locationSet}
          setLocationSet={setLocationSet}
          locationChanged={locationChanged}
          setLocationChanged={setLocationChanged}/>
      <Footer />
    </div>
  );
}

export default App;
