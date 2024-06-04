import React from 'react';
import { Route, Routes } from "react-router-dom";
import CardListPage from './pages/CardListPage';
import PodcastDetailPage from './pages/PodcastDetailPage';
import { AppStyled } from './styles/globalStyles';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <AppStyled>
        <Routes>
            <Route path="/" element={<CardListPage />} />
            <Route path="/podcast/:podcastId" element={<PodcastDetailPage />} />
            <Route path="/podcast/:podcastId/episode/:episodeId" element={<PodcastDetailPage />} />
        </Routes>
        <Toaster />
    </AppStyled>
  );
};

export default App;
