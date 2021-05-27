import './styles/GameRosters.css';
import { useEffect, useState, useRef } from 'react';
import { flipCard, handleCardFlipAnimation } from './CardFlip';
import { checkSchedule } from './RosterFunctions';
import ActivePlayers from './ActivePlayers';
import CSO from './CSO';
import Loading from './Loading';

const GameRosters = () => {
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

  useEffect(() => {
    checkSchedule(
      setGameData,
      setAwaySkatersFinalState,
      setHomeSkatersFinalState,
      setGoalieObject,
      setDefensemenObject,
      setForwardsObject,
      setScratchesObject
    );
  }, []);

  const refresh = (e, buttonConf) => {
    checkSchedule(
      setGameData,
      setAwaySkatersFinalState,
      setHomeSkatersFinalState,
      setGoalieObject,
      setDefensemenObject,
      setForwardsObject,
      setScratchesObject
    );
    if (buttonConf === 'button') {
      refreshButtonGR.current.classList.add('refreshButtonSpin');
    }
  };

  const resetButton = () => {
    refreshButtonGR.current.classList.remove('refreshButtonSpin');
  };

  const toggleAA = () => {
    if (!AAButtonGR.current.classList.contains('autoUpdateAnimation')) {
      AAButtonGR.current.classList.remove('AAButtonOff');
      AAButtonGR.current.classList.add('autoUpdateAnimation', 'AAButtonOn');
      refreshButtonGR.current.disabled = true;
    } else {
      AAButtonGR.current.classList.remove('autoUpdateAnimation', 'AAButtonOn');
      AAButtonGR.current.classList.add('AAButtonOff');
      refreshButtonGR.current.disabled = false;
    }
  };

  return (
    <>
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
                  onClick={(e) => refresh(e, 'button')}
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
                  refresh={refresh}
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
