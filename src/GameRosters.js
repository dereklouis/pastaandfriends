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

  return (
    <>
      {!gameData.length ? (
        <Loading />
      ) : (
        <>
          <div id="gameRostersContainer" className="FCAIC">
            {typeof gameData === 'string' ? (
              <div className="NoGameWrapper">
                <h1 className="NoGame">{gameData}</h1>
              </div>
            ) : (
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
            )}
          </div>
        </>
      )}
    </>
  );
};

export default GameRosters;
