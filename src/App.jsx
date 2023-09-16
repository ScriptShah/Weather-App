import { AnimatePresence, motion } from 'framer-motion';
import SearchBar from './components/SearchBar';
import ShowBar from './components/ShowBar';
import WeatherStatics from './components/WeatherStatics';
import { slideAnimation } from './config/motion';
import { useState } from 'react';
import {getWeather, randSelect} from './config/helpers';
import {cloudy,snow,sunny,rainy} from "./config/constants";




  



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
  
  
  const handleChange = event => {
    setCity(event.target.value);
  };

  // const debouncedFunc = () =>{getWeather(city)}
  

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      try {
        const cityStatus = await getWeather(city,"cityStatus");
        const cityDegree = await getWeather(city,"cityTemp_c");
        const statusIcon = await getWeather(city,"statusIcon");
        const pressureData = await getWeather(city,"pressure_mb");
        const humidityData = await getWeather(city,"humidity");
        const windSpeedData = await getWeather(city,"wind_kph");
        const feelsLikeData = await getWeather(city,"feelslike_c");
        setStatus(cityStatus);
        setDegree(cityDegree);
        setIcon(statusIcon);
        setLocation(city.toUpperCase());
        setPressure(pressureData);
        setHumidity(humidityData);
        setWindSpeed(windSpeedData);
        setSetFeelsLike(feelsLikeData);

        
        if(cityStatus == "sunny" || "clear"){
          setBackground(randSelect(sunny));
        }else if(cityStatus == "cloudy" || "partly cloudy") {
          setBackground(randSelect(cloudy));
        }else if (cityStatus == "snow") {
          setBackground(randSelect(snow));
        }else if (cityStatus == "rainy" || "rain" || "showers" || "thunder") {
          setBackground(randSelect(rainy));
        }
      } catch (err) {
        console.error(err);
      }
    }
  };
  
  return (

    <>
      <AnimatePresence>
        <div className="main__section" style={{backgroundImage:`URL(${background})`}}>
          <motion.div {...slideAnimation('up') }>
            <SearchBar value={city} changeValue={handleChange} enterPressed={handleKeyDown}/>
          </motion.div>
          <motion.div {...slideAnimation('left')}>
            <ShowBar location={location}  weatherStatus={status} weatherDegree={degree} weatherIcon={icon}/>
          </motion.div>
          <motion.div {...slideAnimation('down')}>
            <WeatherStatics pressure={pressure} humidity={humidity} windSpeed ={windSpeed} feelsLike={feelsLike}/>
          </motion.div>
        </div>
      </AnimatePresence>
    </>  

  )
}

export default App;


