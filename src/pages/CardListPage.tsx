import React, { useEffect, useState } from 'react';
import PodcastCardList from '../components/PodcastCardList/PodcastCardList';
import Loading from '../components/Loading/Loading';
import SearchBar from '../components/SearchBar/SearchBar';
import { usePodcastContext } from '../context/MyContext';

const CardListPage: React.FC = () => {
  const { podcasts, loading, error } = usePodcastContext();
  const [filteredPodcasts, setFilteredPodcasts] = useState(podcasts);

  const handleSearch = (query: string) => {
    if (query) {
      const filtered = podcasts.filter(podcast =>
        podcast.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPodcasts(filtered);
    } else {
      setFilteredPodcasts(podcasts);
    }
  };

  useEffect(() => {
    if(!podcasts) return
    setFilteredPodcasts(podcasts);
  }, [podcasts]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} podcastListResultsNumber={filteredPodcasts?.length} />
      <PodcastCardList podcastsList={filteredPodcasts} />
    </div>
  );
};

export default CardListPage;
