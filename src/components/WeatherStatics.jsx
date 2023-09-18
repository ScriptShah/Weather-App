import React from 'react';
import StaticsCard from './StaticsCard';


import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CompressIcon from '@mui/icons-material/Compress';
import AirIcon from '@mui/icons-material/Air';
import { useState } from 'react';

const WeatherStatics = ({pressure,humidity,windSpeed,feelsLike,pUnit,wUnit,fUnit}) => {

  
  return (
    <div className='weatherStatics'>
        <StaticsCard name={"Pressure"} sign={<CompressIcon/>} data={pressure} unit={pUnit}/>
        <StaticsCard name={"Humidity"} sign={<WaterDropIcon/>} data={humidity} unit={"%"}/>
        <StaticsCard name={"Wind Speed"} sign={<AirIcon/>} data={windSpeed} unit={wUnit}/>
        <StaticsCard name={"Feels Like"} sign={<SentimentSatisfiedAltIcon/>} data={feelsLike} unit={fUnit}/> 
    </div>
  )
}

export default WeatherStatics