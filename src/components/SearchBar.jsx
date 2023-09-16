import React from 'react'


const SearchBar = ({value,changeValue,enterPressed , toggleMe,toggleMeState}) => {


  

  return (
    <div className="search__bar">
      <div className="search-bar__city">
        <input type="text" className="search-bar__city-input" placeholder='Enter the city' onChange={changeValue} value={value}  onKeyDown={enterPressed}/>
      </div>

      <div className="spacer"></div>

      <div className={toggleMeState === 0 ? "show__celsius-deg" : "show__fahrenheit-deg"}>
        <button className= "celsius-deg"  onClick={toggleMe(1)} >
          °C
        </button>
        <button className="fahrenheit-deg" onClick={toggleMe(0)} >
          °F
        </button>
      </div>
    </div>
  )
}

export default SearchBar
