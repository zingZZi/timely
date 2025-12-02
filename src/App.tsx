import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout/AuthLayout";
import MainLayout from "./layout/MainLayout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout page={'home'} />} />
        <Route path="/calendar" element={<MainLayout page={'calendar'} />} />
        <Route path="/login" element={<AuthLayout page={'login'} />} />
        <Route path="/signup" element={<AuthLayout page={'signup'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
