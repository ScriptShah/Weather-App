import SearchBar from './components/SearchBar';
import ShowBar from './components/ShowBar';
import WeatherStatics from './components/WeatherStatics';
import { useState } from 'react';
import {getWeather, randSelect} from './config/helpers';
import {cloudy,snow,sunny,rainy} from "./config/constants";
import FiveDays from './components/FiveDays';




  



function App() {

  
  const [city, setCity] = useState(' ');
  const [location , setLocation] = useState("Herat")
  const [status, setStatus] = useState("Sunny");
  const [degree, setDegree] = useState("30");
  const [icon, setIcon] = useState("http://cdn.weatherapi.com/weather/64x64/day/113.png");
  const [pressure,setPressure] = useState("1000");
  const [humidity,setHumidity] = useState("12");
  const [windSpeed,setWindSpeed] = useState("10");
  const [feelsLike,setSetFeelsLike] = useState("29");
  const [background,setBackground] = useState(cloudy[0]);
  const [toggleState, setToggleState] = useState(1);
  const [degSystem,setDegSystems] = useState("C");
  const[pressureUnit,setPressureUnit] = useState("mb");
  const[windSpeedUnit,setWindSpeedUnit] = useState("Kph");
  const[feelsLikeUnit,setSetFeelsLikeUnit] = useState("C");
  

  const tabToggle = (index) => {
    setToggleState(index);
    if(index==1){
      setDegSystems("C");
      setPressureUnit("mb");
      setWindSpeedUnit("Kph");
      setSetFeelsLikeUnit("C");
    }else {
      setDegSystems("F");
      setPressureUnit("in");
      setWindSpeedUnit("Mph");
      setSetFeelsLikeUnit("F");
    }
  }
  

  
  const handleChange = event => {
    setCity(event.target.value);
  };

  // const debouncedFunc = () =>{getWeather(city)}
  

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {

      try {
        const cityStatus = await getWeather(city,"cityStatus");
        const celsius = await getWeather(city,"cityTemp_c");
        const fahrenheit = await getWeather(city,"cityTemp_f");
        const statusIcon = await getWeather(city,"statusIcon");
        const pressureDataImperial = await getWeather(city,"pressure_in");
        const pressureDataMetric = await getWeather(city,"pressure_mb");
        const humidityData = await getWeather(city,"humidity");
        const windSpeedDataImperial = await getWeather(city,"wind_mph");
        const windSpeedDataMetric = await getWeather(city,"wind_kph");
        const feelsLikeDataCelsius = await getWeather(city,"feelslike_c");
        const feelsLikeDataFahrenheit = await getWeather(city,"feelslike_f");
        const date = await getWeather(city,"day");
        console.log(date);
        
      
        
        
        setIcon(statusIcon);
        setLocation(city.toUpperCase());
        setStatus(cityStatus);
        setHumidity(humidityData);
  

        if(degSystem=="C"){
          setDegree(celsius);
          setPressure(pressureDataMetric);
          setWindSpeed(windSpeedDataMetric);
          setSetFeelsLike(feelsLikeDataCelsius);
        } else {
          setDegree(fahrenheit);
          setPressure(pressureDataImperial);
          setWindSpeed(windSpeedDataImperial);
          setSetFeelsLike(feelsLikeDataFahrenheit);
        }

        if (cityStatus.includes("Sunny")  || cityStatus.includes("Clear")) {
          console.log(cityStatus);
          setBackground(randSelect(sunny));
        } else if (cityStatus.includes("Cloudy") || cityStatus.includes("Partly cloudy")) {
   
          setBackground(randSelect(cloudy));
        } else if (cityStatus.includes("Snow")) {

          setBackground(randSelect(snow));
        } else if (
          cityStatus.includes("rain") ||
          cityStatus.includes("Light rain")  ||
          cityStatus.includes("Showers")  ||
          cityStatus.includes("Thunder")
        ) {
          setBackground(randSelect(rainy));
        }else{
          setBackground(cloudy[0]);
        }

      } catch (err) {
        console.error(err);
      }
    }
  };
  


  
  return (

        <div className="main__section" style={{backgroundImage:`URL(${background})`}}>
            <SearchBar value={city} changeValue={handleChange} enterPressed={handleKeyDown} toggle={toggleState} setToggle={setToggleState}toggledTab={tabToggle}/>
            <ShowBar location={location}  weatherStatus={status} weatherDegree={degree} weatherIcon={icon} unit={feelsLikeUnit}/>
            <WeatherStatics pressure={pressure} humidity={humidity} windSpeed ={windSpeed} feelsLike={feelsLike} pUnit={pressureUnit} wUnit={windSpeedUnit} fUnit={feelsLikeUnit} />
            <FiveDays pressure={pressure} humidity={humidity} windSpeed ={windSpeed} feelsLike={feelsLike} pUnit={pressureUnit} wUnit={windSpeedUnit} fUnit={feelsLikeUnit} />
        </div>
  )
}

export default App;


