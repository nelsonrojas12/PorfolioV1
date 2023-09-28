import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioSection from './page/Portfolio/PortfolioSection';


function App() {
  return (
    <div className="app">

      <Router>
        <Routes>
          <Route path="/" element={<PortfolioSection/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;