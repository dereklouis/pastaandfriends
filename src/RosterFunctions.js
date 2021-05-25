import axios from 'axios';

export const checkSchedule = async (SGD, SASFS, SHSFS, SGO, SDO, SFO, SSO) => {
  const data = await axios.get('https://statsapi.web.nhl.com/api/v1/schedule');
  const gamesArr = data.data.dates[0].games;
  if (gamesArr.length) {
    const bruinsGame = gamesArr.filter((game) => {
      if (game.teams.away.team.id === 22 || game.teams.home.team.id === 22) {
        return true;
      }
      return false;
    });
    if (bruinsGame.length) {
      fetchGameData(
        bruinsGame[0].gamePk,
        SASFS,
        SHSFS,
        SGO,
        SDO,
        SFO,
        SSO,
        SGD
      );
    } else {
      SGD('No Bruins Game Today');
    }
  } else {
    SGD('No Games Today');
  }
};

export const fetchGameData = async (
  gamePk,
  SASFS,
  SHSFS,
  SGO,
  SDO,
  SFO,
  SSO,
  SGD
) => {
  let fetchGoalieObj = {};
  let fetchDefensemenObj = {};
  let fetchForwardsObj = {};
  let fetchScratchesObj = {};
  const data = await axios.get(
    `https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`
  );

  const awayScratches = data.data.liveData.boxscore.teams.away.scratches;
  const awaySkaters = data.data.liveData.boxscore.teams.away.skaters;
  const awaySkatersFinal = awaySkaters.filter(
    (skater) => awayScratches.indexOf(skater) === -1
  );

  const homeScratches = data.data.liveData.boxscore.teams.home.scratches;
  const homeSkaters = data.data.liveData.boxscore.teams.home.skaters;
  const homeSkatersFinal = homeSkaters.filter(
    (skater) => homeScratches.indexOf(skater) === -1
  );

  for (let goalieId of data.data.liveData.boxscore.teams.away.goalies) {
    const name = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/people/${goalieId}`
    );
    fetchGoalieObj[goalieId] = name.data.people[0].fullName;
  }

  for (let goalieId of data.data.liveData.boxscore.teams.home.goalies) {
    const name = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/people/${goalieId}`
    );
    fetchGoalieObj[goalieId] = name.data.people[0].fullName;
  }

  for (let skaterId of awaySkatersFinal) {
    const name = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/people/${skaterId}`
    );
    if (name.data.people[0].primaryPosition.abbreviation === 'D') {
      fetchDefensemenObj[skaterId] = name.data.people[0].fullName;
    } else {
      fetchForwardsObj[skaterId] = name.data.people[0].fullName;
    }
  }

  for (let skaterId of homeSkatersFinal) {
    const name = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/people/${skaterId}`
    );
    if (name.data.people[0].primaryPosition.abbreviation === 'D') {
      fetchDefensemenObj[skaterId] = name.data.people[0].fullName;
    } else {
      fetchForwardsObj[skaterId] = name.data.people[0].fullName;
    }
  }

  for (let scratchId of data.data.liveData.boxscore.teams.away.scratches) {
    const name = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/people/${scratchId}`
    );
    fetchScratchesObj[scratchId] = name.data.people[0].fullName;
  }

  for (let scratchId of data.data.liveData.boxscore.teams.home.scratches) {
    const name = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/people/${scratchId}`
    );
    fetchScratchesObj[scratchId] = name.data.people[0].fullName;
  }

  SASFS(awaySkatersFinal);
  SHSFS(homeSkatersFinal);
  SGO(fetchGoalieObj);
  SDO(fetchDefensemenObj);
  SFO(fetchForwardsObj);
  SSO(fetchScratchesObj);
  SGD([data.data]);
};
