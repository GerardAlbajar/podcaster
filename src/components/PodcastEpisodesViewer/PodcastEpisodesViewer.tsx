import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableHeader, TableRow } from './PodcastEpisodesViewer.styles';
import { useNavigate, useParams } from 'react-router-dom';
import { PodcastEpisode } from '../../services/interfaces';
import EpisodeDetail from '../EpisodeDetail/EpisodeDetail';

interface PodcastEpisodesViewerProps {
  episodes: PodcastEpisode[];
}

const PodcastEpisodesViewer: React.FC<PodcastEpisodesViewerProps> = ({ episodes }) => {
    const { podcastId, episodeId } = useParams<Record<string, string>>();
    const [selectedEpisode, setSelectedEpisode] = useState<PodcastEpisode | null>(null);
    const navigate = useNavigate();

    const millisToMinutesAndSeconds = (millis: number) => {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0) as never;
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    useEffect(() => {
        if (episodeId && episodes?.length) {
        const foundEpisode = episodes.find(episode => episode.trackId.toString() === episodeId);
        setSelectedEpisode(foundEpisode || null);
        }
    }, [episodeId, episodes]);

    const handleClick = (episodeId: number) => {
        navigate(`/podcast/${podcastId}/episode/${episodeId}`);
    };

    if (episodeId && selectedEpisode) {
        return <EpisodeDetail episode={selectedEpisode} />;
    }

    return (
        <Table>
        <thead>
            <tr>
            <TableHeader>Title</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Duration</TableHeader>
            </tr>
        </thead>
        <tbody>
            {episodes.map((episode, index) => (
                <TableRow
                    key={episode.trackId}
                    style={{ backgroundColor: index % 2 !== 0 ? '#f9f9f9' : '#fff' }}
                    onClick={() => handleClick(episode.trackId)}
                >
                    <TableCell><p>{episode.trackName}</p></TableCell>
                    <TableCell>{new Date(episode.releaseDate).toLocaleDateString()}</TableCell>
                    <TableCell>{episode?.trackTimeMillis ? millisToMinutesAndSeconds(episode.trackTimeMillis) : '-'}</TableCell>
                </TableRow>
            ))}
        </tbody>
        </Table>
    );
};

export default PodcastEpisodesViewer;
