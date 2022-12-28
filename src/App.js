import "./App.css";

// import {Route, BrowserRouter as Router} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Home from "./scenes/Home";
import Nav from "./scenes/global/Nav";
import CustomerList from "./scenes/CustomerList";
import Dashboard from "./scenes/Dashboard";

import { ColorModeContext, useMode } from "./theme";

import Container from "@mui/material/Container";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Router>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/customers" element={<CustomerList />} />
              <Route path="/c/:customerId" element={<Dashboard />} />
            </Routes>
          </Router>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
