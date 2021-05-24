const ActivePlayers = (props) => {
  return (
    <div id="gameRosterBoxFront" className="over">
      <div id="GRTeamLogoRow">
        <p id="GRAwayTitle">AWAY</p>
        <img
          alt="Away Team"
          className="GRTeamLogo"
          src={`teamLogos/team${props.gameData[0].gameData.teams.away.id}.png`}
        />
        <h1 id="GameRostersTitle">Game Rosters</h1>
        <p id="GRHomeTitle">HOME</p>
        <img
          alt="Home Team"
          className="GRTeamLogo"
          src={`teamLogos/team${props.gameData[0].gameData.teams.home.id}.png`}
        />
      </div>
      <div className="GRLine" />
      <div className="GRRowC">
        <p className="GRCategory">GOALTENDERS</p>
      </div>
      <div className="GRRowSB">
        <div className="GRStatsColumn">
          {!props.gameData[0].liveData.boxscore.teams.away.goalies.length && (
            <p className="NotYet">NOT YET POSTED...</p>
          )}
          {props.gameData[0].liveData.boxscore.teams.away.goalies.map(
            (goalieId, idx) => {
              return (
                <p className="GRName" key={idx}>
                  {props.goalieObject[goalieId]}
                </p>
              );
            }
          )}
        </div>
        <div className="GRStatsColumn">
          {!props.gameData[0].liveData.boxscore.teams.home.goalies.length && (
            <p className="NotYet">NOT YET POSTED...</p>
          )}
          {props.gameData[0].liveData.boxscore.teams.home.goalies.map(
            (goalieId, idx) => {
              return (
                <p className="GRName" key={idx}>
                  {props.goalieObject[goalieId]}
                </p>
              );
            }
          )}
        </div>
      </div>
      <div className="GRLine" />
      <div className="GRRowC">
        <p className="GRCategory">DEFENSEMEN</p>
      </div>
      <div className="GRRowSB">
        <div className="GRStatsColumn">
          {!props.awaySkatersFinalState.filter(
            (id) => props.defensemenObject[id] !== undefined
          ).length && <p className="NotYet">NOT YET POSTED...</p>}
          {props.awaySkatersFinalState
            .filter((id) => props.defensemenObject[id] !== undefined)
            .map((skaterId, idx) => {
              return (
                <p className="GRName" key={idx}>
                  {props.defensemenObject[skaterId]}
                </p>
              );
            })}
        </div>
        <div className="GRStatsColumn">
          {!props.homeSkatersFinalState.filter(
            (id) => props.defensemenObject[id] !== undefined
          ).length && <p className="NotYet">NOT YET POSTED...</p>}
          {props.homeSkatersFinalState
            .filter((id) => props.defensemenObject[id] !== undefined)
            .map((skaterId, idx) => {
              return (
                <p className="GRName" key={idx}>
                  {props.defensemenObject[skaterId]}
                </p>
              );
            })}
        </div>
      </div>
      <div className="GRLine" />
      <div className="GRRowC">
        <p className="GRCategory">FORWARDS</p>
      </div>
      <div className="GRRowSB">
        <div className="GRStatsColumn">
          {!props.awaySkatersFinalState.filter(
            (id) => props.forwardsObject[id] !== undefined
          ).length && <p className="NotYet">NOT YET POSTED...</p>}
          {props.awaySkatersFinalState
            .filter((id) => props.forwardsObject[id] !== undefined)
            .map((skaterId, idx) => {
              return (
                <p className="GRName" key={idx}>
                  {props.forwardsObject[skaterId]}
                </p>
              );
            })}
        </div>
        <div className="GRStatsColumn">
          {!props.homeSkatersFinalState.filter(
            (id) => props.forwardsObject[id] !== undefined
          ).length && <p className="NotYet">NOT YET POSTED...</p>}
          {props.homeSkatersFinalState
            .filter((id) => props.forwardsObject[id] !== undefined)
            .map((skaterId, idx) => {
              return (
                <p className="GRName" key={idx}>
                  {props.forwardsObject[skaterId]}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ActivePlayers;
