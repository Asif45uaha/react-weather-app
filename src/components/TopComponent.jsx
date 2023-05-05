import { TfiLocationPin } from 'react-icons/tfi'
const TopComponents = ({weatherData}) => {
    const iconId = weatherData?.weather[0].icon
    const temp = Math.round(weatherData?.main?.temp)
    const des = weatherData?.weather[0]?.description
    const cityName = weatherData?.name
    return (
        <>
            <div className="icon">
                <img src={`http://openweathermap.org/img/wn/${iconId}.png`} alt="weatherImg" />
                <p><TfiLocationPin size={25} /> {cityName}</p>
                
            </div>
            <div className="temperature">{temp}°C</div>
            <div className="description">{des}</div>
        </>
    )
}
export default TopComponents