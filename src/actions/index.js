import axios from 'axios';

const API_KEY = '72b45da5a32404ccac3471b017a4a81e';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city) {
	const url = `${ROOT_URL}${city}&appid=${API_KEY}`;
	const request = axios.get(url);


	return {
		type: FETCH_WEATHER,
		payload: request
	};
}