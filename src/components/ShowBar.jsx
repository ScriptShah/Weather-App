import React from 'react';


const ShowBar = ({location,weatherStatus,weatherDegree,weatherIcon}) => {
  
    return (
      <>
        <div className="show__bar">
          <div className="show__bar__city">
            <span className="show__bar__city__name">{location}</span>
            <span className="show__bar__city__status__icon">
              <img src={weatherIcon} className="cityStatus__icon" />
            </span>
            <span className="show__bar__city__weather__status">{weatherStatus}</span>
          </div>
          <div className="show__bar__deg">{weatherDegree}°</div>
        </div>
      </>
    );
  
  
}

export default ShowBar