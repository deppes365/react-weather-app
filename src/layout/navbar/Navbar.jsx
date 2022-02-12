import '../navbar/navbar.scss';
import { useContext, useState, useEffect } from 'react';
import WeatherContext from '../../context/WeatherContext';

function Navbar() {
    const [unit, setUnit] = useState(false)

	const {input, setInput, formatLocation, fetchWeather, location } = useContext(WeatherContext);

    useEffect(() => {
        fetchWeather(location, unit)
        document.querySelector('input#location').value = '';
    }, [location])

	const handleSubmit = e => {
		e.preventDefault();
		const weatherLocation = formatLocation(input);
	};

	const handleChange = e => {
        setInput(e.target.value)
    };

	return (
		<div className="nav-bar">
			<h1>InstaWeather</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						name="location"
						id="location"
						placeholder="City, State"
						onChange={handleChange}
					/>
					<button type="submit">Search</button>
				</div>
			</form>
            <label className="switch">
                <input type="checkbox" onChange={(e) => setUnit(e.target.checked)}/>
                <span className="slider round"></span>
            </label>
		</div>
	);
}



export default Navbar;
