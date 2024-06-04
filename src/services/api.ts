import axios from 'axios';
import { Entry } from './interfaces';
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

