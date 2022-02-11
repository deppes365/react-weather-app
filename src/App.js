import { WeatherProvider} from "./context/WeatherContext";
import Navbar from "./layout/navbar/Navbar";

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
