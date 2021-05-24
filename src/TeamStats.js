import './styles/TeamStats.css';
import Loading from './Loading';
import { useRef } from 'react';

const TeamStats = (props) => {
  let seasonArr = props.season.split('');
  seasonArr.splice(4, 0, ' - ');

  const TSMaster = useRef(null);

  const flipBox = () => {
    if (TSMaster.current.className === 'spin0') {
      TSMaster.current.className = 'spin1';
    } else if (TSMaster.current.className === 'spin2') {
      TSMaster.current.className = 'spin3';
    }
  };

  const handleTSAnimation = () => {
    if (TSMaster.current.className === 'spin1') {
      TSMaster.current.className = 'spin2';
      TSMaster.current.firstChild.className = 'under';
      TSMaster.current.lastChild.className = 'over';
    } else if (TSMaster.current.className === 'spin3') {
      TSMaster.current.className = 'spin4';
      TSMaster.current.firstChild.className = 'over';
      TSMaster.current.lastChild.className = 'under';
    } else if (TSMaster.current.className === 'spin4') {
      TSMaster.current.className = 'spin0';
    }
  };

  return (
    <>
      {console.log(12345, props.teamStats)}
      {props.teamStats.length ? (
        <div id="teamStatsContainer" className="FCAIC">
          <div
            id="TSBoxWrapper"
            ref={TSMaster}
            onClick={flipBox}
            onAnimationEnd={handleTSAnimation}
            className="spin0"
          >
            <div id="teamStatsBox" className="over">
              <img alt="Bruins Logo" src="bruinsLogo.png" id="TSBruinsLogo" />
              <p id="TSSeason">{seasonArr.join('')}</p>
              <h1 id="TSTitle">Regular Season Team Stats</h1>
              <div id="TSWrapContainer">
                <div id="TSColumnWrap">
                  <p className="teamWins TSData">
                    <span className="TSBold">
                      {props.teamStats[0][0].splits[0].stat.wins}
                    </span>{' '}
                    <span className="TSStatType">Wins</span>{' '}
                    <span className="TSNote">
                      ... ({props.teamStats[0][1].splits[0].stat.wins})
                    </span>
                  </p>
                  <p className="teamOT TSData">
                    <span className="TSBold">
                      {props.teamStats[0][0].splits[0].stat.ot}
                    </span>{' '}
                    <span className="TSStatType">OT</span>{' '}
                    <span className="TSNote">
                      ... ({props.teamStats[0][1].splits[0].stat.ot})
                    </span>
                  </p>
                  <p className="teamGoalsAverage TSData">
                    <span className="TSBold">
                      {props.teamStats[0][0].splits[0].stat.goalsPerGame}
                    </span>{' '}
                    <span className="TSStatType">Goals For Avg.</span>{' '}
                    <span className="TSNote">
                      ... ({props.teamStats[0][1].splits[0].stat.goalsPerGame})
                    </span>
                  </p>
                  <p className="teamPP% TSData">
                    <span className="TSBold">
                      {props.teamStats[0][0].splits[0].stat.powerPlayPercentage}
                    </span>{' '}
                    <span className="TSStatType">PP %</span>{' '}
                    <span className="TSNote">
                      ... (
                      {props.teamStats[0][1].splits[0].stat.powerPlayPercentage}
                      )
                    </span>
                  </p>
                  <p className="teamGamesPlayed TSData">
                    <span className="TSBold">
                      {props.teamStats[0][0].splits[0].stat.gamesPlayed}
                    </span>{' '}
                    <span className="TSStatType">Games Played</span>
                  </p>
                  <p className="teamLosses TSData">
                    <span className="TSBold">
                      {props.teamStats[0][0].splits[0].stat.losses}
                    </span>{' '}
                    <span className="TSStatType">Losses</span>{' '}
                    <span className="TSNote">
                      ... ({props.teamStats[0][1].splits[0].stat.losses})
                    </span>
                  </p>
                  <p className="teamPoints TSData">
                    <span className="TSBold">
                      {props.teamStats[0][0].splits[0].stat.pts}
                    </span>{' '}
                    <span className="TSStatType">Points</span>{' '}
                    <span className="TSNote">
                      ... ({props.teamStats[0][1].splits[0].stat.pts})
                    </span>
                  </p>
                  <p className="teamGoalsAgainst TSData">
                    <span className="TSBold">
                      {props.teamStats[0][0].splits[0].stat.goalsAgainstPerGame}
                    </span>{' '}
                    <span className="TSStatType">Goals Agst. Avg.</span>{' '}
                    <span className="TSNote">
                      ... (
                      {props.teamStats[0][1].splits[0].stat.goalsAgainstPerGame}
                      )
                    </span>
                  </p>
                  <p className="teamPK% TSData">
                    <span className="TSBold">
                      {
                        props.teamStats[0][0].splits[0].stat
                          .penaltyKillPercentage
                      }
                    </span>{' '}
                    <span className="TSStatType">PK %</span>{' '}
                    <span className="TSNote">
                      ... (
                      {
                        props.teamStats[0][1].splits[0].stat
                          .penaltyKillPercentage
                      }
                      )
                    </span>
                  </p>
                  <p className="teamFO% TSData">
                    <span className="TSBold">
                      {
                        props.teamStats[0][0].splits[0].stat
                          .faceOffWinPercentage
                      }
                    </span>{' '}
                    <span className="TSStatType">FO %</span>{' '}
                    <span className="TSNote">
                      ... (
                      {
                        props.teamStats[0][1].splits[0].stat
                          .faceOffWinPercentage
                      }
                      )
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div id="TSStandingsBox" className="under">
              <p id="TSStandingSeason">{seasonArr.join('')}</p>
              <h1 id="TSStandingTitle">League Standings</h1>
              <div id="TSStandingColumns">
                {props.teamStats[1][0].teamRecords.map((team) => (
                  <div className="TSStandingRow">
                    <p className="LeagueRank">{team.leagueRank}. </p>
                    <img
                      alt="Team Logo"
                      className="TSStandingLogo"
                      src={`teamLogos/team${team.team.id}.png`}
                    />
                    <p className="StandingPoints">
                      <span className="TSStandingsBold">{team.points}</span>{' '}
                      <span className="TSStandingPoints">Pts,</span>
                    </p>
                    <p className="StandingGP">({team.gamesPlayed} GP)</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TeamStats;
