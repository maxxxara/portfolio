import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Single from './pages/Single';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:p_id" element={<Single />} />
      </Routes> 
    
    </>
  );
}

export default App;
