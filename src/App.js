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

  return (
    <div className="App">
      <Header/>
      <SearchSection />
      <OptionsSection currentWeatherSelected={currentWeatherSelected}
                      setCurrentWeatherSelected={setCurrentWeatherSelected}
                      forecastWeatherSelected={forecastWeatherSelected}
                      setForecastWeatherSelected={setForecastWeatherSelected}/>
      <WeatherDisplayContainer currentWeatherSelected={currentWeatherSelected}
                               forecastWeatherSelected={forecastWeatherSelected}/>
      <Footer />
    </div>
  );
}

export default App;
