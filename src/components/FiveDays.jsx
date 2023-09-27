import React from 'react';
import DayCard from './DayCard';

const FiveDays = ({dayOne,dayTwo,dayThree,dayFour,dayFive,fUnit}) => {

  
  return (
    <div className='FiveDays'>
        <DayCard name={dayOne}  data={'feelsLike'} unit={fUnit}/>
        <DayCard name={dayTwo}  data={'feelsLike'} unit={fUnit}/>
        <DayCard name={dayThree}  data={'feelsLike'} unit={fUnit}/>
        <DayCard name={dayFour}  data={'feelsLike'} unit={fUnit}/>
        <DayCard name={dayFive}  data={'feelsLike'} unit={fUnit}/>   
    </div>
  )
}

export default FiveDays