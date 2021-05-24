import './styles/Boxscore.css';
import Loading from './Loading';
import { checkSchedule } from './BoxscoreFunctions';
import LiveStats from './LiveStats';
import ScoringPlays from './ScoringPlays';
import { flipCard, handleCardFlipAnimation } from './CardFlip';
import { useEffect, useState, useRef } from 'react';

const Boxscore = () => {
  const [gameData, setGameData] = useState([]);

  const BSMaster = useRef(null);

  useEffect(() => {
    checkSchedule(setGameData);
  }, []);

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
