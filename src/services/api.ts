import axios from 'axios';
import { Entry, PodcastDetail } from './interfaces';
import toast from 'react-hot-toast';


export const fetchTopPodcasts = async (): Promise<{ feed: { entry: Entry[] } }> => {
    const API_URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
    try {
        const { data } = await axios.get(API_URL);

        return data;
    } catch (error) {
        toast.error("Error fetching podcast Top Podcasts list");
        throw error;
    }
};

export const fetchPodcastDetail = async (podcastId: string): Promise<PodcastDetail> => {
    const DETAIL_URL = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=30`;
    const PROXY_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(DETAIL_URL)}`;

    try {
        const response = await axios.get(PROXY_URL);

        if (response.status === 200) {
            const data = JSON.parse(response.data.contents);
            console.log(data)
            return data;
        } else {
            toast.error('Network response was not ok.');
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        toast.error("Error fetching podcast detail");
        throw error;
    }
};

