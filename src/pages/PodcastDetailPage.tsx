import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import usePodcastDetail from '../hooks/usePodcastDetail';
import Loading from '../components/Loading/Loading';
import PodcastDetailCard from '../components/PodcastDetailCard/PodcastDetailCard';
import PodcastEpisodesViewer from '../components/PodcastEpisodesViewer/PodcastEpisodesViewer';

export const PodcastDetailPageStyled = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 40px;

  > :first-child {
    flex-basis: 20%;
    flex-grow: 0;
    position: sticky;
    top: 20px;
    align-self: flex-start;
  }

  > :nth-child(2) {
    flex-basis: 80%;
    flex-grow: 1;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    overflow-x: hidden;
    
    > :first-child, 
    > :nth-child(2) {
      flex-basis: 100%;
    }

    > :first-child {
      position: static;
    }

    > :nth-child(2) {
      overflow-x: auto;
    }
  }
`;

const EpisodesCount = styled.h3`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0;
`;

const EpisodesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PodcastDetailPage: React.FC = () => {
    const { episodeId } = useParams<Record<string, string>>();
    const { podcastDetail, episodes, loading, error } = usePodcastDetail();
    
    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <PodcastDetailPageStyled>
            <PodcastDetailCard
                author={podcastDetail.artistName}
                description={podcastDetail.description || 'Description not found'}
                imageUrl={podcastDetail.artworkUrl600}
                title={podcastDetail.collectionName}
            />
            <EpisodesWrapper>
                {!episodeId && (
                <EpisodesCount>
                    Episodes: {episodes?.length}
                </EpisodesCount>
                )}
                <PodcastEpisodesViewer episodes={episodes} />
            </EpisodesWrapper>
        </PodcastDetailPageStyled>
    );
};

export default PodcastDetailPage;
