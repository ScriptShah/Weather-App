import axios from "axios";




// Get an array and return a random element
export const randSelect = (ImageArray) => {
    const selector = Math.floor(Math.random * ImageArray.length);
    return ImageArray[selector];
}



export const debounce = (func, delay = 100) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };
     


  export const getWeather = async (location,info) => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=db636d4f380641fbbd2114735230609&q=${location}&aqi=no`);
      
      switch(info) {
        case 'cityTemp_c' : return response.data.current.temp_c;
        break;
        case 'cityTemp_f' : return response.data.current.temp_f;
        break;
        case 'statusIcon' : return response.data.current.condition.icon;
        break;
        case 'cityStatus': return response.data.current.condition.text;
      }

    } catch (err) {
      alert('Location not found. Please try again!');
      throw err;
    }
  };


//   return response.data.current.temp_c;
//   return response.data.current.temp_f;
//  return response.data.current.condition.icon;
//  return response.data.current.condition.text;