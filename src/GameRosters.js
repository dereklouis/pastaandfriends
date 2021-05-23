import './styles/GameRosters.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Loading from './Loading';

const GameRosters = () => {
  const [gameData, setGameData] = useState([]);
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
    const data = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`
    );
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
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                    </div>
                    <div className="GRStatsColumn">
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                    </div>
                  </div>
                  <div className="GRLine" />
                  <div className="GRRowC">
                    <p className="GRCategory">Defensemen</p>
                  </div>
                  <div className="GRRowSB">
                    <div className="GRStatsColumn">
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                    </div>
                    <div className="GRStatsColumn">
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                    </div>
                  </div>
                  <div className="GRLine" />
                  <div className="GRRowC">
                    <p className="GRCategory">Forwards</p>
                  </div>
                  <div className="GRRowSB">
                    <div className="GRStatsColumn">
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                      <p className="GRName">John Johnson</p>
                    </div>
                    <div className="GRStatsColumn">
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
                      <p className="GRName">Mark Smithson</p>
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
                    <div className="GRStatsColumn">
                      {gameData[0].liveData.boxscore.teams.away.scratches.map(
                        (scratch) => (
                          <p className="GRName">SCRATCH</p>
                        )
                      )}
                    </div>
                    <div className="GRStatsColumn">
                      {gameData[0].liveData.boxscore.teams.home.scratches.map(
                        (scratch) => (
                          <p className="GRName">SCRATCH</p>
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
