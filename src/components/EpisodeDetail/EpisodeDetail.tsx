import React from 'react';
import { PodcastEpisode } from '../../services/interfaces';
import { EpisodeDetailContainer } from './EpisodeDetail.style';

interface PodcastEpisodeProps {
  episode: PodcastEpisode
}

const EpisodeDetail: React.FC<PodcastEpisodeProps> = ({ episode }) => {
    return (
        <EpisodeDetailContainer>
            <h3>{episode.trackName}</h3>
            <p>{episode.description}</p>
            {/* <span>This episode is sponsored by {episode.artistName}</span> TODO: Property not found */}
            <audio controls>
                <source src={episode.episodeUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </EpisodeDetailContainer>
    );
};

export default EpisodeDetail;
