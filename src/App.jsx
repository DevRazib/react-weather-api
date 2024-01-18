
import Weather from './components/Weather';
const App = () => {
  const titleStyle={
    fontSize:'50px',
    color:'#ffffff'
   }
  return (
    <div>
      <h1 style={titleStyle}>Weather Forecast App </h1>
      <Weather/>
    </div>
  );
};

export default App;