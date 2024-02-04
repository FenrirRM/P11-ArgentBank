import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// import des pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Error from "./pages/Error/Error";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const isConnected = useSelector((state) => state.auth.isConnected);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Dashboard"
          element={isConnected ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
