import React from 'react';
import StaticsCard from './StaticsCard';


import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CompressIcon from '@mui/icons-material/Compress';
import AirIcon from '@mui/icons-material/Air';
import { useState } from 'react';

const WeatherStatics = ({pressure,humidity,windSpeed,feelsLike}) => {

  
  return (
    <div className='weatherStatics'>
        <StaticsCard name={"Pressure"} sign={<CompressIcon/>} data={pressure} unit={"Ph"}/>
        <StaticsCard name={"Humidity"} sign={<WaterDropIcon/>} data={humidity} unit={"%"}/>
        <StaticsCard name={"Wind Speed"} sign={<AirIcon/>} data={windSpeed} unit={"kph"}/>
        <StaticsCard name={"Feels Like"} sign={<SentimentSatisfiedAltIcon/>} data={feelsLike} unit={"°C"}/> 
    </div>
  )
}

export default WeatherStatics