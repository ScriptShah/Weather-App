import axios from "axios";

export class WeatherApp  {

    constructor (location,format){
        this.location = location;
        this.format = format;
    }

    // condition of the location
    condition (location,info){
        axios.get(`https://api.weatherapi.com/v1/current.json?key=db636d4f380641fbbd2114735230609&q=${location}&aqi=no`).
        then(function getWeather (res){
            console.log(`res.data.current.${info}`);
        return `res.data.current.${info}`;
        })
        .catch(function handleError(err) {
            alert('Location not found try again !');
        });
    }


}




// Get an array and return a random element
export const randSelect = (ImageArray) => {
    const selector = Math.floor(Math.random * ImageArray.length);
    return ImageArray[selector];
}



// get metric temperature degree

export const getMetricTemp = (city)=>{
    
    axios.get(`https://api.weatherapi.com/v1/current.json?key=db636d4f380641fbbd2114735230609&q=${city}&aqi=no`).
    then(function getWeather (res){
        console.log(res.data.current.temp_c);
    return res.data.current.temp_c;
    })
    .catch(function handleError(err) {
        alert('Location not found try again !');
    });
}

// get imperial temperature degree

export const getImperialTemp = (city)=>{
    
    axios.get(`https://api.weatherapi.com/v1/current.json?key=db636d4f380641fbbd2114735230609&q=${city}&aqi=no`).
    then(function getWeather (res){
        console.log(res.data.current.temp_f);
    return res.data.current.temp_f;
    })
    .catch(function handleError(err) {
        alert('Location not found try again !');
    });
}

// get state of the city

export const getStatus = (city)=>{
    
    axios.get(`https://api.weatherapi.com/v1/current.json?key=db636d4f380641fbbd2114735230609&q=${city}&aqi=no`).
    then(function getWeather (res){
        // console.log(res.data.current.temp.text);
    return res.data.current.condition.text;
    })
    .catch(function handleError(err) {
        alert('Location not found try again !');
    });
}


// get icon for state of city

export const getIcon = (city)=>{
    axios.get(`https://api.weatherapi.com/v1/current.json?key=db636d4f380641fbbd2114735230609&q=${city}&aqi=no`).
    then(function getWeather (res){
        // console.log(res.data.current.condition.icon);
    return res.data.current.condition.icon;
    })
    .catch(function handleError(err) {
        alert('Location not found try again !');
    });
}

// wait until user finish typing 

export const debounce = (func, delay = 1000) => {
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
     



  export const getWeather = (city)=>{
    
    axios.get(`https://api.weatherapi.com/v1/current.json?key=db636d4f380641fbbd2114735230609&q=${city}&aqi=no`).
   then(function getWeather (res){
       console.log(res.data.current);
   return res.data.current.condition.text;
   })
   .catch(function handleError(err) {
       alert('Location not found try again !');
   });
}
