import axios, { Axios, AxiosError } from "axios";




// Get an array and return a random element
export const randSelect = (ImageArray) => {
    const selector = Math.floor(Math.random() * ImageArray.length);
    return ImageArray[selector];
}



     


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
        break;
        case 'humidity' : return response.data.current.humidity;
        break;
        case 'pressure_mb' : return response.data.current.pressure_mb;
        break;
        case 'pressure_in' : return response.data.current.pressure_in;
        break;
        case 'feelslike_c' : return response.data.current.feelslike_c;
        break;
        case 'feelslike_f' : return response.data.current.feelslike_f;
        break;
        case 'wind_kph' : return response.data.current.wind_kph;
        break;
        case 'wind_mph' : return response.data.current.wind_mph;
        break;
        case 'day' : return response.data.current.is_day;
      }
      

    } catch (err) {
      if(err.message == "Network Error"){
        alert('Check your internet connection !');
      }else{
        alert('Location not found. Please try again!');
      }
    throw err;
    }
  };


