const BruinsTeamStats = (props) => {
  return (
    <div id="teamStatsBox" className="over">
      <div id="TSLogoContainer">
        <img
          alt="Bruins Logo"
          src={`teamLogos/team${props.teamSelection}.png`}
          id="TSBruinsLogo"
        />
      </div>
      <p id="TSSeason">{props.seasonArr.join('')}</p>
      <h1 id="TSTitle">REGULAR SEASON TEAM STATS</h1>
      <div id="TSWrapContainer">
        <div id="TSColumnWrap">
          <p className="teamPoints TSData">
            <span className="TSBold">
              {props.teamStats[0][0].splits[0].stat.pts}
            </span>{' '}
            <span className="TSStatType">POINTS</span>{' '}
            <span className="TSNote">
              ... ({props.teamStats[0][1].splits[0].stat.pts})
            </span>
          </p>
          <p className="teamWins TSData">
            <span className="TSBold">
              {props.teamStats[0][0].splits[0].stat.wins}
            </span>{' '}
            <span className="TSStatType">WINS</span>{' '}
            <span className="TSNote">
              ... ({props.teamStats[0][1].splits[0].stat.wins})
            </span>
          </p>
          <p className="teamLosses TSData">
            <span className="TSBold">
              {props.teamStats[0][0].splits[0].stat.losses}
            </span>{' '}
            <span className="TSStatType">LOSSES</span>{' '}
            <span className="TSNote">
              ... ({props.teamStats[0][1].splits[0].stat.losses})
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
          <p className="teamGamesPlayed TSData">
            <span className="TSBold">
              {props.teamStats[0][0].splits[0].stat.gamesPlayed}
            </span>{' '}
            <span className="TSStatType">GAMES PLAYED</span>
          </p>
          <div className="TSBruinsDivide"></div>
          <p className="teamPP% TSData">
            <span className="TSBold">
              {props.teamStats[0][0].splits[0].stat.powerPlayPercentage}
            </span>{' '}
            <span className="TSStatType">PP %</span>{' '}
            <span className="TSNote">
              ... ({props.teamStats[0][1].splits[0].stat.powerPlayPercentage})
            </span>
          </p>
          <p className="teamPK% TSData">
            <span className="TSBold">
              {props.teamStats[0][0].splits[0].stat.penaltyKillPercentage}
            </span>{' '}
            <span className="TSStatType">PK %</span>{' '}
            <span className="TSNote">
              ... ({props.teamStats[0][1].splits[0].stat.penaltyKillPercentage})
            </span>
          </p>
          <p className="teamGoalsAverage TSData">
            <span className="TSBold">
              {props.teamStats[0][0].splits[0].stat.goalsPerGame}
            </span>{' '}
            <span className="TSStatType">GF AVG.</span>{' '}
            <span className="TSNote">
              ... ({props.teamStats[0][1].splits[0].stat.goalsPerGame})
            </span>
          </p>
          <p className="teamGoalsAgainst TSData">
            <span className="TSBold">
              {props.teamStats[0][0].splits[0].stat.goalsAgainstPerGame}
            </span>{' '}
            <span className="TSStatType">GA AVG.</span>{' '}
            <span className="TSNote">
              ... ({props.teamStats[0][1].splits[0].stat.goalsAgainstPerGame})
            </span>
          </p>
          <p className="teamFO% TSData">
            <span className="TSBold">
              {props.teamStats[0][0].splits[0].stat.faceOffWinPercentage}
            </span>{' '}
            <span className="TSStatType">FO %</span>{' '}
            <span className="TSNote">
              ... ({props.teamStats[0][1].splits[0].stat.faceOffWinPercentage})
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BruinsTeamStats;
