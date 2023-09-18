import React from 'react';
import StaticsCard from './StaticsCard';


import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CompressIcon from '@mui/icons-material/Compress';
import AirIcon from '@mui/icons-material/Air';
import { useState } from 'react';
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