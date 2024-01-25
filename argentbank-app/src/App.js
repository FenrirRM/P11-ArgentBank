import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import des pages
import Home from "./pages/Home/Home";
//import Login from "./pages/Login/Login";
// import Dashboard from "./pages/Dashboard/Dashboard";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router> 
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
