import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  const d = new Date();

  return (
    <>
      <Routes>
        <Header />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
