import './styles/Boxscore.css';
import Loading from './Loading';
import { checkSchedule } from './BoxscoreFunctions';
import LiveStats from './LiveStats';
import ScoringPlays from './ScoringPlays';
import FlipTutorial from './FlipTutorial';
import { flipCard, handleCardFlipAnimation } from './CardFlip';
import { useEffect, useState, useRef } from 'react';
import RemoteIcon from './RemoteIcon';

window.scrollTo(0, 0);

const Boxscore = (props) => {
  const [gameData, setGameData] = useState([]);

  const BSMaster = useRef(null);
  const refreshButtonBS = useRef(null);
  const AAButtonBS = useRef(null);
  const RefreshRingPulseRef = useRef(null);
  const ringPulseRef = useRef(null);

  useEffect(() => {
    checkSchedule(props.teamSelection, setGameData);
    window.boxscoreAutoUpdate = undefined;
  }, []);

  const refresh = () => {
    checkSchedule(props.teamSelection, setGameData);
    RefreshRingPulseRef.current.className = 'buttonRingPulseOnce';
    console.log('Boxscore Data Fetched');
  };

  const autoRefresh = () => {
    if (window.boxscoreAutoUpdate === undefined) {
      window.boxscoreAutoUpdate = setInterval(() => {
        console.log('Boxscore Data Fetched');
        checkSchedule(props.teamSelection, setGameData);
      }, 3000);
    } else {
      clearInterval(window.boxscoreAutoUpdate);
      window.boxscoreAutoUpdate = undefined;
    }
  };

  const resetButton = () => {
    RefreshRingPulseRef.current.className = '';
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
      {localStorage.getItem('flipTutorial') === null && <FlipTutorial />}
      {!gameData.length ? (
        <Loading />
      ) : (
        <>
          <RemoteIcon />
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
                    <div id="buttonRingBS" ref={RefreshRingPulseRef} />
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
