import './App.css';

// import {Route, BrowserRouter as Router} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Recharge from './components/Recharge/Recharge';
import Shopify from './components/Shopify/Shopify';
import Device from './components/Device/Device';
import Customer from './components/Customer/Customer';

function App() {
  return (
      <Router>
        <Nav />    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recharge' element={<Recharge />} />
          <Route path='/shopify' element={<Shopify />} />
          <Route path='/device' element={<Device />} />
          <Route path="/r/:customerId" element={<Customer />} />
        </Routes>
      </Router>
  );
}

export default App;
