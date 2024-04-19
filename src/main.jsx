import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SuccessPage from "./components/SuccessPage";
import LogoutPage from "./components/LogoutPage"
import './index.css'


var root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  </Router>
);
