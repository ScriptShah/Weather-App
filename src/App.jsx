import { AnimatePresence, motion } from 'framer-motion';
import SearchBar from './components/SearchBar';
import ShowBar from './components/ShowBar';
import WeatherStatics from './components/WeatherStatics';
import { slideAnimation } from './config/motion';
import { useState } from 'react';





function App() {

  
  const [city, setCity] = useState('');

  const handleChange = event => {
    setCity(event.target.value);

  };

    const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(city);
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
            <ShowBar/>
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


// 93a984c2321bd24125311f8482e7f687
//https://api.openweathermap.org/data/2.5/weather?q=herat&appid=93a984c2321bd24125311f8482e7f687