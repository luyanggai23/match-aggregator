import { getMatchByMatchId } from './services/match-service';

let match = getMatchByMatchId('2935232909');
console.log(JSON.stringify(match));