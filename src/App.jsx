import { AnimatePresence, motion } from 'framer-motion';
import SearchBar from './components/SearchBar';
import ShowBar from './components/ShowBar';
import WeatherStatics from './components/WeatherStatics';
import { slideAnimation } from './config/motion';
import {WeatherApp} from './config/helpers';

const newWeather = new WeatherApp();



function App() {
  return (

    <>
      <AnimatePresence>
        <div className="main__section">
          <motion.div {...slideAnimation('up') }>
            <SearchBar/>
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