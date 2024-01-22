import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ListDragonProvider } from './context/ListDragonContext.tsx'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA3zOFFgZ5bmqqT9cCl1XIcwscluxcKqyI",
  authDomain: "southchallenge-f35db.firebaseapp.com",
  projectId: "southchallenge-f35db",
  storageBucket: "southchallenge-f35db.appspot.com",
  messagingSenderId: "369845213266",
  appId: "1:369845213266:web:5087876d09278b5545678b"
};

export const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ListDragonProvider>
      <App />
    </ListDragonProvider>
  </React.StrictMode>,
)
