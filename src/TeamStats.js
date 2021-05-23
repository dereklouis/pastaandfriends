import './styles/TeamStats.css';
import Loading from './Loading';

const TeamStats = (props) => {
  let seasonArr = props.season.split('');
  seasonArr.splice(4, 0, ' - ');
  return (
    <>
      {Object.keys(props.teamStats).length ? (
        <div id="teamStatsContainer" className="FCAIC">
          <div id="teamStatsBox">
            <img alt="Bruins Logo" src="bruinsLogo.png" id="TSBruinsLogo" />
            <p id="TSSeason">{seasonArr.join('')}</p>
            <h1 id="TSTitle">Regular Season Team Stats</h1>
            <div id="TSWrapContainer">
              <div id="TSColumnWrap">
                <p className="teamWins TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.wins}
                  </span>{' '}
                  <span className="TSStatType">Wins</span>{' '}
                  <span className="TSNote">
                    ... ({props.teamStats[1].splits[0].stat.wins})
                  </span>
                </p>
                <p className="teamOT TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.ot}
                  </span>{' '}
                  <span className="TSStatType">OT</span>{' '}
                  <span className="TSNote">
                    ... ({props.teamStats[1].splits[0].stat.ot})
                  </span>
                </p>
                <p className="teamGoalsAverage TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.goalsPerGame}
                  </span>{' '}
                  <span className="TSStatType">Goals For Avg.</span>{' '}
                  <span className="TSNote">
                    ... ({props.teamStats[1].splits[0].stat.goalsPerGame})
                  </span>
                </p>
                <p className="teamPP% TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.powerPlayPercentage}
                  </span>{' '}
                  <span className="TSStatType">PP %</span>{' '}
                  <span className="TSNote">
                    ... ({props.teamStats[1].splits[0].stat.powerPlayPercentage}
                    )
                  </span>
                </p>
                <p className="teamGamesPlayed TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.gamesPlayed}
                  </span>{' '}
                  <span className="TSStatType">Games Played</span>
                </p>
                <p className="teamLosses TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.losses}
                  </span>{' '}
                  <span className="TSStatType">Losses</span>{' '}
                  <span className="TSNote">
                    ... ({props.teamStats[1].splits[0].stat.losses})
                  </span>
                </p>
                <p className="teamPoints TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.pts}
                  </span>{' '}
                  <span className="TSStatType">Points</span>{' '}
                  <span className="TSNote">
                    ... ({props.teamStats[1].splits[0].stat.pts})
                  </span>
                </p>
                <p className="teamGoalsAgainst TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.goalsAgainstPerGame}
                  </span>{' '}
                  <span className="TSStatType">Goals Agst. Avg.</span>{' '}
                  <span className="TSNote">
                    ... ({props.teamStats[1].splits[0].stat.goalsAgainstPerGame}
                    )
                  </span>
                </p>
                <p className="teamPK% TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.penaltyKillPercentage}
                  </span>{' '}
                  <span className="TSStatType">PK %</span>{' '}
                  <span className="TSNote">
                    ... (
                    {props.teamStats[1].splits[0].stat.penaltyKillPercentage})
                  </span>
                </p>
                <p className="teamFO% TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.faceOffWinPercentage}
                  </span>{' '}
                  <span className="TSStatType">FO %</span>{' '}
                  <span className="TSNote">
                    ... (
                    {props.teamStats[1].splits[0].stat.faceOffWinPercentage})
                  </span>
                </p>
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
