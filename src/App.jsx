import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import WinterStorm from './pages/WinterStorm';
import StlRoadCondtions from './pages/StlRoadConditions';

function App() {
  const d = new Date();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/winterstorm" element={<WinterStorm />} />
        <Route path="/stlroadconditions" element={<StlRoadCondtions />} />
      </Routes>
    </>
  )
}

export default App
