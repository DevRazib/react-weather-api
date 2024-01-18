
import Weather from './components/Weather';
console.log(process.env.REACT_APP_WEATHER_API_KEY)
const App = () => {
  return (
    <div>
      <h1>Weather App </h1>
      <Weather/>
    </div>
  );
};

export default App;