import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PodcastEpisode } from '../services/interfaces';
import { fetchPodcastDetail } from '../services/api';
import { usePodcastContext } from '../context/MyContext';

const usePodcastDetail = () => {
  const { podcastId } = useParams<Record<string, string>>();
  const { podcasts } = usePodcastContext();
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [podcastDetail, setPodcastDetail] = useState<Partial<PodcastEpisode>>({
    artistName: "",
    artworkUrl600: "",
    collectionName: "",
    description: ""
  });

  useEffect(() => {
    const getDetail = async () => {
      try {
        if (!podcastId) return;
        const data = await fetchPodcastDetail(podcastId);
        const foundEpisode = data.results.find(episode => episode.wrapperType === "track");
        if (foundEpisode) {
            const podcast = podcasts.find(podcast => podcast.id === foundEpisode.collectionId.toString());
            foundEpisode.description = podcast ? podcast.description : "";
            setPodcastDetail(foundEpisode);
        }
        setEpisodes(data.results.filter(episode => episode.wrapperType === "podcastEpisode"));
      } catch (error) {
        setError('Failed to fetch podcast detail');
      } finally {
        setLoading(false);
      }
    };

    getDetail();
  }, [podcastId, podcasts]);

  return { podcastDetail, episodes, loading, error };
};

export default usePodcastDetail;
