import axios from 'axios';

export const checkSchedule = async (SGD) => {
  const data = await axios.get('https://statsapi.web.nhl.com/api/v1/schedule');
  const gamesArr = data.data.dates[0].games;
  if (gamesArr.length) {
    const bruinsGame = gamesArr.filter((game) => {
      if (game.teams.away.team.id === 2 || game.teams.home.team.id === 2) {
        return true;
      }
      return false;
    });
    if (bruinsGame.length) {
      fetchGameData(bruinsGame[0].gamePk, SGD);
    } else {
      SGD('No Bruins Game Today');
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
