import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import WinterStorm from './pages/WinterStorm';

function App() {
  const d = new Date();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/winterstorm" element={<WinterStorm />} />
      </Routes>
    </>
  )
}

export default App
