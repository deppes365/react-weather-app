import { createContext, useState } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
	const [location, setLocation] = useState([]);
    const [input, setInput] = useState('');

    const formatLocation = (location) => {
		const locationArray = location
			.toLowerCase()
			.split(', ')
			.map(word => word.trim())
			.map(word => {
				if (word.indexOf(' ') > -1) {
					return word.split(' ').join('+');
				} else {
					return word;
				}
			});

        setLocation(locationArray)    
	}

    async function fetchWeather([city, state], unit) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=${unit ? 'metric' : 'imperial'}&appid=${process.env.REACT_APP_WEATHER_API}`)

            const data = await response.json()
            console.log(data?.message ? data.message : data);
        } catch(e) {
            console.log(`Something went wrong: ${e}`);
        }
    }

	return (
		<WeatherContext.Provider value={{ 
            location, 
            setLocation,
            input,
            setInput,
            formatLocation,
            fetchWeather
        }}>
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherContext;
