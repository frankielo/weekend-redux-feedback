import React from 'react';
import './App.css';
import Header from '../Header/Header'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  // Routing Setup. Seperated header, imported Header which is in its own component.
  return (
    <div className='App'>
      <Router>
        <Header />  
        <Routes>
            {/* routes will go here */}
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
