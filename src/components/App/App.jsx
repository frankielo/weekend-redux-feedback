import React from 'react';
import './App.css';
import Header from '../Header/Header'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Comments from '../Comments/Comments'
import Feeling from '../Feeling/Feeling'
import Review from '../Review/Review'
import Support from '../Support/Support'
import Understanding from '../Understanding/Understanding'

function App() {
  // Routing Setup. Seperated header, imported Header which is in its own component.
  return (
    <div className='App'>
      <Router>
        <Header />

        <Routes>
            {/* routes will go here */}
            <Route path="/" element={<Feeling/>} />
            <Route path="/understanding" element={<Understanding/>} />
            <Route path="/support" element={<Support/>} />
            <Route path="/comments" element={<Comments/>} />
            <Route path="/review" element={<Review/>} />
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
