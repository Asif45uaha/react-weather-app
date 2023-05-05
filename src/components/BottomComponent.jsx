const BottomComponents = ({weatherData}) => {
  console.log(weatherData);
  const feelsLike = Math.round(weatherData?.main?.feels_like)
  const humidity = weatherData?.main?.humidity
  const windSpeed = Math.round(weatherData?.wind?.speed)
  const min = Math.round(weatherData?.main?.temp_min)
  const max = Math.round(weatherData?.main?.temp_max)
  const windDir = weatherData?.wind?.deg
  
  return (
    <div className="details">
      <div>Feels like:  {feelsLike}°C</div>
      <div>Humidity: {humidity} percent</div>
      <div>Wind Speed: {windSpeed} m/s</div>
      <div>Min Temp: {min}°C</div>
      <div>Wind Dir: {windDir} deg</div>
      <div>Max Temp: {max}°C</div>
    </div>
  )
}
export default BottomComponents