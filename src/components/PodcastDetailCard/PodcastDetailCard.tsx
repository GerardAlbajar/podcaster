import React from 'react';
import { PodcastDetailCardContainer, PodcastDetailCardSection } from './PodcastDetailCard.styles';

interface CardProps {
  title?: string;
  author?: string;
  imageUrl?: string;
  description?: string;
}

const PodcastDetailCard: React.FC<CardProps> = ({ title, author, imageUrl, description }) => {
  return (
    <PodcastDetailCardContainer className='card'>
        <img src={imageUrl} alt={title} />
        <PodcastDetailCardSection>
            <h3>{title}</h3>
            <span>by {author}</span>
        </PodcastDetailCardSection>
        <PodcastDetailCardSection>
            <h3>Description</h3>
            <span>{description}</span>
        </PodcastDetailCardSection>
    </PodcastDetailCardContainer>
  );
};

export default PodcastDetailCard;
