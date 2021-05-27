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
  const refreshButtonBS = useRef(null);
  const AAButtonBS = useRef(null);

  useEffect(() => {
    checkSchedule(setGameData);
  }, []);

  const refresh = () => {
    checkSchedule(setGameData);
    refreshButtonBS.current.classList.add('refreshButtonSpin');
  };

  const resetButton = () => {
    refreshButtonBS.current.classList.remove('refreshButtonSpin');
  };

  const toggleAA = () => {
    if (!AAButtonBS.current.classList.contains('autoUpdateAnimation')) {
      AAButtonBS.current.classList.remove('AAButtonOff');
      AAButtonBS.current.classList.add('autoUpdateAnimation', 'AAButtonOn');
      refreshButtonBS.current.disabled = true;
    } else {
      AAButtonBS.current.classList.remove('autoUpdateAnimation', 'AAButtonOn');
      AAButtonBS.current.classList.add('AAButtonOff');
      refreshButtonBS.current.disabled = false;
    }
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
              <>
                <div className="BSRefreshButtonRow">
                  <button
                    className="refreshButton refreshButtonBS"
                    onClick={refresh}
                    onAnimationEnd={resetButton}
                    ref={refreshButtonBS}
                  >
                    REFRESH STATS
                  </button>
                  <button
                    className="AAButton AAButtonBS AAButtonOff"
                    onClick={toggleAA}
                    ref={AAButtonBS}
                  >
                    AUTO UPDATE
                  </button>
                </div>
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
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Boxscore;
