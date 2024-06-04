import React, { useState, useEffect } from 'react';
import useTopPodcasts from '../hooks/useTopPodcasts';
import PodcastCardList from '../components/PodcastCardList/PodcastCardList';
import Loading from '../components/Loading/Loading';
import SearchBar from '../components/SearchBar/SearchBar';
import { useLocation, useNavigate } from 'react-router-dom';

const CardListPage: React.FC = () => {
    const { podcasts, loading, error } = useTopPodcasts();
    const [filteredPodcasts, setFilteredPodcasts] = useState(podcasts);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSearch = (query: string) => {
        const searchParams = new URLSearchParams(location.search);
        if (query) {
        searchParams.set('query', query);
        } else {
        searchParams.delete('query');
        }
        navigate(`${location.pathname}?${searchParams.toString()}`);
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const query = queryParams.get('query');
        if (query) {
        const filtered = podcasts.filter(podcast =>
            podcast.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredPodcasts(filtered);
        } else {
        setFilteredPodcasts(podcasts);
        }
    }, [podcasts, location.search]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section>
            <SearchBar onSearch={handleSearch} podcastListResultsNumber={filteredPodcasts.length}/>
            <PodcastCardList podcastsList={filteredPodcasts} />
        </section>
    );
};

export default CardListPage;
