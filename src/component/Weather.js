import React, { useEffect, useState } from 'react'
import { appId, apiKeyAlgolia, apiKey } from '../envorment';
import { Card } from '@material-ui/core';

import AlgoliaPlaces from 'algolia-places-react';
import CurrentWeatherComponent from "./CurrenetWeather";

function WeatherComponent() {
	let [currentWeather, setCurrentWeather] = useState({
		temp: '0',
		feels_like: '0',
		description: 'snowing',
		icon: '50d',
		name: 'India, IN',
		lat: 18.4529,
		lon: 73.8652
	});

	let [url, setUrl] = useState(`https://api.openweathermap.org/data/2.5/weather?lat=${currentWeather.lat}&lon=${currentWeather.lon}&appid=${apiKey}&units=metric`);

	useEffect(() => {
		const getWeather = async () => {
			try {
				let res = await fetch(url);
				res = await res.json();
				let { description, icon } = res.weather[0];
				let { temp, feels_like } = res.main;
				setCurrentWeather({
					temp,
					feels_like,
					description,
					icon,
					name: `${res.name}, ${res.sys.country}`,
					lat: res.coord.lat,
					lon: res.coord.lon
				});
			} catch (error) {
				alert("Error", error)
			}
		};
		getWeather();
	}, [url])

	return (
		<Card
			className='card'
			justify="center"
			alignItems="center">
			<div >
				<AlgoliaPlaces
					placeholder='Write an address here'
					onChange={({ suggestion }) => setUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${suggestion.latlng.lat}&lon=${suggestion.latlng.lng}&appid=${apiKey}&units=metric`)}
					options={{ appId, apiKey: apiKeyAlgolia, aroundLatLngViaIP: false }}
				/>
			</div>
			<div >
				<CurrentWeatherComponent weather={currentWeather} />
			</div>
		</Card>
	);
}

export default WeatherComponent;