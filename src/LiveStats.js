const LiveStats = (props) => {
  return (
    <div id="boxscoreBoxFront" className="over">
      <div id="teamLogoRow">
        <p id="awayTitle">Away</p>
        <img
          alt="Away Team"
          className="BSTeamLogo"
          src={`teamLogos/team${props.gameData[0].gameData.teams.away.id}.png`}
        />
        <div id="timeColumn" className="FCAIC">
          <p id="BSPeriod">
            {props.gameData[0].liveData.linescore.currentPeriodOrdinal}{' '}
            <span id="BSPeriodLabel">Period</span>
          </p>
          <p id="BSTime">
            {props.gameData[0].liveData.linescore.currentPeriodTimeRemaining}
          </p>
          <p id="venue">{props.gameData[0].gameData.venue.name}</p>
        </div>
        <p id="homeTitle">Home</p>
        <img
          alt="Home Team"
          className="BSTeamLogo"
          src={`teamLogos/team${props.gameData[0].gameData.teams.home.id}.png`}
        />
      </div>
      <div id="BSGSOGRow">
        <div className="BSStatsColumn">
          <p className="BSGoals">
            {
              props.gameData[0].liveData.boxscore.teams.away.teamStats
                .teamSkaterStats.goals
            }
          </p>
          <p className="BSSOG">
            {
              props.gameData[0].liveData.boxscore.teams.away.teamStats
                .teamSkaterStats.shots
            }{' '}
            <span className="BSSOGLabel">SOG</span>
          </p>
        </div>
        <div className="BSStatsColumn">
          <p className="BSGoals">
            {
              props.gameData[0].liveData.boxscore.teams.home.teamStats
                .teamSkaterStats.goals
            }
          </p>
          <p className="BSSOG">
            {
              props.gameData[0].liveData.boxscore.teams.home.teamStats
                .teamSkaterStats.shots
            }{' '}
            <span className="BSSOGLabel">SOG</span>
          </p>
        </div>
      </div>
      <div id="BSStatsRow">
        <div className="BSStatsColumn">
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.away.teamStats
                .teamSkaterStats.hits
            }{' '}
            <span className="BSDataLabel">Hits</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.away.teamStats
                .teamSkaterStats.faceOffWinPercentage
            }{' '}
            <span className="BSDataLabel">FO Win %</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.away.teamStats
                .teamSkaterStats.powerPlayOpportunities
            }{' '}
            <span className="BSDataLabel">Power Plays</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.away.teamStats
                .teamSkaterStats.pim
            }{' '}
            <span className="BSDataLabel">PIM</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.away.teamStats
                .teamSkaterStats.giveaways
            }{' '}
            <span className="BSDataLabel">Giveaways</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.away.teamStats
                .teamSkaterStats.takeaways
            }{' '}
            <span className="BSDataLabel">Takeaways</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.away.teamStats
                .teamSkaterStats.blocked
            }{' '}
            <span className="BSDataLabel">Blocks</span>
          </p>
        </div>
        <div className="BSStatsColumn">
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.home.teamStats
                .teamSkaterStats.hits
            }{' '}
            <span className="BSDataLabel">Hits</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.home.teamStats
                .teamSkaterStats.faceOffWinPercentage
            }{' '}
            <span className="BSDataLabel">FO Win %</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.home.teamStats
                .teamSkaterStats.powerPlayOpportunities
            }{' '}
            <span className="BSDataLabel">Power Plays</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.home.teamStats
                .teamSkaterStats.pim
            }{' '}
            <span className="BSDataLabel">PIM</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.home.teamStats
                .teamSkaterStats.giveaways
            }{' '}
            <span className="BSDataLabel">Giveaways</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.home.teamStats
                .teamSkaterStats.takeaways
            }{' '}
            <span className="BSDataLabel">Takeaways</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.home.teamStats
                .teamSkaterStats.blocked
            }{' '}
            <span className="BSDataLabel">Blocks</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveStats;
