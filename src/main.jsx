import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter} from 'react-router-dom'
import { ContextProvider } from './components/Context/UseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <ContextProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
    </ContextProvider>
 </BrowserRouter>
)
