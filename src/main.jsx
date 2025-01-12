import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './components/counter.jsx';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Counters from './components/counters.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counters />
  </StrictMode>,
)
