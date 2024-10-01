import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { ThemeWrapper } from './context/theme.context.jsx';

// normalmente organizanos los envoltorios de acuerdo a su frecuencia de uso
// los que menos cambian, deben estar por fuera
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeWrapper>
)
