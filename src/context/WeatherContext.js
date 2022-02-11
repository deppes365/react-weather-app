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

	return (
		<WeatherContext.Provider value={{ 
            location, 
            setLocation,
            input,
            setInput,
            formatLocation 
        }}>
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherContext;
