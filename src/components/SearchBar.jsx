import React from 'react'
import { useState } from 'react';


const SearchBar = ({value,changeValue,enterPressed}) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }


  

  return (
    <div className="search__bar">
      <div className="search-bar__city">
        <input type="text" className="search-bar__city-input" placeholder='Enter the city' onChange={changeValue} value={value}  onKeyDown={enterPressed}/>
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
