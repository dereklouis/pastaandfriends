import axios from 'axios';
import { teamNamesObj } from './Keys';

export const checkSchedule = async (teamSelection, SGD) => {
  const data = await axios.get('https://statsapi.web.nhl.com/api/v1/schedule');
  const gamesArr = data.data.dates[0]?.games;
  if (gamesArr && gamesArr.length) {
    const bruinsGame = gamesArr.filter((game) => {
      if (
        game.teams.away.team.id === teamSelection ||
        game.teams.home.team.id === teamSelection
      ) {
        return true;
      }
      return false;
    });
    if (bruinsGame.length) {
      fetchGameData(bruinsGame[0].gamePk, SGD);
    } else {
      SGD(`No ${teamNamesObj[teamSelection].nickname} Game Today`);
    }
  } else {
    SGD('No Games Today');
  }
};

const fetchGameData = async (gamePk, SGD) => {
  const data = await axios.get(
    `https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`
  );
  SGD([data.data]);
};
