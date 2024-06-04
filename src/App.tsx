import React from 'react';
import { Route, Routes } from "react-router-dom";
import CardListPage from './pages/CardListPage';
import { AppStyled } from './styles/globalStyles';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <AppStyled>
        <Routes>
            <Route path="/" element={<CardListPage />} />
        </Routes>
        <Toaster />
    </AppStyled>
  );
};

export default App;
