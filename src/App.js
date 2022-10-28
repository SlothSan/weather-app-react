import './App.css';
import Header from "./Components/Header/Header";
import WeatherDisplayContainer from "./Components/WeatherDisplayContainer/WeatherDisplayContainer";
import Footer from "./Components/Footer/Footer";
import OptionsSection from "./Components/OptionsSection/OptionsSection";

function App() {
  return (
    <div className="App">
      <Header/>
      <OptionsSection />
      <WeatherDisplayContainer/>
      <Footer />
    </div>
  );
}

export default App;
