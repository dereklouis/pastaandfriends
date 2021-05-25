const LiveStats = (props) => {
  const secondsToMinSec = (timeRemaining) => {
    const mins = Math.floor((timeRemaining % 3600) / 60);
    const secs = Math.floor(timeRemaining % 60);
    let final = '';
    final += '' + mins + ':' + (secs < 10 ? '0' : '');
    final += '' + secs;
    return final;
  };
  return (
    <div id="boxscoreBoxFront" className="over">
      <div id="teamLogoRow">
        {/* {props.gameData[0].liveData.linescore.teams.away.powerPlay && ( */}
        <div className="PPRowAway">
          <p className="PPBox">PP</p>
          <p className="PPTime">
            {/* {secondsToMinSec(
                props.gameData[0].liveData.linescore.powerPlayInfo
                  .situationTimeRemaining
              )} */}
            2:00
          </p>
        </div>
        {/* )} */}
        <div className="BSTeamLogoContainer">
          <p id="awayTitle">AWAY</p>
          <div className="BSTeamLogoBox FCAIC">
            <img
              alt="Away Team"
              className="BSTeamLogo"
              src={`teamLogos/team${props.gameData[0].gameData.teams.away.id}.png`}
            />
          </div>
        </div>
        <div id="timeColumn" className="FCAIC">
          {props.gameData[0].liveData.linescore.currentPeriodOrdinal ===
          undefined ? (
            <p className="GameNotStarted">GAME HAS NOT STARTED</p>
          ) : (
            <>
              <p id="BSPeriod">
                {props.gameData[0].liveData.linescore.currentPeriodOrdinal}{' '}
                <span id="BSPeriodLabel">PERIOD</span>
              </p>
              <p id="BSTime">
                {
                  props.gameData[0].liveData.linescore
                    .currentPeriodTimeRemaining
                }
              </p>
            </>
          )}
          <p id="venue">
            {props.gameData[0].gameData.venue.name.toUpperCase()}
          </p>
        </div>
        {/* {props.gameData[0].liveData.linescore.teams.home.powerPlay && ( */}
        <div className="PPRowHome">
          <p className="PPBox">PP</p>
          <p className="PPTime">
            {/* {secondsToMinSec(
                props.gameData[0].liveData.linescore.powerPlayInfo
                  .situationTimeRemaining
              )} */}
            2:00
          </p>
        </div>
        {/* )} */}
        <div className="BSTeamLogoContainer">
          <p id="homeTitle">HOME</p>
          <div className="BSTeamLogoBox FCAIC">
            <img
              alt="Home Team"
              className="BSTeamLogo"
              src={`teamLogos/team${props.gameData[0].gameData.teams.home.id}.png`}
            />
          </div>
        </div>
      </div>
      <div id="BSGSOGRow">
        <div className="BSGoalsColumn FCAIC">
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
        <div className="BSGoalsColumn FCAIC">
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
            <span className="BSDataLabel">HITS</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.away.teamStats
                .teamSkaterStats.faceOffWinPercentage
            }{' '}
            <span className="BSDataLabel">FO WIN %</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.away.teamStats
                .teamSkaterStats.powerPlayOpportunities
            }{' '}
            <span className="BSDataLabel">POWER PLAYS</span>
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
            <span className="BSDataLabel">GIVEAWAYS</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.away.teamStats
                .teamSkaterStats.takeaways
            }{' '}
            <span className="BSDataLabel">TAKEAWAYS</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.away.teamStats
                .teamSkaterStats.blocked
            }{' '}
            <span className="BSDataLabel">BLOCKS</span>
          </p>
        </div>
        <div id="LSDivide"></div>
        <div className="BSStatsColumn">
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.home.teamStats
                .teamSkaterStats.hits
            }{' '}
            <span className="BSDataLabel">HITS</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.home.teamStats
                .teamSkaterStats.faceOffWinPercentage
            }{' '}
            <span className="BSDataLabel">FO WIN %</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.home.teamStats
                .teamSkaterStats.powerPlayOpportunities
            }{' '}
            <span className="BSDataLabel">POWER PLAYS</span>
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
            <span className="BSDataLabel">GIVEAWAYS</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.home.teamStats
                .teamSkaterStats.takeaways
            }{' '}
            <span className="BSDataLabel">TAKEAWAYS</span>
          </p>
          <p className="BSData">
            {
              props.gameData[0].liveData.boxscore.teams.home.teamStats
                .teamSkaterStats.blocked
            }{' '}
            <span className="BSDataLabel">BLOCKS</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveStats;
