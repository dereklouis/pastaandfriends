import './styles/Boxscore.css';
import Loading from './Loading';
import LiveStats from './LiveStats';
import ScoringPlays from './ScoringPlays';
import { flipCard, handleCardFlipAnimation } from './CardFlip';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const Boxscore = () => {
  const [gameData, setGameData] = useState([]);

  const BSMaster = useRef(null);

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
        if (game.teams.away.team.id === 2 || game.teams.home.team.id === 2) {
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

  return (
    <>
      {!gameData.length ? (
        <Loading />
      ) : (
        <>
          <div id="boxscoreContainer" className="FCAIC">
            {typeof gameData === 'string' ? (
              <div className="NoGameWrapper">
                <h1 className="NoGame">{gameData}</h1>
              </div>
            ) : (
              <div
                id="BSBoxWrapper"
                onClick={(e) => flipCard(e, BSMaster)}
                onAnimationEnd={(e) => handleCardFlipAnimation(e, BSMaster)}
                className="spin0"
                ref={BSMaster}
              >
                <LiveStats gameData={gameData} />
                <ScoringPlays gameData={gameData} />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Boxscore;
