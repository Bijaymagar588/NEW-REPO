import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Services from './pages/Services'

const App = () => {
  return (
    <Router>
      <div>
        <header className="text-white" />
          
          <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/about" element={<Aboutus />} />
            <Route path ="/contactus" element={<Contactus /> } />
            <Route path ="/service" element={<Services />}/>
           
          </Routes>
        
      </div>
    </Router>
  );
};

export default App;
