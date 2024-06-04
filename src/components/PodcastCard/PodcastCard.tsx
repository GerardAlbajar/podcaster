import React from 'react';
import { Link } from 'react-router-dom';
import { LinkStyled, CardContainer, CardContent, CardDescription, CardImage, CardTitle } from './PodcastCard.styles';

interface CardProps {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
}

const PodcastCard: React.FC<CardProps> = ({ id, title, author, imageUrl }) => {
  return (
    <LinkStyled>
        <Link to={`/podcast/${id}`}>
        <CardImage src={imageUrl} alt={title} />
        <CardContainer>
                <CardContent>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>Author: {author}</CardDescription>
                </CardContent>
        </CardContainer>
        </Link>
    </LinkStyled>
  );
};

export default PodcastCard;
