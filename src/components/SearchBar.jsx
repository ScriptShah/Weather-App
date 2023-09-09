import React from 'react'
import { useState } from 'react';
import {getWeather} from '../config/helpers';
import axios from "axios";

const SearchBar = () => {
  const [toggleState, setToggleState] = useState(1);
  
  const toggleTab = (index) => {
    setToggleState(index);
  }

  const [city, setCity] = useState('');

  const handleChange = event => {
    setCity(event.target.value);
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getWeather(event.target.value);
    }
  };
  

  return (
    <div className="search__bar">
      <div className="search-bar__city">
        <input type="text" className="search-bar__city-input" placeholder='Enter the city' onChange={handleChange} value={city} onKeyDown={handleKeyDown} />
      </div>

      <div className="spacer"></div>

      <div className={toggleState === 0 ? "show__celsius-deg" : "show__fahrenheit-deg"}>
        <button className= "celsius-deg"  onClick={() => {toggleTab(1)}} >
          °C
        </button>
        <button className="fahrenheit-deg" onClick={() => {toggleTab(0)}} >
          °F
        </button>
      </div>
    </div>
  )
}

export default SearchBar


//onClick={() => {toggleTab(0)}}
//onClick={() => {toggleTab(1)}}