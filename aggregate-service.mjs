import express from 'express';
import bodyParser from 'body-parser';
import { getSummonerBySummonerName } from './services/summoner-service';
import { ACS_HOST, ACS_PLAYER_HISTORY_PATH } from './constants';

const app = express();
const port = 3000;

app.get('/summoner/:summonerName', (req, res) => {
    const summonerName = req.params.summonerName;


});

async function getMatchesForSummonerName(summonerName) {
    const summoner = await getSummonerBySummonerName(summonerName);
    const { accountId } = summoner;
    const URL = 
}

app.use(bodyParser.json());
app.listen(port, () => console.log(`app listening on port ${port}`));