import './styles/GameRosters.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Loading from './Loading';

const GameRosters = () => {
  const [gameData, setGameData] = useState([]);
  const [goalieObject, setGoalieObject] = useState({});
  const [defensemenObject, setDefensemenObject] = useState({});
  const [forwardsObject, setForwardsObject] = useState({});
  const [scratchesObject, setScratchesObject] = useState({});
  const [awaySkatersFinalState, setAwaySkatersFinalState] = useState([]);
  const [homeSkatersFinalState, setHomeSkatersFinalState] = useState([]);
  const GRMaster = useRef(null);

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
    let fetchGoalieObj = {};
    let fetchDefensemenObj = {};
    let fetchForwardsObj = {};
    let fetchScratchesObj = {};
    const data = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`
    );

    const awayScratches = data.data.liveData.boxscore.teams.away.scratches;
    const awaySkaters = data.data.liveData.boxscore.teams.away.skaters;
    const awaySkatersFinal = awaySkaters.filter(
      (skater) => awayScratches.indexOf(skater) === -1
    );

    const homeScratches = data.data.liveData.boxscore.teams.home.scratches;
    const homeSkaters = data.data.liveData.boxscore.teams.home.skaters;
    const homeSkatersFinal = homeSkaters.filter(
      (skater) => homeScratches.indexOf(skater) === -1
    );

    for (let goalieId of data.data.liveData.boxscore.teams.away.goalies) {
      const name = await axios.get(
        `https://statsapi.web.nhl.com/api/v1/people/${goalieId}`
      );
      fetchGoalieObj[goalieId] = name.data.people[0].fullName;
    }

    for (let goalieId of data.data.liveData.boxscore.teams.home.goalies) {
      const name = await axios.get(
        `https://statsapi.web.nhl.com/api/v1/people/${goalieId}`
      );
      fetchGoalieObj[goalieId] = name.data.people[0].fullName;
    }

    for (let skaterId of awaySkatersFinal) {
      const name = await axios.get(
        `https://statsapi.web.nhl.com/api/v1/people/${skaterId}`
      );
      if (name.data.people[0].primaryPosition.abbreviation === 'D') {
        fetchDefensemenObj[skaterId] = name.data.people[0].fullName;
      } else {
        fetchForwardsObj[skaterId] = name.data.people[0].fullName;
      }
    }

    for (let skaterId of homeSkatersFinal) {
      const name = await axios.get(
        `https://statsapi.web.nhl.com/api/v1/people/${skaterId}`
      );
      if (name.data.people[0].primaryPosition.abbreviation === 'D') {
        fetchDefensemenObj[skaterId] = name.data.people[0].fullName;
      } else {
        fetchForwardsObj[skaterId] = name.data.people[0].fullName;
      }
    }

    for (let scratchId of data.data.liveData.boxscore.teams.away.scratches) {
      const name = await axios.get(
        `https://statsapi.web.nhl.com/api/v1/people/${scratchId}`
      );
      fetchScratchesObj[scratchId] = name.data.people[0].fullName;
    }

    for (let scratchId of data.data.liveData.boxscore.teams.home.scratches) {
      const name = await axios.get(
        `https://statsapi.web.nhl.com/api/v1/people/${scratchId}`
      );
      fetchScratchesObj[scratchId] = name.data.people[0].fullName;
    }

    setAwaySkatersFinalState(awaySkatersFinal);
    setHomeSkatersFinalState(homeSkatersFinal);
    setGoalieObject(fetchGoalieObj);
    setDefensemenObject(fetchDefensemenObj);
    setForwardsObject(fetchForwardsObj);
    setScratchesObject(fetchScratchesObj);
    setGameData([data.data]);
  };

  const flipBoxScore = () => {
    if (GRMaster.current.className === 'spin0') {
      GRMaster.current.className = 'spin1';
    } else if (GRMaster.current.className === 'spin2') {
      GRMaster.current.className = 'spin3';
    }
  };

  const handleBSAnimation = () => {
    if (GRMaster.current.className === 'spin1') {
      GRMaster.current.className = 'spin2';
      GRMaster.current.firstChild.className = 'under';
      GRMaster.current.lastChild.className = 'over';
    } else if (GRMaster.current.className === 'spin3') {
      GRMaster.current.className = 'spin4';
      GRMaster.current.firstChild.className = 'over';
      GRMaster.current.lastChild.className = 'under';
    } else if (GRMaster.current.className === 'spin4') {
      GRMaster.current.className = 'spin0';
    }
  };

  return (
    <>
      {!gameData.length ? (
        <Loading />
      ) : (
        <>
          <div id="gameRostersContainer" className="FCAIC">
            {typeof gameData[0] === 'string' ? (
              <h1>{gameData[0]}</h1>
            ) : (
              <div
                id="GRBoxWrapper"
                onClick={flipBoxScore}
                onAnimationEnd={handleBSAnimation}
                className="spin0"
                ref={GRMaster}
              >
                <div id="gameRosterBoxFront" className="over">
                  <div id="GRTeamLogoRow">
                    <p id="GRAwayTitle">Away</p>
                    <img
                      alt="Away Team"
                      className="GRTeamLogo"
                      src={`teamLogos/team${gameData[0].gameData.teams.away.id}.png`}
                    />
                    <h1 id="GameRostersTitle">Game Rosters</h1>
                    <p id="GRHomeTitle">Home</p>
                    <img
                      alt="Home Team"
                      className="GRTeamLogo"
                      src={`teamLogos/team${gameData[0].gameData.teams.home.id}.png`}
                    />
                  </div>
                  <div className="GRLine" />
                  <div className="GRRowC">
                    <p className="GRCategory">Goaltenders</p>
                  </div>
                  <div className="GRRowSB">
                    <div className="GRStatsColumn">
                      {gameData[0].liveData.boxscore.teams.away.goalies.map(
                        (goalieId, idx) => {
                          return (
                            <p className="GRName" key={idx}>
                              {goalieObject[goalieId]}
                            </p>
                          );
                        }
                      )}
                    </div>
                    <div className="GRStatsColumn">
                      {gameData[0].liveData.boxscore.teams.home.goalies.map(
                        (goalieId, idx) => {
                          return (
                            <p className="GRName" key={idx}>
                              {goalieObject[goalieId]}
                            </p>
                          );
                        }
                      )}
                    </div>
                  </div>
                  <div className="GRLine" />
                  <div className="GRRowC">
                    <p className="GRCategory">Defensemen</p>
                  </div>
                  <div className="GRRowSB">
                    <div className="GRStatsColumn">
                      {awaySkatersFinalState
                        .filter((id) => defensemenObject[id] !== undefined)
                        .map((skaterId, idx) => {
                          return (
                            <p className="GRName" key={idx}>
                              {defensemenObject[skaterId]}
                            </p>
                          );
                        })}
                    </div>
                    <div className="GRStatsColumn">
                      {homeSkatersFinalState
                        .filter((id) => defensemenObject[id] !== undefined)
                        .map((skaterId, idx) => {
                          return (
                            <p className="GRName" key={idx}>
                              {defensemenObject[skaterId]}
                            </p>
                          );
                        })}
                    </div>
                  </div>
                  <div className="GRLine" />
                  <div className="GRRowC">
                    <p className="GRCategory">Forwards</p>
                  </div>
                  <div className="GRRowSB">
                    <div className="GRStatsColumn">
                      {awaySkatersFinalState
                        .filter((id) => forwardsObject[id] !== undefined)
                        .map((skaterId, idx) => {
                          return (
                            <p className="GRName" key={idx}>
                              {forwardsObject[skaterId]}
                            </p>
                          );
                        })}
                    </div>
                    <div className="GRStatsColumn">
                      {homeSkatersFinalState
                        .filter((id) => forwardsObject[id] !== undefined)
                        .map((skaterId, idx) => {
                          return (
                            <p className="GRName" key={idx}>
                              {forwardsObject[skaterId]}
                            </p>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div id="gameRosterBoxBack" className="under">
                  <div id="GRTeamLogoRow">
                    <p id="GRAwayTitle">Away</p>
                    <img
                      alt="Away Team"
                      className="GRTeamLogo"
                      src={`teamLogos/team${gameData[0].gameData.teams.away.id}.png`}
                    />
                    <h1 id="GameRostersTitle">Game Rosters</h1>
                    <p id="GRHomeTitle">Home</p>
                    <img
                      alt="Home Team"
                      className="GRTeamLogo"
                      src={`teamLogos/team${gameData[0].gameData.teams.home.id}.png`}
                    />
                  </div>
                  <div className="GRLine" />
                  <div className="GRRowC">
                    <p className="GRCategory">Head Coach</p>
                  </div>
                  <div className="GRRowSB">
                    <div className="GRStatsColumn">
                      <p className="GRName">
                        {
                          gameData[0].liveData.boxscore.teams.away.coaches[0]
                            .person.fullName
                        }
                      </p>
                    </div>
                    <div className="GRStatsColumn">
                      <p className="GRName">
                        {
                          gameData[0].liveData.boxscore.teams.home.coaches[0]
                            .person.fullName
                        }
                      </p>
                    </div>
                  </div>
                  <div className="GRLine" />
                  <div className="GRRowC">
                    <p className="GRCategory">Scratches</p>
                  </div>
                  <div className="GRRowSB">
                    <div className="GRScratchColumn">
                      {gameData[0].liveData.boxscore.teams.away.scratches.map(
                        (scratchId, idx) => (
                          <p className="GRName" key={idx}>
                            {scratchesObject[scratchId]}
                          </p>
                        )
                      )}
                    </div>
                    <div className="GRScratchColumn">
                      {gameData[0].liveData.boxscore.teams.home.scratches.map(
                        (scratchId, idx) => (
                          <p className="GRName" key={idx}>
                            {scratchesObject[scratchId]}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                  <div className="GRLine" />
                  <div className="GRRowC">
                    <p id="officialsLabel" className="GRCategory">
                      Officials
                    </p>
                  </div>
                  <div className="GRRowC">
                    <div className="GRStatsColumnOfficials">
                      {gameData[0].liveData.boxscore.officials.map(
                        (official) => (
                          <p className="GRName" key={official.official.id}>
                            {official.official.fullName}{' '}
                            <span className="officialType">
                              ({official.officialType})
                            </span>
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default GameRosters;
