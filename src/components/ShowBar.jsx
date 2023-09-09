import React from 'react';


const ShowBar = ({city,cityStatusIcon,cityWeatherStatus,degree}) => {
  
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