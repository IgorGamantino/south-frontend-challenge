import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ListDragonProvider } from './context/ListDragonContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ListDragonProvider>
      <App />
    </ListDragonProvider>
  </React.StrictMode>,
)
