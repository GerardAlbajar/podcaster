import { createContext, useContext, ReactNode } from 'react';
import useTopPodcasts from '../hooks/useTopPodcasts';
import { Podcast } from '../services/interfaces';

interface PodcastContextType {
  podcasts: Podcast[];
  loading: boolean;
  error: string | null;
}

const PodcastContext = createContext<PodcastContextType | undefined>(undefined);

export const PodcastContextProvider = ({ children }: { children: ReactNode }) => {
  const { podcasts, loading, error } = useTopPodcasts();
  return (
    <PodcastContext.Provider value={{ podcasts, loading, error }}>
      {children}
    </PodcastContext.Provider>
  );
};

export const usePodcastContext = () => {
  const context = useContext(PodcastContext);
  if (!context) {
    throw new Error('usePodcastContext must be used within a PodcastContextProvider');
  }
  return context;
};
