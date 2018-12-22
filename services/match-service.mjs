import axios from 'axios';
import { API_KEY, HOST } from '../constants';

const PATH = 'lol/match/v4/matches';

export async function getMatchByMatchId(matchId) {
    try {
        const REQUEST_URL = `${HOST}/${PATH}/${matchId}?api_key=${API_KEY}`;
        console.log(`REQUEST URL: ${REQUEST_URL}`);
        const match = await axios.get(REQUEST_URL);
        console.log('this one came first');
        return match;
    } catch(error) {
        console.log(`there was an error: ${error}`);
    }
}