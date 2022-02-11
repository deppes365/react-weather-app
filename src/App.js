import Navbar from "./layout/navbar/Navbar";
import { WeatherProvider} from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Navbar />
      </div>
    </WeatherProvider>
  );
}

export default App;
