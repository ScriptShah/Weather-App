import { AnimatePresence, motion } from 'framer-motion';
import SearchBar from './components/SearchBar';
import ShowBar from './components/ShowBar';
import WeatherStatics from './components/WeatherStatics';
import { slideAnimation } from './config/motion';
import { useState } from 'react';
import {debounce,getWeather} from './config/helpers';




  



function App() {

  
  const [city, setCity] = useState(' ');
  const [location , setLocation] = useState("Herat")
  const [status, setStatus] = useState("Sunny");
  const [degree, setDegree] = useState("30");
  const [icon, setIcon] = useState("http://cdn.weatherapi.com/weather/64x64/day/113.png");

  
  
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
        setStatus(cityStatus);
        setDegree(cityDegree);
        setIcon(statusIcon);
        setLocation(city);
      } catch (err) {
        console.error(err);
      }
    }
  };
  
  return (

    <>
      <AnimatePresence>
        <div className="main__section">
          <motion.div {...slideAnimation('up') }>
            <SearchBar value={city} changeValue={handleChange} enterPressed={handleKeyDown}/>
          </motion.div>
          <motion.div {...slideAnimation('left')}>
            <ShowBar location={location}  weatherStatus={status} weatherDegree={degree} weatherIcon={icon}/>
          </motion.div>
          <motion.div {...slideAnimation('down')}>
            <WeatherStatics/>
          </motion.div>
        </div>
      </AnimatePresence>
    </>  

  )
}

export default App;


