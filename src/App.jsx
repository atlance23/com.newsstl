import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const d = new Date();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
