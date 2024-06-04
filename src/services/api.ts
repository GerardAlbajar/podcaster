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

    try {
        const response = await axios.get(DETAIL_URL);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error('Network response was not ok.');
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        toast.error("Error fetching podcast detail");
        throw error;
    }
};

