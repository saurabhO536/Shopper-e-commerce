import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  ShopContextProvider } from './components/Context/ShopContext.jsx';


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
    <ShopContextProvider>
        <App />
        <ToastContainer />
    </ShopContextProvider>
 
        
    
)
