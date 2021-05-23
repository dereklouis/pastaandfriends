import './styles/Boxscore.css';
import Loading from './Loading';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Boxscore = () => {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    checkSchedule();
  }, []);

  const checkSchedule = async () => {
    const data = await axios.get(
      'https://statsapi.web.nhl.com/api/v1/schedule'
    );
    const gamesArr = data.data.dates[0].games;
    if (gamesArr.length) {
      const bruinsGame = gamesArr.filter((game) => {
        if (game.teams.away.team.id === 6 || game.teams.home.team.id === 6) {
          return true;
        }
        return false;
      });
      if (bruinsGame.length) {
        fetchGameData(bruinsGame[0].gamePk);
      } else {
        setGameData('No Bruins Game Today');
      }
    } else {
      setGameData('No Games Today');
    }
  };

  const fetchGameData = async (gamePk) => {
    const data = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`
    );
    setGameData([data.data]);
  };

  console.log('state-->', gameData);

  return (
    <>
      {!gameData.length ? (
        <Loading />
      ) : (
        <>
          {typeof gameData[0] === 'string' ? (
            <h1>{gameData[0]}</h1>
          ) : (
            <div id="boxscoreContainer" className="FCAIC">
              <div id="boxscoreBox">
                <div id="teamLogoRow">
                  <p id="awayTitle">Away</p>
                  <img
                    alt="Away Team"
                    className="BSTeamLogo"
                    src={`teamLogos/team${gameData[0].gameData.teams.away.id}.png`}
                  />
                  <div id="timeColumn" className="FCAIC">
                    <p id="BSPeriod">
                      {gameData[0].liveData.linescore.currentPeriodOrdinal}{' '}
                      <span id="BSPeriodLabel">Period</span>
                    </p>
                    <p id="BSTime">
                      {
                        gameData[0].liveData.linescore
                          .currentPeriodTimeRemaining
                      }
                    </p>
                    <p id="venue">{gameData[0].gameData.venue.name}</p>
                  </div>
                  <p id="homeTitle">Home</p>
                  <img
                    alt="Home Team"
                    className="BSTeamLogo"
                    src={`teamLogos/team${gameData[0].gameData.teams.home.id}.png`}
                  />
                </div>
                <div id="BSStatsRow">
                  <div id="BSAwayStats">
                    <p className="BSGoals">
                      {
                        gameData[0].liveData.boxscore.teams.away.teamStats
                          .teamSkaterStats.goals
                      }
                    </p>
                    <p className="BSSOG">
                      {
                        gameData[0].liveData.boxscore.teams.away.teamStats
                          .teamSkaterStats.shots
                      }{' '}
                      <span className="BSSOGLabel">SOG</span>
                    </p>
                  </div>
                  <div id="BSHomeStats">
                    <p className="BSGoals">
                      {
                        gameData[0].liveData.boxscore.teams.home.teamStats
                          .teamSkaterStats.goals
                      }
                    </p>
                    <p className="BSSOG">
                      {
                        gameData[0].liveData.boxscore.teams.home.teamStats
                          .teamSkaterStats.shots
                      }{' '}
                      <span className="BSSOGLabel">SOG</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Boxscore;
