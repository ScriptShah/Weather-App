import React from 'react'
import { useState } from 'react';


const SearchBar = ({value,changeValue,enterPressed,toggle,toggledTab}) => {

  
  

  

  


  

  return (
    <div className="search__bar">
      <div className="search-bar__city">
        <input type="text" className="search-bar__city-input" placeholder='Enter the city ' onChange={changeValue} value={value}  onKeyDown={enterPressed}/>
      </div>

      <div className={toggle === 0 ? "show__celsius-deg" : "show__fahrenheit-deg"}>
        <button className= "celsius-deg"  onClick={() => {toggledTab(1)}} >
          °C
        </button>
        <button className="fahrenheit-deg" onClick={() => {toggledTab(0)}} >
          °F
        </button>
      </div>
    </div>
  )
}

export default SearchBar
