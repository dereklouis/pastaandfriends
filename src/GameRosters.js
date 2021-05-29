import './styles/GameRosters.css';
import { useEffect, useState, useRef } from 'react';
import { flipCard, handleCardFlipAnimation } from './CardFlip';
import { checkSchedule } from './RosterFunctions';
import ActivePlayers from './ActivePlayers';
import CSO from './CSO';
import FlipTutorial from './FlipTutorial';
import Loading from './Loading';

window.scrollTo(0, 0);

const GameRosters = (props) => {
  const [gameData, setGameData] = useState([]);
  const [awaySkatersFinalState, setAwaySkatersFinalState] = useState([]);
  const [homeSkatersFinalState, setHomeSkatersFinalState] = useState([]);
  const [goalieObject, setGoalieObject] = useState({});
  const [defensemenObject, setDefensemenObject] = useState({});
  const [forwardsObject, setForwardsObject] = useState({});
  const [scratchesObject, setScratchesObject] = useState({});
  const GRMaster = useRef(null);
  const refreshButtonGR = useRef(null);
  const AAButtonGR = useRef(null);
  const ringPulseRefGR = useRef(null);

  useEffect(() => {
    checkSchedule(
      props.teamSelection,
      setGameData,
      setAwaySkatersFinalState,
      setHomeSkatersFinalState,
      setGoalieObject,
      setDefensemenObject,
      setForwardsObject,
      setScratchesObject
    );
    window.gameRostersAutoUpdate = undefined;
  }, []);

  const refresh = () => {
    checkSchedule(
      props.teamSelection,
      setGameData,
      setAwaySkatersFinalState,
      setHomeSkatersFinalState,
      setGoalieObject,
      setDefensemenObject,
      setForwardsObject,
      setScratchesObject
    );
    refreshButtonGR.current.classList.add('refreshButtonSpin');
    console.log('Game Rosters Data Fetched');
  };

  const autoRefresh = () => {
    if (window.gameRostersAutoUpdate === undefined) {
      window.gameRostersAutoUpdate = setInterval(() => {
        console.log('Game Rosters Data Fetched');
        checkSchedule(
          props.teamSelection,
          setGameData,
          setAwaySkatersFinalState,
          setHomeSkatersFinalState,
          setGoalieObject,
          setDefensemenObject,
          setForwardsObject,
          setScratchesObject
        );
      }, 3000);
    } else {
      clearInterval(window.gameRostersAutoUpdate);
      window.gameRostersAutoUpdate = undefined;
    }
  };

  const resetButton = () => {
    refreshButtonGR.current.classList.remove('refreshButtonSpin');
  };

  const toggleAA = () => {
    if (!AAButtonGR.current.classList.contains('AAButtonOn')) {
      AAButtonGR.current.classList.remove('AAButtonOff');
      AAButtonGR.current.classList.add('AAButtonOn');
      ringPulseRefGR.current.className = 'buttonRingPulse';
      refreshButtonGR.current.disabled = true;
    } else {
      AAButtonGR.current.classList.remove('AAButtonOn');
      AAButtonGR.current.classList.add('AAButtonOff');
      ringPulseRefGR.current.className = '';
      refreshButtonGR.current.disabled = false;
    }
    autoRefresh();
  };
  return (
    <>
      {localStorage.getItem('flipTutorial') === null && <FlipTutorial />}
      {!gameData.length ? (
        <Loading />
      ) : (
        <div id="gameRostersContainer" className="FCAIC">
          {typeof gameData === 'string' ? (
            <div className="NoGameWrapper">
              <h1 className="NoGame">{gameData}</h1>
            </div>
          ) : (
            <>
              <div className="GRRefreshButtonRow">
                <button
                  className="refreshButton refreshButtonGR"
                  onClick={refresh}
                  onAnimationEnd={resetButton}
                  ref={refreshButtonGR}
                >
                  REFRESH STATS
                </button>
                <button
                  className="AAButton AAButtonGR AAButtonOff"
                  onClick={toggleAA}
                  ref={AAButtonGR}
                >
                  AUTO UPDATE
                  <div id="buttonRingGR" ref={ringPulseRefGR} />
                </button>
              </div>
              <div
                id="GRBoxWrapper"
                onClick={(e) => flipCard(e, GRMaster)}
                onAnimationEnd={(e) => handleCardFlipAnimation(e, GRMaster)}
                className="spin0"
                ref={GRMaster}
              >
                <ActivePlayers
                  gameData={gameData}
                  goalieObject={goalieObject}
                  awaySkatersFinalState={awaySkatersFinalState}
                  homeSkatersFinalState={homeSkatersFinalState}
                  defensemenObject={defensemenObject}
                  forwardsObject={forwardsObject}
                />
                <CSO gameData={gameData} scratchesObject={scratchesObject} />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default GameRosters;
