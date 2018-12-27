import axios from 'axios';
import { API_KEY, HOST } from '../constants';

const PATH = 'lol/summoner/v3/by-name';

export async function getSummonerBySummonerName(summonerName) {
    try {
        const REQUEST_URL = `${HOST}/${PATH}/${summonerName}?api_key=${API_KEY}`;
        const match = await axios.get(REQUEST_URL);
        return match;
    } catch(error) {
        console.log(`getSummonerBySummonerName error: ${error}`);
    }
}