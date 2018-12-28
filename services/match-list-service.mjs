import axios from 'axios';

const PATH = 'lol/match/v4/matches';

export async function getMatchByMatchId(matchId) {
    try {
        const REQUEST_URL = `${HOST}/${PATH}/${matchId}?api_key=${API_KEY}`;
        const match = await axios.get(REQUEST_URL);
        return match;
    } catch(error) {
        console.log(`getMatchByMatchId returned: ${error}`);
    }
}