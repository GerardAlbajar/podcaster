import { useEffect, useState } from 'react';
import { fetchTopPodcasts } from '../services/api';
import { Entry } from '../services/interfaces';

interface Podcast {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
}

const useTopPodcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTopPodcasts();
        const podcastEntries: Podcast[] = data.feed.entry.map((entry: Entry) => ({
          id: entry.id.attributes["im:id"],
          title: entry["im:name"].label,
          author: entry["im:artist"].label,
          imageUrl: entry["im:image"][2].label,
        }));
        setPodcasts(podcastEntries);
      } catch (error) {
        setError('Failed to fetch podcasts');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { podcasts, loading, error };
};

export default useTopPodcasts;
