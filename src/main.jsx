import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'

const root = document.getElementById("root");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/info-rental" element={<div>Logement</div>} />
      <Route path="/404" element={<div>404</div>} />
      <Route path="/about" element={<div>A propos</div>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
