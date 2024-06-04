import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Link } from 'react-router-dom'
import { Header } from './styles/globalStyles.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Header>
            <Link to="/">
                <h1>Podcaster</h1>
            </Link>
        </Header>
        <App />
    </BrowserRouter>
  </React.StrictMode>
  ,
)
