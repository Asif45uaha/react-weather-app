import { useState } from "react";
import axios from "axios";
import BottomComponent from "./components/BottomComponent";
import TopComponent from "./components/TopComponent";
const key = process.env.REACT_APP_API_KEY
function App() {
  const [cityVal, setCityVal] = useState("")
  const [weatherData, setWeatherData] = useState()
  const [err, setErr] = useState("")
  const fetchWeatherData = async (ev) => {
    ev.preventDefault()
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${key}&units=metric`)
      setWeatherData(response.data)
      setErr("")
    } catch (error) {
      setErr("Error!! City Entered is invalid Please Enter a Valid City Name")
      // console.log("Error While Calling an APi", error);
    }
  }
  return (
    <div className="container">
      <h1>Weather App</h1>
      <form onSubmit={fetchWeatherData}>
        <input type="text" id="city-input" placeholder="Enter City" onChange={(e) => { setCityVal(e.target.value) }} />
        <input type="submit" value="Get Weather" className="submit" />
       
      </form>
      {
        err ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "red" }}>
            <p>{err}</p>
          </div>
        ) : ""
      }
      {
        weatherData && 
        (
          <div className="weather-data">
            <TopComponent weatherData={weatherData} />
            <BottomComponent weatherData={weatherData} />
          </div>
        )
      }
      
    </div>
  );
}

export default App;

//cityName={weatherData.name} countryName={weatherData.sys.country}
//iconId={weatherData.weather[0].icon} temperature={weatherData.main.temp} description={weatherData.weather[0].description}
//feelsLike={weatherData.main.feels_like} Humidity={weatherData.main.humidity} windSpeed={weatherData.wind.speed}