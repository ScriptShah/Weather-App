import axios from "axios";



const randSelect = (ImageArray) => {
    const selector = Math.floor(Math.random * ImageArray.length);
    return ImageArray[selector];
}


axios.get('https://api.openweathermap.org/data/2.5/weather?q=herat&appid=93a984c2321bd24125311f8482e7f687').then(function getWeather (res){
    console.log("");
})
