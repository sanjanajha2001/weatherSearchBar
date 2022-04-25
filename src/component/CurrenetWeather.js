import React from 'react'
import IconWeatherComponent from "./WeatherIcon";
import { Grid } from '@material-ui/core';


function CurrentWeatherComponent({ weather }) {
	return (
		<Grid>
			<div className='cards'>
				<div className='text'>Temprature</div>
				<div className="text"><span className='weather-temp'>{weather.temp}</span>°C</div>
				<div className='text'>Feels like</div>
				<div className='text'><span className='weather-feel'> {weather.feels_like} </span>°C</div>
			</div>

			<div className="cards">
				<div className="font">Weather : {weather.description}</div>
				<div className="font">State : {weather.name}</div>
			</div>
			<IconWeatherComponent icon={weather.icon} />
		</Grid>
	);
}

export default CurrentWeatherComponent