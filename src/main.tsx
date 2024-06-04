import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Link } from 'react-router-dom'
import { Header } from './styles/globalStyles.tsx'
import { PodcastContextProvider } from './context/MyContext.tsx'
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Header>
                <Link to="/">
                <h1>Podcaster</h1>
                </Link>
            </Header>
            <PodcastContextProvider>
                <App />
            </PodcastContextProvider>
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
