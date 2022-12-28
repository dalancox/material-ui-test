import "./App.css";

// import {Route, BrowserRouter as Router} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./scenes/Home";
import Nav from "./scenes/global/Nav";
import CustomerList from "./scenes/CustomerList";
import Dashboard from "./scenes/Dashboard";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/c/:customerId" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
