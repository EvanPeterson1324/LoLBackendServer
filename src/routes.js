import { Router } from 'express';
import Axios from 'axios';
const routes = Router();

// Headers, including our API token.
const headers = {
    "X-Riot-Token": process.env.RIOT_API_TOKEN,
}

// Middleware to set headers and allow CORS
routes.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Filler route
routes.use('/', (req, res, next) => {
  next();
});

// A route to welcome users to my API! 
routes.get('/api', (req, res) => {
  res.render('index', { title: 'Progress.gg API!' });
});

/**
 * This route will get the summoner account info, by a given summoner name.
 * @param summonerName
 */
routes.get('/api/getSummonerByName/:summonerName', (req, res) => {
  const summonerName = req.params.summonerName;
  Axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summonerName}`, {
    headers,
  })
  .then((response) => { res.json(response.data);})
  .catch(err => res.json(err.data));
});

/**
 * This route will get us detailed stats of a particular game, found by a given matchId.
 * @param matchId
 */
routes.get('/api/getMatchDataByMatchId/:matchId', (req, res) => {
  const matchId = req.params.matchId;
  Axios.get(`https://na1.api.riotgames.com/lol/match/v3/matches/${matchId}`, {
    headers,
  })
    .then(response => res.json(response.data))
    .catch(err => res.json(err));
});

/**
 * This Route will get the 20 most recent ranked SOLO/DUO games, found by a given playerId.
 * @param id
 */
routes.get('/api/getRecentRankedGamesBySummonerId/:summonerId', (req, res) => {
  const summonerId = req.params.summonerId;
  const RANKED_SOLO = 420;
  Axios.get(`https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${summonerId}?queue=${RANKED_SOLO}`, {
    headers,
  })
    .then(response => res.json(response.data))
    .catch(err => res.json(err));
});

/**
 * Gets the rune pages for a given summoner id
 * @param summonerId
 */
routes.get('/api/getRunePagesBySummonerId/:summonerId', (req, res) => {
  const summonerId = req.params.summonerId;
  Axios.get(`https://na1.api.riotgames.com/lol/platform/v3/runes/by-summoner/${summonerId}`, {
    headers,
  })
    .then(response => res.json(response.data))
    .catch(err => res.json(err));
});

export default routes;
