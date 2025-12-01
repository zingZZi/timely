import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Clendar from "./pages/calendar/Calendar";
import AuthLayout from "./layout/AuthLayout/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Clendar />} />
          <Route path="/login" element={<AuthLayout page={'login'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
