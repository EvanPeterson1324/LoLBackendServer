import { Router } from 'express';
import {
  Kindred,
  // REGIONS,
  // LIMITS,
  // METHOD_TYPES,
  QUEUE_TYPES,            // for matchlist query params
  // QUEUE_STRINGS,       // for master/challenger leagues query params
  // print                   // simple callback function that prints the error or data
} from 'kindred-api'

const k = new Kindred({ key: 'RGAPI-4819d46c-6e43-41bf-8a6d-b9b22038206d' });

const routes = Router();

routes.get('/', (req, res) => {
  res.render('index', { title: 'Progress.gg API!' });
});

routes.get('/api/getSummonerByName/:name', (req, res) => {
  const name = req.params.name;
  k.Summoner.get({ name })
    .then((playerData) => res.json({ playerData }))
    .catch((err) => res.json({ err }));
});

routes.get('/api/getMatchesByPlayerName/:name', (req, res) => {
const name = req.params.name;
const config = {
  name,
  options: {
    queue: [QUEUE_TYPES.TEAM_BUILDER_RANKED_SOLO, QUEUE_TYPES.RANKED_FLEX_SR]
  }
}
// Get matchlist of last 20 games by summoner name
k.Matchlist.recent(config)
  .then((matchData) => res.json({ matchData }))
  .catch((err) => res.json({ err }));
});

routes.get('/api/getMatchDataById/:id', (req, res) => {
  const matchId = Number.parseInt(req.params.id);
  k.Match.by.id(matchId)
    .then((matchData) => {
      res.json({ success: true, matchData });
    })
    .catch((err) => res.json({ err }));
});

// routes.get('/api/getPlayerRunePagesByName/:name', (req, res) => {

// });

// What match data looks like
// {
//   playerData: {
//     matches: [
//       {
//         platformId: "NA1",
//         gameId: 2572393151,
//         champion: 59,
//         queue: 420,
//         season: 9,
//         timestamp: 1502645194671,
//         role: "NONE",
//         lane: "JUNGLE"
//       },
//       {
//         platformId: "NA1",
//         gameId: 2572371543,
//         champion: 254,
//         queue: 420,
//         season: 9,
//         timestamp: 1502642648017,
//         role: "NONE",
//         lane: "JUNGLE"
//       },
//       {
//         platformId: "NA1",
//         gameId: 2570928466,
//         champion: 72,
//         queue: 420,
//         season: 9,
//         timestamp: 1502503409094,
//         role: "NONE",
//         lane: "JUNGLE"
//       },
//     ]
//   }
// }

// WHAT THE GAME DATA LOOKS LIKE
// {
//   matchData: {
//     gameId: 2572393151,
//       platformId: "NA1",
//         gameCreation: 1502645194671,
//           gameDuration: 2737,
//             queueId: 420,
//               mapId: 11,
//                 seasonId: 9,
//                   gameVersion: "7.16.198.5100",
//                     gameMode: "CLASSIC",
//                       gameType: "MATCHED_GAME",
//                         teams: [
//                           {
//                             teamId: 100,
//                             win: "Fail",
//                             firstBlood: true,
//                             firstTower: true,
//                             firstInhibitor: true,
//                             firstBaron: false,
//                             firstDragon: false,
//                             firstRiftHerald: true,
//                             towerKills: 5,
//                             inhibitorKills: 1,
//                             baronKills: 1,
//                             dragonKills: 0,
//                             vilemawKills: 0,
//                             riftHeraldKills: 1,
//                             dominionVictoryScore: 0,
//                             bans: [
//                               {
//                                 championId: 238,
//                                 pickTurn: 1
//                               },
//                               {
//                                 championId: 51,
//                                 pickTurn: 2
//                               },
//                               {
//                                 championId: 40,
//                                 pickTurn: 3
//                               },
//                               {
//                                 championId: 57,
//                                 pickTurn: 4
//                               },
//                               {
//                                 championId: 240,
//                                 pickTurn: 5
//                               }
//                             ]
//                           },
//                           {
//                             teamId: 200,
//                             win: "Win",
//                             firstBlood: false,
//                             firstTower: false,
//                             firstInhibitor: false,
//                             firstBaron: true,
//                             firstDragon: true,
//                             firstRiftHerald: false,
//                             towerKills: 10,
//                             inhibitorKills: 2,
//                             baronKills: 2,
//                             dragonKills: 5,
//                             vilemawKills: 0,
//                             riftHeraldKills: 0,
//                             dominionVictoryScore: 0,
//                             bans: [
//                               {
//                                 championId: 238,
//                                 pickTurn: 6
//                               },
//                               {
//                                 championId: 119,
//                                 pickTurn: 7
//                               },
//                               {
//                                 championId: 57,
//                                 pickTurn: 8
//                               },
//                               {
//                                 championId: 131,
//                                 pickTurn: 9
//                               },
//                               {
//                                 championId: 5,
//                                 pickTurn: 10
//                               }
//                             ]
//                           }
//                         ],
//                           participants: [
//                             {
//                               participantId: 1,
//                               teamId: 100,
//                               championId: 18,
//                               spell1Id: 4,
//                               spell2Id: 7,
//                               masteries: [
//                                 {
//                                   masteryId: 6111,
//                                   rank: 5
//                                 },
//                                 {
//                                   masteryId: 6122,
//                                   rank: 1
//                                 },
//                                 {
//                                   masteryId: 6131,
//                                   rank: 5
//                                 },
//                                 {
//                                   masteryId: 6141,
//                                   rank: 1
//                                 },
//                                 {
//                                   masteryId: 6151,
//                                   rank: 5
//                                 },
//                                 {
//                                   masteryId: 6162,
//                                   rank: 1
//                                 },
//                                 {
//                                   masteryId: 6312,
//                                   rank: 5
//                                 },
//                                 {
//                                   masteryId: 6323,
//                                   rank: 1
//                                 },
//                                 {
//                                   masteryId: 6331,
//                                   rank: 5
//                                 },
//                                 {
//                                   masteryId: 6343,
//                                   rank: 1
//                                 }
//                               ],
//                               runes: [
//                                 {
//                                   runeId: 5247,
//                                   rank: 9
//                                 },
//                                 {
//                                   runeId: 5290,
//                                   rank: 9
//                                 },
//                                 {
//                                   runeId: 5317,
//                                   rank: 9
//                                 },
//                                 {
//                                   runeId: 5337,
//                                   rank: 3
//                                 }
//                               ],
//                               highestAchievedSeasonTier: "UNRANKED",
//                               stats: {
//                                 participantId: 1,
//                                 win: false,
//                                 item0: 3036,
//                                 item1: 3087,
//                                 item2: 3031,
//                                 item3: 3072,
//                                 item4: 3006,
//                                 item5: 3046,
//                                 item6: 3340,
//                                 kills: 12,
//                                 deaths: 10,
//                                 assists: 12,
//                                 largestKillingSpree: 8,
//                                 largestMultiKill: 2,
//                                 killingSprees: 2,
//                                 longestTimeSpentLiving: 864,
//                                 doubleKills: 3,
//                                 tripleKills: 0,
//                                 quadraKills: 0,
//                                 pentaKills: 0,
//                                 unrealKills: 0,
//                                 totalDamageDealt: 311372,
//                                 magicDamageDealt: 67317,
//                                 physicalDamageDealt: 241540,
//                                 trueDamageDealt: 2513,
//                                 largestCriticalStrike: 1060,
//                                 totalDamageDealtToChampions: 36007,
//                                 magicDamageDealtToChampions: 3855,
//                                 physicalDamageDealtToChampions: 31482,
//                                 trueDamageDealtToChampions: 669,
//                                 totalHeal: 7157,
//                                 totalUnitsHealed: 4,
//                                 damageSelfMitigated: 28530,
//                                 damageDealtToObjectives: 10584,
//                                 damageDealtToTurrets: 3831,
//                                 visionScore: 6,
//                                 timeCCingOthers: 10,
//                                 totalDamageTaken: 38699,
//                                 magicalDamageTaken: 19963,
//                                 physicalDamageTaken: 18302,
//                                 trueDamageTaken: 433,
//                                 goldEarned: 19990,
//                                 goldSpent: 19900,
//                                 turretKills: 1,
//                                 inhibitorKills: 0,
//                                 totalMinionsKilled: 310,
//                                 neutralMinionsKilled: 27,
//                                 neutralMinionsKilledTeamJungle: 11,
//                                 neutralMinionsKilledEnemyJungle: 1,
//                                 totalTimeCrowdControlDealt: 311,
//                                 champLevel: 18,
//                                 visionWardsBoughtInGame: 0,
//                                 sightWardsBoughtInGame: 0,
//                                 wardsPlaced: 7,
//                                 wardsKilled: 0,
//                                 firstBloodKill: false,
//                                 firstBloodAssist: false,
//                                 firstTowerKill: false,
//                                 firstTowerAssist: false,
//                                 firstInhibitorKill: false,
//                                 firstInhibitorAssist: false,
//                                 combatPlayerScore: 0,
//                                 objectivePlayerScore: 0,
//                                 totalPlayerScore: 0,
//                                 totalScoreRank: 0,
//                                 playerScore0: 0,
//                                 playerScore1: 0,
//                                 playerScore2: 0,
//                                 playerScore3: 0,
//                                 playerScore4: 0,
//                                 playerScore5: 0,
//                                 playerScore6: 0,
//                                 playerScore7: 0,
//                                 playerScore8: 0,
//                                 playerScore9: 0
//                               },
//                               timeline: {
//                                 participantId: 1,
//                                 creepsPerMinDeltas: {
//                                   10-20: 6,
//                                   0-10: 5.300000000000001,
//                                   30-end: 8.066666666666666,
//                                   20-30: 7.6
// },
//                                 xpPerMinDeltas: {
//                                   10-20: 316.9,
//                                   0-10: 251.9,
//                                   30-end: 840.7333333333335,
//                                   20-30: 639.6
// },
//                                 goldPerMinDeltas: {
//                                   10-20: 374.5,
//                                   0-10: 237.9,
//                                   30-end: 557,
//                                   20-30: 493.5
// },
//                                 csDiffPerMinDeltas: {
//                                   10-20: 0.19999999999999973,
//                                   0-10: -0.34999999999999964,
//                                 30-end: 2.1,
//                                 20-30: 0.7999999999999998
// },
//                               xpDiffPerMinDeltas: {
//                                 10-20: -97.05000000000001,
//                               0-10: -15.799999999999983,
//                             30 - end: 91.10000000000002,
//                             20 - 30: 93.59999999999997
// },
//   damageTakenPerMinDeltas: {
//     10 - 20: 582.6,
//       0 - 10: 354.2,
//         30 - end: 1285.8,
//           20 - 30: 1004.4000000000001
//   },
//   damageTakenDiffPerMinDeltas: {
//     10 - 20: 53.59999999999991,
//       0 - 10: 92.60000000000002,
//         30 - end: 398.00000000000017,
//           20 - 30: 188.15000000000003
//   },
//   role: "DUO",
//     lane: "BOTTOM"
// }
// },
// {
//   participantId: 2,
//     teamId: 100,
//       championId: 39,
//         spell1Id: 4,
//           spell2Id: 12,
//             masteries: [
//               {
//                 masteryId: 6111,
//                 rank: 5
//               },
//               {
//                 masteryId: 6121,
//                 rank: 1
//               },
//               {
//                 masteryId: 6131,
//                 rank: 3
//               },
//               {
//                 masteryId: 6134,
//                 rank: 2
//               },
//               {
//                 masteryId: 6143,
//                 rank: 1
//               },
//               {
//                 masteryId: 6151,
//                 rank: 5
//               },
//               {
//                 masteryId: 6162,
//                 rank: 1
//               },
//               {
//                 masteryId: 6212,
//                 rank: 5
//               },
//               {
//                 masteryId: 6223,
//                 rank: 1
//               },
//               {
//                 masteryId: 6231,
//                 rank: 5
//               },
//               {
//                 masteryId: 6241,
//                 rank: 1
//               }
//             ],
//               runes: [
//                 {
//                   runeId: 5245,
//                   rank: 8
//                 },
//                 {
//                   runeId: 5251,
//                   rank: 1
//                 },
//                 {
//                   runeId: 5290,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5317,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5337,
//                   rank: 3
//                 }
//               ],
//                 highestAchievedSeasonTier: "GOLD",
//                   stats: {
//     participantId: 2,
//       win: false,
//         item0: 3194,
//           item1: 3155,
//             item2: 3748,
//               item3: 3047,
//                 item4: 3078,
//                   item5: 3026,
//                     item6: 3363,
//                       kills: 12,
//                         deaths: 7,
//                           assists: 12,
//                             largestKillingSpree: 6,
//                               largestMultiKill: 1,
//                                 killingSprees: 3,
//                                   longestTimeSpentLiving: 713,
//                                     doubleKills: 0,
//                                       tripleKills: 0,
//                                         quadraKills: 0,
//                                           pentaKills: 0,
//                                             unrealKills: 0,
//                                               totalDamageDealt: 187803,
//                                                 magicDamageDealt: 4387,
//                                                   physicalDamageDealt: 171503,
//                                                     trueDamageDealt: 11912,
//                                                       largestCriticalStrike: 327,
//                                                         totalDamageDealtToChampions: 34406,
//                                                           magicDamageDealtToChampions: 3294,
//                                                             physicalDamageDealtToChampions: 26505,
//                                                               trueDamageDealtToChampions: 4607,
//                                                                 totalHeal: 14222,
//                                                                   totalUnitsHealed: 1,
//                                                                     damageSelfMitigated: 49141,
//                                                                       damageDealtToObjectives: 6402,
//                                                                         damageDealtToTurrets: 2462,
//                                                                           visionScore: 46,
//                                                                             timeCCingOthers: 28,
//                                                                               totalDamageTaken: 50470,
//                                                                                 magicalDamageTaken: 17050,
//                                                                                   physicalDamageTaken: 32686,
//                                                                                     trueDamageTaken: 734,
//                                                                                       goldEarned: 17700,
//                                                                                         goldSpent: 17433,
//                                                                                           turretKills: 2,
//                                                                                             inhibitorKills: 0,
//                                                                                               totalMinionsKilled: 245,
//                                                                                                 neutralMinionsKilled: 8,
//                                                                                                   neutralMinionsKilledTeamJungle: 3,
//                                                                                                     neutralMinionsKilledEnemyJungle: 3,
//                                                                                                       totalTimeCrowdControlDealt: 119,
//                                                                                                         champLevel: 18,
//                                                                                                           visionWardsBoughtInGame: 2,
//                                                                                                             sightWardsBoughtInGame: 0,
//                                                                                                               wardsPlaced: 18,
//                                                                                                                 wardsKilled: 2,
//                                                                                                                   firstBloodKill: false,
//                                                                                                                     firstBloodAssist: false,
//                                                                                                                       firstTowerKill: false,
//                                                                                                                         firstTowerAssist: false,
//                                                                                                                           firstInhibitorKill: false,
//                                                                                                                             firstInhibitorAssist: true,
//                                                                                                                               combatPlayerScore: 0,
//                                                                                                                                 objectivePlayerScore: 0,
//                                                                                                                                   totalPlayerScore: 0,
//                                                                                                                                     totalScoreRank: 0,
//                                                                                                                                       playerScore0: 0,
//                                                                                                                                         playerScore1: 0,
//                                                                                                                                           playerScore2: 0,
//                                                                                                                                             playerScore3: 0,
//                                                                                                                                               playerScore4: 0,
//                                                                                                                                                 playerScore5: 0,
//                                                                                                                                                   playerScore6: 0,
//                                                                                                                                                     playerScore7: 0,
//                                                                                                                                                       playerScore8: 0,
//                                                                                                                                                         playerScore9: 0
//   },
//   timeline: {
//     participantId: 2,
//       creepsPerMinDeltas: {
//       10 - 20: 8.600000000000001,
//         0 - 10: 4.3,
//           30 - end: 3.533333333333333,
//             20 - 30: 6.1
//     },
//     xpPerMinDeltas: {
//       10 - 20: 502.6,
//         0 - 10: 388.5,
//           30 - end: 473.6000000000001,
//             20 - 30: 566.5
//     },
//     goldPerMinDeltas: {
//       10 - 20: 369.29999999999995,
//         0 - 10: 216.6,
//           30 - end: 367.8666666666666,
//             20 - 30: 566.9
//     },
//     csDiffPerMinDeltas: {
//       10 - 20: -1.5999999999999996,
//         0 - 10: -2.5,
//           30 - end: -2.6,
//             20 - 30: -2.7
//     },
//     xpDiffPerMinDeltas: {
//       10 - 20: -58.60000000000002,
//         0 - 10: -103.20000000000002,
//           30 - end: -150.86666666666667,
//             20 - 30: -140.79999999999995
//     },
//     damageTakenPerMinDeltas: {
//       10 - 20: 534.5,
//         0 - 10: 486.6,
//           30 - end: 1683.2666666666667,
//             20 - 30: 1238.4
//     },
//     damageTakenDiffPerMinDeltas: {
//       10 - 20: 355.6,
//         0 - 10: 116.49999999999997,
//           30 - end: 404.6666666666667,
//             20 - 30: 334.09999999999997
//     },
//     role: "SOLO",
//       lane: "TOP"
//   }
// },
// {
//   participantId: 3,
//     teamId: 100,
//       championId: 44,
//         spell1Id: 3,
//           spell2Id: 4,
//             masteries: [
//               {
//                 masteryId: 6211,
//                 rank: 5
//               },
//               {
//                 masteryId: 6221,
//                 rank: 1
//               },
//               {
//                 masteryId: 6232,
//                 rank: 5
//               },
//               {
//                 masteryId: 6242,
//                 rank: 1
//               },
//               {
//                 masteryId: 6251,
//                 rank: 5
//               },
//               {
//                 masteryId: 6262,
//                 rank: 1
//               },
//               {
//                 masteryId: 6311,
//                 rank: 5
//               },
//               {
//                 masteryId: 6322,
//                 rank: 1
//               },
//               {
//                 masteryId: 6332,
//                 rank: 5
//               },
//               {
//                 masteryId: 6342,
//                 rank: 1
//               }
//             ],
//               runes: [
//                 {
//                   runeId: 5245,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5289,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5317,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5335,
//                   rank: 3
//                 }
//               ],
//                 highestAchievedSeasonTier: "GOLD",
//                   stats: {
//     participantId: 3,
//       win: false,
//         item0: 2045,
//           item1: 3190,
//             item2: 3401,
//               item3: 3050,
//                 item4: 3504,
//                   item5: 3047,
//                     item6: 3364,
//                       kills: 1,
//                         deaths: 12,
//                           assists: 29,
//                             largestKillingSpree: 0,
//                               largestMultiKill: 1,
//                                 killingSprees: 0,
//                                   longestTimeSpentLiving: 300,
//                                     doubleKills: 0,
//                                       tripleKills: 0,
//                                         quadraKills: 0,
//                                           pentaKills: 0,
//                                             unrealKills: 0,
//                                               totalDamageDealt: 32764,
//                                                 magicDamageDealt: 13705,
//                                                   physicalDamageDealt: 10409,
//                                                     trueDamageDealt: 8648,
//                                                       largestCriticalStrike: 0,
//                                                         totalDamageDealtToChampions: 9443,
//                                                           magicDamageDealtToChampions: 7023,
//                                                             physicalDamageDealtToChampions: 2419,
//                                                               trueDamageDealtToChampions: 0,
//                                                                 totalHeal: 19078,
//                                                                   totalUnitsHealed: 5,
//                                                                     damageSelfMitigated: 70163,
//                                                                       damageDealtToObjectives: 796,
//                                                                         damageDealtToTurrets: 476,
//                                                                           visionScore: 81,
//                                                                             timeCCingOthers: 50,
//                                                                               totalDamageTaken: 41067,
//                                                                                 magicalDamageTaken: 17475,
//                                                                                   physicalDamageTaken: 23256,
//                                                                                     trueDamageTaken: 336,
//                                                                                       goldEarned: 13631,
//                                                                                         goldSpent: 12975,
//                                                                                           turretKills: 0,
//                                                                                             inhibitorKills: 0,
//                                                                                               totalMinionsKilled: 63,
//                                                                                                 neutralMinionsKilled: 0,
//                                                                                                   neutralMinionsKilledTeamJungle: 0,
//                                                                                                     neutralMinionsKilledEnemyJungle: 0,
//                                                                                                       totalTimeCrowdControlDealt: 118,
//                                                                                                         champLevel: 17,
//                                                                                                           visionWardsBoughtInGame: 6,
//                                                                                                             sightWardsBoughtInGame: 0,
//                                                                                                               wardsPlaced: 46,
//                                                                                                                 wardsKilled: 6,
//                                                                                                                   firstBloodKill: false,
//                                                                                                                     firstBloodAssist: false,
//                                                                                                                       firstTowerKill: false,
//                                                                                                                         firstTowerAssist: false,
//                                                                                                                           firstInhibitorKill: false,
//                                                                                                                             firstInhibitorAssist: true,
//                                                                                                                               combatPlayerScore: 0,
//                                                                                                                                 objectivePlayerScore: 0,
//                                                                                                                                   totalPlayerScore: 0,
//                                                                                                                                     totalScoreRank: 0,
//                                                                                                                                       playerScore0: 0,
//                                                                                                                                         playerScore1: 0,
//                                                                                                                                           playerScore2: 0,
//                                                                                                                                             playerScore3: 0,
//                                                                                                                                               playerScore4: 0,
//                                                                                                                                                 playerScore5: 0,
//                                                                                                                                                   playerScore6: 0,
//                                                                                                                                                     playerScore7: 0,
//                                                                                                                                                       playerScore8: 0,
//                                                                                                                                                         playerScore9: 0
//   },
//   timeline: {
//     participantId: 3,
//       creepsPerMinDeltas: {
//       10 - 20: 2,
//         0 - 10: 1.7999999999999998,
//           30 - end: 1.0666666666666667,
//             20 - 30: 0.9
//     },
//     xpPerMinDeltas: {
//       10 - 20: 360,
//         0 - 10: 284.3,
//           30 - end: 416.93333333333334,
//             20 - 30: 484.6
//     },
//     goldPerMinDeltas: {
//       10 - 20: 296.6,
//         0 - 10: 180,
//           30 - end: 315.8666666666666,
//             20 - 30: 351.4
//     },
//     csDiffPerMinDeltas: {
//       10 - 20: 0.19999999999999973,
//         0 - 10: -0.34999999999999964,
//           30 - end: 2.1,
//             20 - 30: 0.7999999999999998
//     },
//     xpDiffPerMinDeltas: {
//       10 - 20: -97.05000000000001,
//         0 - 10: -15.799999999999983,
//           30 - end: 91.10000000000002,
//             20 - 30: 93.59999999999997
//     },
//     damageTakenPerMinDeltas: {
//       10 - 20: 773.5,
//         0 - 10: 423.20000000000005,
//           30 - end: 1140.0666666666666,
//             20 - 30: 1199.9
//     },
//     damageTakenDiffPerMinDeltas: {
//       10 - 20: 53.59999999999991,
//         0 - 10: 92.60000000000002,
//           30 - end: 398.00000000000017,
//             20 - 30: 188.15000000000003
//     },
//     role: "DUO",
//       lane: "BOTTOM"
//   }
// },
// {
//   participantId: 4,
//     teamId: 100,
//       championId: 1,
//         spell1Id: 1,
//           spell2Id: 4,
//             masteries: [
//               {
//                 masteryId: 6114,
//                 rank: 5
//               },
//               {
//                 masteryId: 6122,
//                 rank: 1
//               },
//               {
//                 masteryId: 6134,
//                 rank: 5
//               },
//               {
//                 masteryId: 6142,
//                 rank: 1
//               },
//               {
//                 masteryId: 6312,
//                 rank: 5
//               },
//               {
//                 masteryId: 6322,
//                 rank: 1
//               },
//               {
//                 masteryId: 6331,
//                 rank: 5
//               },
//               {
//                 masteryId: 6343,
//                 rank: 1
//               },
//               {
//                 masteryId: 6351,
//                 rank: 5
//               },
//               {
//                 masteryId: 6362,
//                 rank: 1
//               }
//             ],
//               runes: [
//                 {
//                   runeId: 5273,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5289,
//                   rank: 1
//                 },
//                 {
//                   runeId: 5296,
//                   rank: 6
//                 },
//                 {
//                   runeId: 5297,
//                   rank: 2
//                 },
//                 {
//                   runeId: 5317,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5357,
//                   rank: 3
//                 }
//               ],
//                 highestAchievedSeasonTier: "GOLD",
//                   stats: {
//     participantId: 4,
//       win: false,
//         item0: 3135,
//           item1: 3102,
//             item2: 3165,
//               item3: 3020,
//                 item4: 3285,
//                   item5: 1052,
//                     item6: 3340,
//                       kills: 6,
//                         deaths: 12,
//                           assists: 16,
//                             largestKillingSpree: 2,
//                               largestMultiKill: 1,
//                                 killingSprees: 1,
//                                   longestTimeSpentLiving: 633,
//                                     doubleKills: 0,
//                                       tripleKills: 0,
//                                         quadraKills: 0,
//                                           pentaKills: 0,
//                                             unrealKills: 0,
//                                               totalDamageDealt: 172078,
//                                                 magicDamageDealt: 158825,
//                                                   physicalDamageDealt: 13070,
//                                                     trueDamageDealt: 182,
//                                                       largestCriticalStrike: 81,
//                                                         totalDamageDealtToChampions: 30132,
//                                                           magicDamageDealtToChampions: 29040,
//                                                             physicalDamageDealtToChampions: 909,
//                                                               trueDamageDealtToChampions: 182,
//                                                                 totalHeal: 2045,
//                                                                   totalUnitsHealed: 1,
//                                                                     damageSelfMitigated: 13682,
//                                                                       damageDealtToObjectives: 3670,
//                                                                         damageDealtToTurrets: 2329,
//                                                                           visionScore: 14,
//                                                                             timeCCingOthers: 37,
//                                                                               totalDamageTaken: 27654,
//                                                                                 magicalDamageTaken: 14193,
//                                                                                   physicalDamageTaken: 13460,
//                                                                                     trueDamageTaken: 0,
//                                                                                       goldEarned: 16125,
//                                                                                         goldSpent: 14660,
//                                                                                           turretKills: 0,
//                                                                                             inhibitorKills: 0,
//                                                                                               totalMinionsKilled: 217,
//                                                                                                 neutralMinionsKilled: 2,
//                                                                                                   neutralMinionsKilledTeamJungle: 1,
//                                                                                                     neutralMinionsKilledEnemyJungle: 0,
//                                                                                                       totalTimeCrowdControlDealt: 146,
//                                                                                                         champLevel: 18,
//                                                                                                           visionWardsBoughtInGame: 1,
//                                                                                                             sightWardsBoughtInGame: 0,
//                                                                                                               wardsPlaced: 12,
//                                                                                                                 wardsKilled: 0,
//                                                                                                                   firstBloodKill: true,
//                                                                                                                     firstBloodAssist: false,
//                                                                                                                       firstTowerKill: false,
//                                                                                                                         firstTowerAssist: true,
//                                                                                                                           firstInhibitorKill: false,
//                                                                                                                             firstInhibitorAssist: true,
//                                                                                                                               combatPlayerScore: 0,
//                                                                                                                                 objectivePlayerScore: 0,
//                                                                                                                                   totalPlayerScore: 0,
//                                                                                                                                     totalScoreRank: 0,
//                                                                                                                                       playerScore0: 0,
//                                                                                                                                         playerScore1: 0,
//                                                                                                                                           playerScore2: 0,
//                                                                                                                                             playerScore3: 0,
//                                                                                                                                               playerScore4: 0,
//                                                                                                                                                 playerScore5: 0,
//                                                                                                                                                   playerScore6: 0,
//                                                                                                                                                     playerScore7: 0,
//                                                                                                                                                       playerScore8: 0,
//                                                                                                                                                         playerScore9: 0
//   },
//   timeline: {
//     participantId: 4,
//       creepsPerMinDeltas: {
//       10 - 20: 4.7,
//         0 - 10: 4.9,
//           30 - end: 4.333333333333333,
//             20 - 30: 5.6
//     },
//     xpPerMinDeltas: {
//       10 - 20: 418,
//         0 - 10: 401.9,
//           30 - end: 455.26666666666665,
//             20 - 30: 542
//     },
//     goldPerMinDeltas: {
//       10 - 20: 377.20000000000005,
//         0 - 10: 241.39999999999998,
//           30 - end: 345.06666666666666,
//             20 - 30: 416.2
//     },
//     csDiffPerMinDeltas: {
//       10 - 20: -0.8,
//         0 - 10: -2.4000000000000004,
//           30 - end: -0.7333333333333331,
//             20 - 30: 1.7000000000000002
//     },
//     xpDiffPerMinDeltas: {
//       10 - 20: -107,
//         0 - 10: -27.700000000000017,
//           30 - end: -119.33333333333336,
//             20 - 30: 87.59999999999997
//     },
//     damageTakenPerMinDeltas: {
//       10 - 20: 631.8,
//         0 - 10: 306.1,
//           30 - end: 748.6666666666666,
//             20 - 30: 541.4
//     },
//     damageTakenDiffPerMinDeltas: {
//       10 - 20: -335.8,
//         0 - 10: -50.69999999999999,
//           30 - end: -271.53333333333336,
//             20 - 30: -661.0999999999999
//     },
//     role: "SOLO",
//       lane: "MIDDLE"
//   }
// },
// {
//   participantId: 5,
//     teamId: 100,
//       championId: 64,
//         spell1Id: 4,
//           spell2Id: 11,
//             masteries: [
//               {
//                 masteryId: 6114,
//                 rank: 5
//               },
//               {
//                 masteryId: 6121,
//                 rank: 1
//               },
//               {
//                 masteryId: 6134,
//                 rank: 5
//               },
//               {
//                 masteryId: 6142,
//                 rank: 1
//               },
//               {
//                 masteryId: 6312,
//                 rank: 5
//               },
//               {
//                 masteryId: 6321,
//                 rank: 1
//               },
//               {
//                 masteryId: 6331,
//                 rank: 5
//               },
//               {
//                 masteryId: 6341,
//                 rank: 1
//               },
//               {
//                 masteryId: 6351,
//                 rank: 5
//               },
//               {
//                 masteryId: 6362,
//                 rank: 1
//               }
//             ],
//               runes: [
//                 {
//                   runeId: 5245,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5289,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5317,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5337,
//                   rank: 3
//                 }
//               ],
//                 highestAchievedSeasonTier: "GOLD",
//                   stats: {
//     participantId: 5,
//       win: false,
//         item0: 3071,
//           item1: 1408,
//             item2: 3147,
//               item3: 3047,
//                 item4: 3156,
//                   item5: 3026,
//                     item6: 3340,
//                       kills: 13,
//                         deaths: 8,
//                           assists: 14,
//                             largestKillingSpree: 5,
//                               largestMultiKill: 2,
//                                 killingSprees: 4,
//                                   longestTimeSpentLiving: 876,
//                                     doubleKills: 1,
//                                       tripleKills: 0,
//                                         quadraKills: 0,
//                                           pentaKills: 0,
//                                             unrealKills: 0,
//                                               totalDamageDealt: 247638,
//                                                 magicDamageDealt: 61369,
//                                                   physicalDamageDealt: 162959,
//                                                     trueDamageDealt: 23310,
//                                                       largestCriticalStrike: 0,
//                                                         totalDamageDealtToChampions: 31390,
//                                                           magicDamageDealtToChampions: 6346,
//                                                             physicalDamageDealtToChampions: 24281,
//                                                               trueDamageDealtToChampions: 762,
//                                                                 totalHeal: 13262,
//                                                                   totalUnitsHealed: 1,
//                                                                     damageSelfMitigated: 56517,
//                                                                       damageDealtToObjectives: 26342,
//                                                                         damageDealtToTurrets: 4045,
//                                                                           visionScore: 53,
//                                                                             timeCCingOthers: 35,
//                                                                               totalDamageTaken: 50343,
//                                                                                 magicalDamageTaken: 19521,
//                                                                                   physicalDamageTaken: 30500,
//                                                                                     trueDamageTaken: 322,
//                                                                                       goldEarned: 18164,
//                                                                                         goldSpent: 17000,
//                                                                                           turretKills: 2,
//                                                                                             inhibitorKills: 1,
//                                                                                               totalMinionsKilled: 75,
//                                                                                                 neutralMinionsKilled: 121,
//                                                                                                   neutralMinionsKilledTeamJungle: 80,
//                                                                                                     neutralMinionsKilledEnemyJungle: 21,
//                                                                                                       totalTimeCrowdControlDealt: 980,
//                                                                                                         champLevel: 18,
//                                                                                                           visionWardsBoughtInGame: 2,
//                                                                                                             sightWardsBoughtInGame: 0,
//                                                                                                               wardsPlaced: 31,
//                                                                                                                 wardsKilled: 5,
//                                                                                                                   firstBloodKill: false,
//                                                                                                                     firstBloodAssist: false,
//                                                                                                                       firstTowerKill: true,
//                                                                                                                         firstTowerAssist: false,
//                                                                                                                           firstInhibitorKill: true,
//                                                                                                                             firstInhibitorAssist: false,
//                                                                                                                               combatPlayerScore: 0,
//                                                                                                                                 objectivePlayerScore: 0,
//                                                                                                                                   totalPlayerScore: 0,
//                                                                                                                                     totalScoreRank: 0,
//                                                                                                                                       playerScore0: 0,
//                                                                                                                                         playerScore1: 0,
//                                                                                                                                           playerScore2: 0,
//                                                                                                                                             playerScore3: 0,
//                                                                                                                                               playerScore4: 0,
//                                                                                                                                                 playerScore5: 0,
//                                                                                                                                                   playerScore6: 0,
//                                                                                                                                                     playerScore7: 0,
//                                                                                                                                                       playerScore8: 0,
//                                                                                                                                                         playerScore9: 0
//   },
//   timeline: {
//     participantId: 5,
//       creepsPerMinDeltas: {
//       10 - 20: 1.5,
//         0 - 10: 1.4,
//           30 - end: 1.2666666666666668,
//             20 - 30: 2.7
//     },
//     xpPerMinDeltas: {
//       10 - 20: 571.9000000000001,
//         0 - 10: 438.9,
//           30 - end: 395.8,
//             20 - 30: 503.1
//     },
//     goldPerMinDeltas: {
//       10 - 20: 558.8,
//         0 - 10: 319.4,
//           30 - end: 264.6666666666667,
//             20 - 30: 483.6
//     },
//     csDiffPerMinDeltas: {
//       10 - 20: -2.8000000000000003,
//         0 - 10: 1.4,
//           30 - end: -2.5999999999999996,
//             20 - 30: -0.7000000000000002
//     },
//     xpDiffPerMinDeltas: {
//       10 - 20: -16.099999999999966,
//         0 - 10: 170,
//           30 - end: -225.66666666666666,
//             20 - 30: -96.60000000000002
//     },
//     damageTakenPerMinDeltas: {
//       10 - 20: 1054.6,
//         0 - 10: 667.6,
//           30 - end: 1479.5333333333335,
//             20 - 30: 1092.8
//     },
//     damageTakenDiffPerMinDeltas: {
//       10 - 20: 308.3999999999999,
//         0 - 10: 106.80000000000004,
//           30 - end: -136,
//             20 - 30: -18.700000000000045
//     },
//     role: "NONE",
//       lane: "JUNGLE"
//   }
// },
// {
//   participantId: 6,
//     teamId: 200,
//       championId: 412,
//         spell1Id: 4,
//           spell2Id: 3,
//             masteries: [
//               {
//                 masteryId: 6211,
//                 rank: 5
//               },
//               {
//                 masteryId: 6221,
//                 rank: 1
//               },
//               {
//                 masteryId: 6232,
//                 rank: 5
//               },
//               {
//                 masteryId: 6242,
//                 rank: 1
//               },
//               {
//                 masteryId: 6311,
//                 rank: 5
//               },
//               {
//                 masteryId: 6322,
//                 rank: 1
//               },
//               {
//                 masteryId: 6331,
//                 rank: 5
//               },
//               {
//                 masteryId: 6342,
//                 rank: 1
//               },
//               {
//                 masteryId: 6352,
//                 rank: 5
//               },
//               {
//                 masteryId: 6362,
//                 rank: 1
//               }
//             ],
//               runes: [
//                 {
//                   runeId: 5245,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5289,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5315,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5347,
//                   rank: 3
//                 }
//               ],
//                 highestAchievedSeasonTier: "PLATINUM",
//                   stats: {
//     participantId: 6,
//       win: true,
//         item0: 3401,
//           item1: 2045,
//             item2: 3190,
//               item3: 3109,
//                 item4: 3110,
//                   item5: 3117,
//                     item6: 3364,
//                       kills: 2,
//                         deaths: 9,
//                           assists: 27,
//                             largestKillingSpree: 2,
//                               largestMultiKill: 1,
//                                 killingSprees: 1,
//                                   longestTimeSpentLiving: 727,
//                                     doubleKills: 0,
//                                       tripleKills: 0,
//                                         quadraKills: 0,
//                                           pentaKills: 0,
//                                             unrealKills: 0,
//                                               totalDamageDealt: 31618,
//                                                 magicDamageDealt: 19358,
//                                                   physicalDamageDealt: 10511,
//                                                     trueDamageDealt: 1748,
//                                                       largestCriticalStrike: 0,
//                                                         totalDamageDealtToChampions: 10485,
//                                                           magicDamageDealtToChampions: 8305,
//                                                             physicalDamageDealtToChampions: 2180,
//                                                               trueDamageDealtToChampions: 0,
//                                                                 totalHeal: 1500,
//                                                                   totalUnitsHealed: 4,
//                                                                     damageSelfMitigated: 39534,
//                                                                       damageDealtToObjectives: 5273,
//                                                                         damageDealtToTurrets: 347,
//                                                                           visionScore: 99,
//                                                                             timeCCingOthers: 74,
//                                                                               totalDamageTaken: 35064,
//                                                                                 magicalDamageTaken: 13034,
//                                                                                   physicalDamageTaken: 21107,
//                                                                                     trueDamageTaken: 923,
//                                                                                       goldEarned: 13882,
//                                                                                         goldSpent: 12450,
//                                                                                           turretKills: 0,
//                                                                                             inhibitorKills: 0,
//                                                                                               totalMinionsKilled: 26,
//                                                                                                 neutralMinionsKilled: 0,
//                                                                                                   neutralMinionsKilledTeamJungle: 0,
//                                                                                                     neutralMinionsKilledEnemyJungle: 0,
//                                                                                                       totalTimeCrowdControlDealt: 686,
//                                                                                                         champLevel: 18,
//                                                                                                           visionWardsBoughtInGame: 2,
//                                                                                                             sightWardsBoughtInGame: 0,
//                                                                                                               wardsPlaced: 41,
//                                                                                                                 wardsKilled: 6,
//                                                                                                                   firstBloodKill: false,
//                                                                                                                     firstBloodAssist: false,
//                                                                                                                       firstTowerKill: false,
//                                                                                                                         firstTowerAssist: false,
//                                                                                                                           firstInhibitorKill: false,
//                                                                                                                             firstInhibitorAssist: false,
//                                                                                                                               combatPlayerScore: 0,
//                                                                                                                                 objectivePlayerScore: 0,
//                                                                                                                                   totalPlayerScore: 0,
//                                                                                                                                     totalScoreRank: 0,
//                                                                                                                                       playerScore0: 0,
//                                                                                                                                         playerScore1: 0,
//                                                                                                                                           playerScore2: 0,
//                                                                                                                                             playerScore3: 0,
//                                                                                                                                               playerScore4: 0,
//                                                                                                                                                 playerScore5: 0,
//                                                                                                                                                   playerScore6: 0,
//                                                                                                                                                     playerScore7: 0,
//                                                                                                                                                       playerScore8: 0,
//                                                                                                                                                         playerScore9: 0
//   },
//   timeline: {
//     participantId: 6,
//       creepsPerMinDeltas: {
//       10 - 20: 1,
//         0 - 10: 0.7,
//           30 - end: 0.5333333333333333,
//             20 - 30: 0.1
//     },
//     xpPerMinDeltas: {
//       10 - 20: 470.1,
//         0 - 10: 269.8,
//           30 - end: 501.3999999999999,
//             20 - 30: 293.9
//     },
//     goldPerMinDeltas: {
//       10 - 20: 329.1,
//         0 - 10: 166.1,
//           30 - end: 332.40000000000003,
//             20 - 30: 294.3
//     },
//     csDiffPerMinDeltas: {
//       10 - 20: -0.19999999999999973,
//         0 - 10: 0.34999999999999964,
//           30 - end: -2.1,
//             20 - 30: -0.7999999999999998
//     },
//     xpDiffPerMinDeltas: {
//       10 - 20: 97.05000000000001,
//         0 - 10: 15.799999999999983,
//           30 - end: -91.10000000000002,
//             20 - 30: -93.59999999999997
//     },
//     damageTakenPerMinDeltas: {
//       10 - 20: 634.6,
//         0 - 10: 338.5,
//           30 - end: 962.6,
//             20 - 30: 1017.6
//     },
//     damageTakenDiffPerMinDeltas: {
//       10 - 20: -53.59999999999991,
//         0 - 10: -92.60000000000002,
//           30 - end: -398.00000000000017,
//             20 - 30: -188.15000000000003
//     },
//     role: "DUO_SUPPORT",
//       lane: "BOTTOM"
//   }
// },
// {
//   participantId: 7,
//     teamId: 200,
//       championId: 81,
//         spell1Id: 4,
//           spell2Id: 7,
//             masteries: [
//               {
//                 masteryId: 6111,
//                 rank: 5
//               },
//               {
//                 masteryId: 6123,
//                 rank: 1
//               },
//               {
//                 masteryId: 6131,
//                 rank: 5
//               },
//               {
//                 masteryId: 6143,
//                 rank: 1
//               },
//               {
//                 masteryId: 6151,
//                 rank: 5
//               },
//               {
//                 masteryId: 6162,
//                 rank: 1
//               },
//               {
//                 masteryId: 6312,
//                 rank: 5
//               },
//               {
//                 masteryId: 6322,
//                 rank: 1
//               },
//               {
//                 masteryId: 6331,
//                 rank: 5
//               },
//               {
//                 masteryId: 6342,
//                 rank: 1
//               }
//             ],
//               runes: [
//                 {
//                   runeId: 5245,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5277,
//                   rank: 4
//                 },
//                 {
//                   runeId: 5289,
//                   rank: 5
//                 },
//                 {
//                   runeId: 5317,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5337,
//                   rank: 3
//                 }
//               ],
//                 highestAchievedSeasonTier: "PLATINUM",
//                   stats: {
//     participantId: 7,
//       win: true,
//         item0: 3026,
//           item1: 3078,
//             item2: 3042,
//               item3: 3072,
//                 item4: 3158,
//                   item5: 3046,
//                     item6: 3363,
//                       kills: 11,
//                         deaths: 7,
//                           assists: 15,
//                             largestKillingSpree: 4,
//                               largestMultiKill: 2,
//                                 killingSprees: 4,
//                                   longestTimeSpentLiving: 730,
//                                     doubleKills: 2,
//                                       tripleKills: 0,
//                                         quadraKills: 0,
//                                           pentaKills: 0,
//                                             unrealKills: 0,
//                                               totalDamageDealt: 268334,
//                                                 magicDamageDealt: 28900,
//                                                   physicalDamageDealt: 230710,
//                                                     trueDamageDealt: 8722,
//                                                       largestCriticalStrike: 861,
//                                                         totalDamageDealtToChampions: 39466,
//                                                           magicDamageDealtToChampions: 10565,
//                                                             physicalDamageDealtToChampions: 28643,
//                                                               trueDamageDealtToChampions: 258,
//                                                                 totalHeal: 4169,
//                                                                   totalUnitsHealed: 4,
//                                                                     damageSelfMitigated: 24512,
//                                                                       damageDealtToObjectives: 25967,
//                                                                         damageDealtToTurrets: 9006,
//                                                                           visionScore: 35,
//                                                                             timeCCingOthers: 1,
//                                                                               totalDamageTaken: 26793,
//                                                                                 magicalDamageTaken: 7002,
//                                                                                   physicalDamageTaken: 18670,
//                                                                                     trueDamageTaken: 1120,
//                                                                                       goldEarned: 20840,
//                                                                                         goldSpent: 17433,
//                                                                                           turretKills: 3,
//                                                                                             inhibitorKills: 1,
//                                                                                               totalMinionsKilled: 277,
//                                                                                                 neutralMinionsKilled: 29,
//                                                                                                   neutralMinionsKilledTeamJungle: 14,
//                                                                                                     neutralMinionsKilledEnemyJungle: 3,
//                                                                                                       totalTimeCrowdControlDealt: 263,
//                                                                                                         champLevel: 18,
//                                                                                                           visionWardsBoughtInGame: 0,
//                                                                                                             sightWardsBoughtInGame: 0,
//                                                                                                               wardsPlaced: 9,
//                                                                                                                 wardsKilled: 11,
//                                                                                                                   firstBloodKill: false,
//                                                                                                                     firstBloodAssist: false,
//                                                                                                                       firstTowerKill: false,
//                                                                                                                         firstTowerAssist: false,
//                                                                                                                           firstInhibitorKill: false,
//                                                                                                                             firstInhibitorAssist: false,
//                                                                                                                               combatPlayerScore: 0,
//                                                                                                                                 objectivePlayerScore: 0,
//                                                                                                                                   totalPlayerScore: 0,
//                                                                                                                                     totalScoreRank: 0,
//                                                                                                                                       playerScore0: 0,
//                                                                                                                                         playerScore1: 0,
//                                                                                                                                           playerScore2: 0,
//                                                                                                                                             playerScore3: 0,
//                                                                                                                                               playerScore4: 0,
//                                                                                                                                                 playerScore5: 0,
//                                                                                                                                                   playerScore6: 0,
//                                                                                                                                                     playerScore7: 0,
//                                                                                                                                                       playerScore8: 0,
//                                                                                                                                                         playerScore9: 0
//   },
//   timeline: {
//     participantId: 7,
//       creepsPerMinDeltas: {
//       10 - 20: 6.6,
//         0 - 10: 7.1,
//           30 - end: 4.4,
//             20 - 30: 6.800000000000001
//     },
//     xpPerMinDeltas: {
//       10 - 20: 400.9,
//         0 - 10: 298,
//           30 - end: 574.0666666666667,
//             20 - 30: 643.1
//     },
//     goldPerMinDeltas: {
//       10 - 20: 387.4,
//         0 - 10: 323.4,
//           30 - end: 502.8,
//             20 - 30: 519.7
//     },
//     csDiffPerMinDeltas: {
//       10 - 20: -0.19999999999999973,
//         0 - 10: 0.34999999999999964,
//           30 - end: -2.1,
//             20 - 30: -0.7999999999999998
//     },
//     xpDiffPerMinDeltas: {
//       10 - 20: 97.05000000000001,
//         0 - 10: 15.799999999999983,
//           30 - end: -91.10000000000002,
//             20 - 30: -93.59999999999997
//     },
//     damageTakenPerMinDeltas: {
//       10 - 20: 614.3,
//         0 - 10: 253.7,
//           30 - end: 667.2666666666667,
//             20 - 30: 810.4
//     },
//     damageTakenDiffPerMinDeltas: {
//       10 - 20: -53.59999999999991,
//         0 - 10: -92.60000000000002,
//           30 - end: -398.00000000000017,
//             20 - 30: -188.15000000000003
//     },
//     role: "DUO_CARRY",
//       lane: "BOTTOM"
//   }
// },
// {
//   participantId: 8,
//     teamId: 200,
//       championId: 157,
//         spell1Id: 12,
//           spell2Id: 4,
//             masteries: [
//               {
//                 masteryId: 6111,
//                 rank: 5
//               },
//               {
//                 masteryId: 6121,
//                 rank: 1
//               },
//               {
//                 masteryId: 6131,
//                 rank: 5
//               },
//               {
//                 masteryId: 6143,
//                 rank: 1
//               },
//               {
//                 masteryId: 6151,
//                 rank: 5
//               },
//               {
//                 masteryId: 6162,
//                 rank: 1
//               },
//               {
//                 masteryId: 6211,
//                 rank: 5
//               },
//               {
//                 masteryId: 6223,
//                 rank: 1
//               },
//               {
//                 masteryId: 6232,
//                 rank: 5
//               },
//               {
//                 masteryId: 6243,
//                 rank: 1
//               }
//             ],
//               runes: [
//                 {
//                   runeId: 5247,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5289,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5317,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5337,
//                   rank: 3
//                 }
//               ],
//                 highestAchievedSeasonTier: "GOLD",
//                   stats: {
//     participantId: 8,
//       win: true,
//         item0: 3139,
//           item1: 3047,
//             item2: 3072,
//               item3: 3046,
//                 item4: 3031,
//                   item5: 3026,
//                     item6: 3363,
//                       kills: 12,
//                         deaths: 10,
//                           assists: 7,
//                             largestKillingSpree: 5,
//                               largestMultiKill: 2,
//                                 killingSprees: 2,
//                                   longestTimeSpentLiving: 838,
//                                     doubleKills: 1,
//                                       tripleKills: 0,
//                                         quadraKills: 0,
//                                           pentaKills: 0,
//                                             unrealKills: 0,
//                                               totalDamageDealt: 286512,
//                                                 magicDamageDealt: 15107,
//                                                   physicalDamageDealt: 268741,
//                                                     trueDamageDealt: 2662,
//                                                       largestCriticalStrike: 958,
//                                                         totalDamageDealtToChampions: 38677,
//                                                           magicDamageDealtToChampions: 1877,
//                                                             physicalDamageDealtToChampions: 36430,
//                                                               trueDamageDealtToChampions: 370,
//                                                                 totalHeal: 2099,
//                                                                   totalUnitsHealed: 1,
//                                                                     damageSelfMitigated: 49476,
//                                                                       damageDealtToObjectives: 5278,
//                                                                         damageDealtToTurrets: 143,
//                                                                           visionScore: 70,
//                                                                             timeCCingOthers: 46,
//                                                                               totalDamageTaken: 33712,
//                                                                                 magicalDamageTaken: 11697,
//                                                                                   physicalDamageTaken: 20078,
//                                                                                     trueDamageTaken: 1936,
//                                                                                       goldEarned: 20530,
//                                                                                         goldSpent: 18300,
//                                                                                           turretKills: 1,
//                                                                                             inhibitorKills: 0,
//                                                                                               totalMinionsKilled: 350,
//                                                                                                 neutralMinionsKilled: 0,
//                                                                                                   neutralMinionsKilledTeamJungle: 0,
//                                                                                                     neutralMinionsKilledEnemyJungle: 0,
//                                                                                                       totalTimeCrowdControlDealt: 276,
//                                                                                                         champLevel: 18,
//                                                                                                           visionWardsBoughtInGame: 0,
//                                                                                                             sightWardsBoughtInGame: 0,
//                                                                                                               wardsPlaced: 15,
//                                                                                                                 wardsKilled: 6,
//                                                                                                                   firstBloodKill: false,
//                                                                                                                     firstBloodAssist: false,
//                                                                                                                       firstTowerKill: false,
//                                                                                                                         firstTowerAssist: false,
//                                                                                                                           firstInhibitorKill: false,
//                                                                                                                             firstInhibitorAssist: false,
//                                                                                                                               combatPlayerScore: 0,
//                                                                                                                                 objectivePlayerScore: 0,
//                                                                                                                                   totalPlayerScore: 0,
//                                                                                                                                     totalScoreRank: 0,
//                                                                                                                                       playerScore0: 0,
//                                                                                                                                         playerScore1: 0,
//                                                                                                                                           playerScore2: 0,
//                                                                                                                                             playerScore3: 0,
//                                                                                                                                               playerScore4: 0,
//                                                                                                                                                 playerScore5: 0,
//                                                                                                                                                   playerScore6: 0,
//                                                                                                                                                     playerScore7: 0,
//                                                                                                                                                       playerScore8: 0,
//                                                                                                                                                         playerScore9: 0
//   },
//   timeline: {
//     participantId: 8,
//       creepsPerMinDeltas: {
//       10 - 20: 10.2,
//         0 - 10: 6.8,
//           30 - end: 6.133333333333333,
//             20 - 30: 8.8
//     },
//     xpPerMinDeltas: {
//       10 - 20: 561.2,
//         0 - 10: 491.70000000000005,
//           30 - end: 624.4666666666667,
//             20 - 30: 707.3
//     },
//     goldPerMinDeltas: {
//       10 - 20: 384.4,
//         0 - 10: 258.8,
//           30 - end: 474.6666666666667,
//             20 - 30: 623.3
//     },
//     csDiffPerMinDeltas: {
//       10 - 20: 1.5999999999999996,
//         0 - 10: 2.5,
//           30 - end: 2.6,
//             20 - 30: 2.7
//     },
//     xpDiffPerMinDeltas: {
//       10 - 20: 58.60000000000002,
//         0 - 10: 103.20000000000002,
//           30 - end: 150.86666666666667,
//             20 - 30: 140.79999999999995
//     },
//     damageTakenPerMinDeltas: {
//       10 - 20: 178.89999999999998,
//         0 - 10: 370.1,
//           30 - end: 1278.6,
//             20 - 30: 904.3
//     },
//     damageTakenDiffPerMinDeltas: {
//       10 - 20: -355.6,
//         0 - 10: -116.49999999999997,
//           30 - end: -404.6666666666667,
//             20 - 30: -334.09999999999997
//     },
//     role: "SOLO",
//       lane: "TOP"
//   }
// },
// {
//   participantId: 9,
//     teamId: 200,
//       championId: 59,
//         spell1Id: 11,
//           spell2Id: 4,
//             masteries: [
//               {
//                 masteryId: 6111,
//                 rank: 5
//               },
//               {
//                 masteryId: 6121,
//                 rank: 1
//               },
//               {
//                 masteryId: 6131,
//                 rank: 1
//               },
//               {
//                 masteryId: 6134,
//                 rank: 4
//               },
//               {
//                 masteryId: 6142,
//                 rank: 1
//               },
//               {
//                 masteryId: 6312,
//                 rank: 5
//               },
//               {
//                 masteryId: 6321,
//                 rank: 1
//               },
//               {
//                 masteryId: 6331,
//                 rank: 4
//               },
//               {
//                 masteryId: 6332,
//                 rank: 1
//               },
//               {
//                 masteryId: 6341,
//                 rank: 1
//               },
//               {
//                 masteryId: 6351,
//                 rank: 5
//               },
//               {
//                 masteryId: 6362,
//                 rank: 1
//               }
//             ],
//               runes: [
//                 {
//                   runeId: 5245,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5295,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5316,
//                   rank: 5
//                 },
//                 {
//                   runeId: 5317,
//                   rank: 4
//                 },
//                 {
//                   runeId: 5337,
//                   rank: 3
//                 }
//               ],
//                 highestAchievedSeasonTier: "GOLD",
//                   stats: {
//     participantId: 9,
//       win: true,
//         item0: 3800,
//           item1: 1409,
//             item2: 3109,
//               item3: 3111,
//                 item4: 3075,
//                   item5: 3147,
//                     item6: 3364,
//                       kills: 10,
//                         deaths: 7,
//                           assists: 22,
//                             largestKillingSpree: 5,
//                               largestMultiKill: 2,
//                                 killingSprees: 1,
//                                   longestTimeSpentLiving: 629,
//                                     doubleKills: 1,
//                                       tripleKills: 0,
//                                         quadraKills: 0,
//                                           pentaKills: 0,
//                                             unrealKills: 0,
//                                               totalDamageDealt: 240430,
//                                                 magicDamageDealt: 70742,
//                                                   physicalDamageDealt: 148742,
//                                                     trueDamageDealt: 20945,
//                                                       largestCriticalStrike: 28,
//                                                         totalDamageDealtToChampions: 29053,
//                                                           magicDamageDealtToChampions: 6019,
//                                                             physicalDamageDealtToChampions: 22961,
//                                                               trueDamageDealtToChampions: 72,
//                                                                 totalHeal: 13995,
//                                                                   totalUnitsHealed: 1,
//                                                                     damageSelfMitigated: 63500,
//                                                                       damageDealtToObjectives: 27902,
//                                                                         damageDealtToTurrets: 3970,
//                                                                           visionScore: 93,
//                                                                             timeCCingOthers: 39,
//                                                                               totalDamageTaken: 48789,
//                                                                                 magicalDamageTaken: 9855,
//                                                                                   physicalDamageTaken: 37713,
//                                                                                     trueDamageTaken: 1221,
//                                                                                       goldEarned: 19512,
//                                                                                         goldSpent: 19300,
//                                                                                           turretKills: 3,
//                                                                                             inhibitorKills: 0,
//                                                                                               totalMinionsKilled: 139,
//                                                                                                 neutralMinionsKilled: 56,
//                                                                                                   neutralMinionsKilledTeamJungle: 39,
//                                                                                                     neutralMinionsKilledEnemyJungle: 9,
//                                                                                                       totalTimeCrowdControlDealt: 759,
//                                                                                                         champLevel: 18,
//                                                                                                           visionWardsBoughtInGame: 2,
//                                                                                                             sightWardsBoughtInGame: 0,
//                                                                                                               wardsPlaced: 26,
//                                                                                                                 wardsKilled: 6,
//                                                                                                                   firstBloodKill: false,
//                                                                                                                     firstBloodAssist: false,
//                                                                                                                       firstTowerKill: false,
//                                                                                                                         firstTowerAssist: false,
//                                                                                                                           firstInhibitorKill: false,
//                                                                                                                             firstInhibitorAssist: false,
//                                                                                                                               combatPlayerScore: 0,
//                                                                                                                                 objectivePlayerScore: 0,
//                                                                                                                                   totalPlayerScore: 0,
//                                                                                                                                     totalScoreRank: 0,
//                                                                                                                                       playerScore0: 0,
//                                                                                                                                         playerScore1: 0,
//                                                                                                                                           playerScore2: 0,
//                                                                                                                                             playerScore3: 0,
//                                                                                                                                               playerScore4: 0,
//                                                                                                                                                 playerScore5: 0,
//                                                                                                                                                   playerScore6: 0,
//                                                                                                                                                     playerScore7: 0,
//                                                                                                                                                       playerScore8: 0,
//                                                                                                                                                         playerScore9: 0
//   },
//   timeline: {
//     participantId: 9,
//       creepsPerMinDeltas: {
//       10 - 20: 4.3,
//         0 - 10: 0,
//           30 - end: 3.8666666666666667,
//             20 - 30: 3.4000000000000004
//     },
//     xpPerMinDeltas: {
//       10 - 20: 588,
//         0 - 10: 268.9,
//           30 - end: 621.4666666666666,
//             20 - 30: 599.7
//     },
//     goldPerMinDeltas: {
//       10 - 20: 519.6,
//         0 - 10: 265.4,
//           30 - end: 430.06666666666666,
//             20 - 30: 430.1
//     },
//     csDiffPerMinDeltas: {
//       10 - 20: 2.8000000000000003,
//         0 - 10: -1.4,
//           30 - end: 2.5999999999999996,
//             20 - 30: 0.7000000000000002
//     },
//     xpDiffPerMinDeltas: {
//       10 - 20: 16.099999999999966,
//         0 - 10: -170,
//           30 - end: 225.66666666666666,
//             20 - 30: 96.60000000000002
//     },
//     damageTakenPerMinDeltas: {
//       10 - 20: 746.2,
//         0 - 10: 560.8,
//           30 - end: 1615.5333333333335,
//             20 - 30: 1111.5
//     },
//     damageTakenDiffPerMinDeltas: {
//       10 - 20: -308.3999999999999,
//         0 - 10: -106.80000000000004,
//           30 - end: 136,
//             20 - 30: 18.700000000000045
//     },
//     role: "NONE",
//       lane: "JUNGLE"
//   }
// },
// {
//   participantId: 10,
//     teamId: 200,
//       championId: 69,
//         spell1Id: 4,
//           spell2Id: 6,
//             masteries: [
//               {
//                 masteryId: 6114,
//                 rank: 5
//               },
//               {
//                 masteryId: 6122,
//                 rank: 1
//               },
//               {
//                 masteryId: 6134,
//                 rank: 5
//               },
//               {
//                 masteryId: 6142,
//                 rank: 1
//               },
//               {
//                 masteryId: 6154,
//                 rank: 5
//               },
//               {
//                 masteryId: 6164,
//                 rank: 1
//               },
//               {
//                 masteryId: 6312,
//                 rank: 5
//               },
//               {
//                 masteryId: 6322,
//                 rank: 1
//               },
//               {
//                 masteryId: 6332,
//                 rank: 5
//               },
//               {
//                 masteryId: 6343,
//                 rank: 1
//               }
//             ],
//               runes: [
//                 {
//                   runeId: 5273,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5289,
//                   rank: 3
//                 },
//                 {
//                   runeId: 5303,
//                   rank: 6
//                 },
//                 {
//                   runeId: 5316,
//                   rank: 9
//                 },
//                 {
//                   runeId: 5357,
//                   rank: 3
//                 }
//               ],
//                 highestAchievedSeasonTier: "PLATINUM",
//                   stats: {
//     participantId: 10,
//       win: true,
//         item0: 3040,
//           item1: 3116,
//             item2: 3165,
//               item3: 3135,
//                 item4: 3089,
//                   item5: 3027,
//                     item6: 3340,
//                       kills: 14,
//                         deaths: 11,
//                           assists: 10,
//                             largestKillingSpree: 3,
//                               largestMultiKill: 3,
//                                 killingSprees: 4,
//                                   longestTimeSpentLiving: 510,
//                                     doubleKills: 2,
//                                       tripleKills: 1,
//                                         quadraKills: 0,
//                                           pentaKills: 0,
//                                             unrealKills: 0,
//                                               totalDamageDealt: 272786,
//                                                 magicDamageDealt: 247725,
//                                                   physicalDamageDealt: 14230,
//                                                     trueDamageDealt: 10830,
//                                                       largestCriticalStrike: 0,
//                                                         totalDamageDealtToChampions: 61715,
//                                                           magicDamageDealtToChampions: 59977,
//                                                             physicalDamageDealtToChampions: 613,
//                                                               trueDamageDealtToChampions: 1125,
//                                                                 totalHeal: 15103,
//                                                                   totalUnitsHealed: 1,
//                                                                     damageSelfMitigated: 22253,
//                                                                       damageDealtToObjectives: 24084,
//                                                                         damageDealtToTurrets: 7987,
//                                                                           visionScore: 38,
//                                                                             timeCCingOthers: 87,
//                                                                               totalDamageTaken: 42099,
//                                                                                 magicalDamageTaken: 13454,
//                                                                                   physicalDamageTaken: 27624,
//                                                                                     trueDamageTaken: 1021,
//                                                                                       goldEarned: 20750,
//                                                                                         goldSpent: 18500,
//                                                                                           turretKills: 3,
//                                                                                             inhibitorKills: 0,
//                                                                                               totalMinionsKilled: 246,
//                                                                                                 neutralMinionsKilled: 23,
//                                                                                                   neutralMinionsKilledTeamJungle: 11,
//                                                                                                     neutralMinionsKilledEnemyJungle: 10,
//                                                                                                       totalTimeCrowdControlDealt: 10661,
//                                                                                                         champLevel: 18,
//                                                                                                           visionWardsBoughtInGame: 0,
//                                                                                                             sightWardsBoughtInGame: 0,
//                                                                                                               wardsPlaced: 21,
//                                                                                                                 wardsKilled: 2,
//                                                                                                                   firstBloodKill: false,
//                                                                                                                     firstBloodAssist: false,
//                                                                                                                       firstTowerKill: false,
//                                                                                                                         firstTowerAssist: false,
//                                                                                                                           firstInhibitorKill: false,
//                                                                                                                             firstInhibitorAssist: false,
//                                                                                                                               combatPlayerScore: 0,
//                                                                                                                                 objectivePlayerScore: 0,
//                                                                                                                                   totalPlayerScore: 0,
//                                                                                                                                     totalScoreRank: 0,
//                                                                                                                                       playerScore0: 0,
//                                                                                                                                         playerScore1: 0,
//                                                                                                                                           playerScore2: 0,
//                                                                                                                                             playerScore3: 0,
//                                                                                                                                               playerScore4: 0,
//                                                                                                                                                 playerScore5: 0,
//                                                                                                                                                   playerScore6: 0,
//                                                                                                                                                     playerScore7: 0,
//                                                                                                                                                       playerScore8: 0,
//                                                                                                                                                         playerScore9: 0
//   },
//   timeline: {
//     participantId: 10,
//       creepsPerMinDeltas: {
//       10 - 20: 5.5,
//         0 - 10: 7.300000000000001,
//           30 - end: 5.066666666666666,
//             20 - 30: 3.9
//     },
//     xpPerMinDeltas: {
//       10 - 20: 525,
//         0 - 10: 429.6,
//           30 - end: 574.6,
//             20 - 30: 454.4
//     },
//     goldPerMinDeltas: {
//       10 - 20: 454.5,
//         0 - 10: 278.4,
//           30 - end: 468.3333333333333,
//             20 - 30: 498.3
//     },
//     csDiffPerMinDeltas: {
//       10 - 20: 0.8,
//         0 - 10: 2.4000000000000004,
//           30 - end: 0.7333333333333331,
//             20 - 30: -1.7000000000000002
//     },
//     xpDiffPerMinDeltas: {
//       10 - 20: 107,
//         0 - 10: 27.700000000000017,
//           30 - end: 119.33333333333336,
//             20 - 30: -87.59999999999997
//     },
//     damageTakenPerMinDeltas: {
//       10 - 20: 967.6,
//         0 - 10: 356.79999999999995,
//           30 - end: 1020.1999999999999,
//             20 - 30: 1202.5
//     },
//     damageTakenDiffPerMinDeltas: {
//       10 - 20: 335.8,
//         0 - 10: 50.69999999999999,
//           30 - end: 271.53333333333336,
//             20 - 30: 661.0999999999999
//     },
//     role: "SOLO",
//       lane: "MIDDLE"
//   }
// }
// ],
// participantIdentities: [
//   {
//     participantId: 1,
//     player: {
//       platformId: "NA",
//       accountId: 32962073,
//       summonerName: "Robodark",
//       summonerId: 20125762,
//       currentPlatformId: "NA1",
//       currentAccountId: 32962073,
//       matchHistoryUri: "/v1/stats/player_history/NA/32962073",
//       profileIcon: 2095
//     }
//   },
//   {
//     participantId: 2,
//     player: {
//       platformId: "NA",
//       accountId: 533716,
//       summonerName: "Phasma",
//       summonerId: 506884,
//       currentPlatformId: "NA1",
//       currentAccountId: 533716,
//       matchHistoryUri: "/v1/stats/player_history/NA/533716",
//       profileIcon: 11
//     }
//   },
//   {
//     participantId: 3,
//     player: {
//       platformId: "NA1",
//       accountId: 200574803,
//       summonerName: "Rondontanman",
//       summonerId: 37525664,
//       currentPlatformId: "NA1",
//       currentAccountId: 200574803,
//       matchHistoryUri: "/v1/stats/player_history/NA1/200574803",
//       profileIcon: 2095
//     }
//   },
//   {
//     participantId: 4,
//     player: {
//       platformId: "NA1",
//       accountId: 208907913,
//       summonerName: "zalec22",
//       summonerId: 46204693,
//       currentPlatformId: "NA1",
//       currentAccountId: 208907913,
//       matchHistoryUri: "/v1/stats/player_history/NA1/208907913",
//       profileIcon: 2095
//     }
//   },
//   {
//     participantId: 5,
//     player: {
//       platformId: "NA1",
//       accountId: 211836064,
//       summonerName: "chillingoo",
//       summonerId: 48678690,
//       currentPlatformId: "NA1",
//       currentAccountId: 211836064,
//       matchHistoryUri: "/v1/stats/player_history/NA1/211836064",
//       profileIcon: 2095
//     }
//   },
//   {
//     participantId: 6,
//     player: {
//       platformId: "NA1",
//       accountId: 207107107,
//       summonerName: "MadLife v3",
//       summonerId: 44317809,
//       currentPlatformId: "NA1",
//       currentAccountId: 207107107,
//       matchHistoryUri: "/v1/stats/player_history/NA1/207107107",
//       profileIcon: 938
//     }
//   },
//   {
//     participantId: 7,
//     player: {
//       platformId: "NA1",
//       accountId: 210322121,
//       summonerName: "itsmewesley",
//       summonerId: 47533030,
//       currentPlatformId: "NA1",
//       currentAccountId: 210322121,
//       matchHistoryUri: "/v1/stats/player_history/NA1/210322121",
//       profileIcon: 2095
//     }
//   },
//   {
//     participantId: 8,
//     player: {
//       platformId: "NA",
//       accountId: 38784309,
//       summonerName: "IGetBoners",
//       summonerId: 32854000,
//       currentPlatformId: "NA1",
//       currentAccountId: 38784309,
//       matchHistoryUri: "/v1/stats/player_history/NA/38784309",
//       profileIcon: 2095
//     }
//   },
//   {
//     participantId: 9,
//     player: {
//       platformId: "NA",
//       accountId: 40808753,
//       summonerName: "Vi Bot",
//       summonerId: 26058958,
//       currentPlatformId: "NA1",
//       currentAccountId: 40808753,
//       matchHistoryUri: "/v1/stats/player_history/NA/40808753",
//       profileIcon: 2095
//     }
//   },
//   {
//     participantId: 10,
//     player: {
//       platformId: "NA1",
//       accountId: 227626785,
//       summonerName: "Dique",
//       summonerId: 65862660,
//       currentPlatformId: "NA1",
//       currentAccountId: 227626785,
//       matchHistoryUri: "/v1/stats/player_history/NA1/227626785",
//       profileIcon: 1404
//     }
//   }
// ]
// }
// }



export default routes;
