import React, { useEffect, useState } from 'react'

const App = () => {
    const [city,setCity] = useState('') ; 
    const [wheatherData , setWheatherData] = useState('') ; 

    useEffect(()=>{
      if (city.trim() === '') return;     
      const fetchWeather = async () =>{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=806515417e2d02f9747220e103360b51&units=metric`) ;
        const data = await res.json() ;
        setWheatherData(data) ; 
      }

      fetchWeather() ; 
    },[city]) ; 
   return (
    <div>
      <input placeholder='type the city name for wheather'
      type='text'
      value={city}
      onChange={(event) => setCity(event.target.value)}
       />
       {wheatherData && wheatherData.main && (
  <div>
    <h2>{wheatherData.name}, {wheatherData.sys.country}</h2>
    <p>Temperature: {wheatherData.main.temp} °C</p>
    <p>Weather: {wheatherData.weather[0].description}</p>
    <p>Humidity: {wheatherData.main.humidity}%</p>
    <p>Wind Speed: {wheatherData.wind.speed} m/s</p>
  </div>
)}

    </div>
  )
}

export default App
