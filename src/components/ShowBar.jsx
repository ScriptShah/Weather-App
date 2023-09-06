import React from 'react';
import {getStatus,getMetricTemp,getImperialTemp,getIcon} from "../config/helpers";
import SearchBar from './SearchBar';
import { useState } from 'react';


const ShowBar = () => {
  const city = 'herat';
  const cityStatusIcon = getIcon(city);
  const cityWeatherStatus = getStatus(city);
  const degree = getMetricTemp(city);
  
 

    return (
      <>
        <div className="show__bar">
          <div className="show__bar__city">
            <span className="show__bar__city__name">{city}</span>
            <span className="show__bar__city__status__icon">
              <img src={cityStatusIcon} alt="City Status Icon" />
            </span>
            <span className="show__bar__city__weather__status">{cityWeatherStatus}</span>
          </div>
          <div className="show__bar__deg">{degree}°</div>
        </div>
      </>
    );
  
  
}

export default ShowBar