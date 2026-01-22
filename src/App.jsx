import Header from './components/Header'
import WeatherSlider from './components/WeatherSlider';

function App() {
  const d = new Date();

  return (
    <>
      <Header />
      <WeatherSlider />
    </>
  )
}

export default App
