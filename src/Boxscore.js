import './styles/Boxscore.css';
import Loading from './Loading';
import { checkSchedule } from './BoxscoreFunctions';
import LiveStats from './LiveStats';
import ScoringPlays from './ScoringPlays';
import { flipCard, handleCardFlipAnimation } from './CardFlip';
import { useEffect, useState, useRef } from 'react';

window.scrollTo(0, 0);

const Boxscore = () => {
  const [gameData, setGameData] = useState([]);

  const BSMaster = useRef(null);
  const refreshButtonBS = useRef(null);
  const AAButtonBS = useRef(null);
  const ringPulseRef = useRef(null);

  useEffect(() => {
    checkSchedule(setGameData);
    window.boxscoreAutoUpdate = undefined;
  }, []);

  const refresh = () => {
    checkSchedule(setGameData);
    refreshButtonBS.current.classList.add('refreshButtonSpin');
    console.log('Boxscore Data Fetched');
  };

  const autoRefresh = () => {
    if (window.boxscoreAutoUpdate === undefined) {
      window.boxscoreAutoUpdate = setInterval(() => {
        console.log('Boxscore Data Fetched');
        checkSchedule(setGameData);
      }, 3000);
    } else {
      clearInterval(window.boxscoreAutoUpdate);
      window.boxscoreAutoUpdate = undefined;
    }
  };

  const resetButton = () => {
    refreshButtonBS.current.classList.remove('refreshButtonSpin');
  };

  const toggleAA = () => {
    if (!AAButtonBS.current.classList.contains('AAButtonOn')) {
      AAButtonBS.current.classList.remove('AAButtonOff');
      AAButtonBS.current.classList.add('AAButtonOn');
      ringPulseRef.current.className = 'buttonRingPulse';
      refreshButtonBS.current.disabled = true;
    } else {
      AAButtonBS.current.classList.remove('AAButtonOn');
      AAButtonBS.current.classList.add('AAButtonOff');
      ringPulseRef.current.className = '';
      refreshButtonBS.current.disabled = false;
    }
    autoRefresh();
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
                    <div id="buttonRingBS" ref={ringPulseRef} />
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
