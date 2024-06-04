import React from 'react';
import { CardListContainer } from './PodcastCardList.styles';
import PodcastCard from '../PodcastCard/PodcastCard';

interface PodcastCardData {
    id: string;
    title: string;
    author: string;
    imageUrl: string;
}

interface PodcastCardListProps {
    podcastsList: PodcastCardData[];
}

const PodcastCardList: React.FC<PodcastCardListProps> = ({ podcastsList }) => {
    if (!podcastsList?.length) {
        return <p>No podcasts found</p>
    }
    return (
        <CardListContainer>
            {podcastsList.map((card) => (
                <PodcastCard
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    author={card.author}
                    imageUrl={card.imageUrl}
                />
            ))}
        </CardListContainer>
    );
};

export default PodcastCardList;
