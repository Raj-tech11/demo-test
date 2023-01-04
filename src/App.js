import "./App.css";
import Header from "./components/header/Header";

import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
