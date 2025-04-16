import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './pages/About.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import InfoRental from './pages/InfoRental.jsx';
import Layout from './Layouts/Layout.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/info-rental/:id" element={<InfoRental />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
