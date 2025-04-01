import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import About from './components/About.jsx'
/* import ErrorPage from './components/ErrorPage.jsx'; */


const root = document.getElementById("root");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/info-rental" element={<div>Logement</div>} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
