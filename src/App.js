import "./App.css";

// import {Route, BrowserRouter as Router} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Recharge from "./components/CustomerList/CustomerList";
import Customer from "./components/Customer/Customer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Recharge />} />
        <Route path="/c/:customerId" element={<Customer />} />
      </Routes>
    </Router>
  );
}

export default App;
