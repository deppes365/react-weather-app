import '../navbar/navbar.scss';
import { useContext } from 'react';
import WeatherContext from '../../context/WeatherContext';

function Navbar() {
	const {input, setInput, formatLocation } = useContext(WeatherContext);

	

	const handleSubmit = e => {
		e.preventDefault();
		console.log(formatLocation(input));
	};

	const handleChange = e => setInput(e.target.value);

	

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
		</div>
	);
}

export default Navbar;
