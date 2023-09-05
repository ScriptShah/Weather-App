import axios from "axios";


// Get an array and return a random element
const randSelect = (ImageArray) => {
    const selector = Math.floor(Math.random * ImageArray.length);
    return ImageArray[selector];
}



const getWeather = (city)=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93a984c2321bd24125311f8482e7f687`).
    then(function getWeather (res){
    console.log(res);
})
}

