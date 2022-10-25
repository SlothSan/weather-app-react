import './App.css';
import Header from "./Components/Header/Header";
import WeatherDisplayContainer from "./Components/WeatherDisplayContainer/WeatherDisplayContainer";

function App() {
  return (
    <div className="App">
      <Header/>
      <WeatherDisplayContainer/>
    </div>
  );
}

export default App;
