const ActivePlayers = (props) => {
  const scoringPlaysArr = props.gameData[0].liveData.plays.scoringPlays;

  const goalScorerIdArr = props.gameData[0].liveData.plays.allPlays
    .filter((play, idx) => scoringPlaysArr.includes(idx))
    .map((play) => play.players[0].player.id);

  return (
    <div id="gameRosterBoxFront" className="over">
      <div id="GRTeamLogoRow">
        <div className="GRLAHC FCAIC">
          <p className="GRAwayHome">AWAY</p>
          <div className="GRTeamLogoBox FCAIC">
            <img
              alt="Away Team"
              className="GRTeamLogo"
              src={`teamLogos/team${props.gameData[0].gameData.teams.away.id}.png`}
            />
          </div>
        </div>
        <h1 id="GameRostersTitle">GAME ROSTERS</h1>
        <div className="GRLAHC FCAIC">
          <p className="GRAwayHome">HOME</p>
          <div className="GRTeamLogoBox FCAIC">
            <img
              alt="Home Team"
              className="GRTeamLogo"
              src={`teamLogos/team${props.gameData[0].gameData.teams.home.id}.png`}
            />
          </div>
        </div>
      </div>
      <div className="GRLine" />
      <div className="GRRowC">
        <p className="GRCategory">GOALTENDERS</p>
      </div>
      <div className="GRRowSB">
        <div className="GRStatsColumnGoaltenders">
          {!props.gameData[0].liveData.boxscore.teams.away.goalies.length && (
            <p className="NotYet">NOT YET POSTED...</p>
          )}
          {props.gameData[0].liveData.boxscore.teams.away.goalies
            .filter((goalieId) =>
              props.gameData[0].liveData.boxscore.teams.away.onIce.includes(
                goalieId
              )
            )
            .map((goalieId, idx) => (
              <div className="goalieOnIceRow" key={idx}>
                <p className="GRName">
                  {props.goalieObject[goalieId].toUpperCase()}
                </p>
                <img alt="Net" className="netLogo" src="net.png" />
              </div>
            ))}
          {props.gameData[0].liveData.boxscore.teams.away.goalies
            .filter(
              (goalieId) =>
                !props.gameData[0].liveData.boxscore.teams.away.onIce.includes(
                  goalieId
                )
            )
            .map((goalieId, idx) => (
              <p className="GRName" key={idx}>
                {props.goalieObject[goalieId].toUpperCase()}
              </p>
            ))}
        </div>
        <div className="GRStatsColumnGoaltenders">
          {!props.gameData[0].liveData.boxscore.teams.home.goalies.length && (
            <p className="NotYet">NOT YET POSTED...</p>
          )}
          {props.gameData[0].liveData.boxscore.teams.home.goalies
            .filter((goalieId) =>
              props.gameData[0].liveData.boxscore.teams.home.onIce.includes(
                goalieId
              )
            )
            .map((goalieId, idx) => (
              <div className="goalieOnIceRow" key={idx}>
                <p className="GRName">
                  {props.goalieObject[goalieId].toUpperCase()}
                </p>
                <img alt="Net" className="netLogo" src="net.png" />
              </div>
            ))}
          {props.gameData[0].liveData.boxscore.teams.home.goalies
            .filter(
              (goalieId) =>
                !props.gameData[0].liveData.boxscore.teams.home.onIce.includes(
                  goalieId
                )
            )
            .map((goalieId, idx) => (
              <p className="GRName" key={idx}>
                {props.goalieObject[goalieId].toUpperCase()}
              </p>
            ))}
        </div>
      </div>
      <div className="GRLine" />
      <div className="GRRowC">
        <p className="GRCategory">DEFENSEMEN</p>
      </div>
      <div className="GRRowSB">
        <div className="GRStatsColumnDefensemen">
          {!props.awaySkatersFinalState.filter(
            (id) => props.defensemenObject[id] !== undefined
          ).length && <p className="NotYet">NOT YET POSTED...</p>}
          {props.awaySkatersFinalState
            .filter((id) => props.defensemenObject[id] !== undefined)
            .map((skaterId, idx) => {
              if (
                props.gameData[0].liveData.boxscore.teams.away.onIce.includes(
                  skaterId
                )
              ) {
                return (
                  <div className="skaterOnIceRow" key={idx}>
                    <p className="GRName">
                      {props.defensemenObject[skaterId].toUpperCase()}
                    </p>
                    {goalScorerIdArr
                      .filter((id) => id === skaterId)
                      .map((goal) => (
                        <div className="puck" key={goal}></div>
                      ))}
                    <img
                      alt="Stick"
                      className="skaterOnIceStick"
                      src="stick.png"
                    />
                  </div>
                );
              } else {
                return (
                  <div className="skaterOnIceRow" key={idx}>
                    <p className="GRName">
                      {props.defensemenObject[skaterId].toUpperCase()}
                    </p>
                    {goalScorerIdArr
                      .filter((id) => id === skaterId)
                      .map((goal) => (
                        <div className="puck" key={goal}></div>
                      ))}
                  </div>
                );
              }
            })}
        </div>
        <div className="GRStatsColumnDefensemen">
          {!props.homeSkatersFinalState.filter(
            (id) => props.defensemenObject[id] !== undefined
          ).length && <p className="NotYet">NOT YET POSTED...</p>}
          {props.homeSkatersFinalState
            .filter((id) => props.defensemenObject[id] !== undefined)
            .map((skaterId, idx) => {
              if (
                props.gameData[0].liveData.boxscore.teams.home.onIce.includes(
                  skaterId
                )
              ) {
                return (
                  <div className="skaterOnIceRow" key={idx}>
                    <p className="GRName">
                      {props.defensemenObject[skaterId].toUpperCase()}
                    </p>
                    {goalScorerIdArr
                      .filter((id) => id === skaterId)
                      .map((goal) => (
                        <div className="puck" key={goal}></div>
                      ))}
                    <img
                      alt="Stick"
                      className="skaterOnIceStick"
                      src="stick.png"
                    />
                  </div>
                );
              } else {
                return (
                  <div className="skaterOnIceRow" key={idx}>
                    <p className="GRName">
                      {props.defensemenObject[skaterId].toUpperCase()}
                    </p>
                    {goalScorerIdArr
                      .filter((id) => id === skaterId)
                      .map((goal) => (
                        <div className="puck" key={goal}></div>
                      ))}
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className="GRLine" />
      <div className="GRRowC">
        <p className="GRCategory">FORWARDS</p>
      </div>
      <div className="GRRowSB">
        <div className="GRStatsColumnForwards">
          {!props.awaySkatersFinalState.filter(
            (id) => props.forwardsObject[id] !== undefined
          ).length && <p className="NotYet">NOT YET POSTED...</p>}
          {props.awaySkatersFinalState
            .filter((id) => props.forwardsObject[id] !== undefined)
            .map((skaterId, idx) => {
              if (
                props.gameData[0].liveData.boxscore.teams.away.onIce.includes(
                  skaterId
                )
              ) {
                return (
                  <div className="skaterOnIceRow" key={idx}>
                    <p className="GRName">
                      {props.forwardsObject[skaterId].toUpperCase()}
                    </p>
                    {goalScorerIdArr
                      .filter((id) => id === skaterId)
                      .map((goal) => (
                        <div className="puck" key={goal}></div>
                      ))}
                    <img
                      alt="Stick"
                      className="skaterOnIceStick"
                      src="stick.png"
                    />
                  </div>
                );
              } else {
                return (
                  <div className="skaterOnIceRow" key={idx}>
                    <p className="GRName">
                      {props.forwardsObject[skaterId].toUpperCase()}
                    </p>
                    {goalScorerIdArr
                      .filter((id) => id === skaterId)
                      .map((goal) => (
                        <div className="puck" key={goal}></div>
                      ))}
                  </div>
                );
              }
            })}
        </div>
        <div className="GRStatsColumnForwards">
          {!props.homeSkatersFinalState.filter(
            (id) => props.forwardsObject[id] !== undefined
          ).length && <p className="NotYet">NOT YET POSTED...</p>}
          {props.homeSkatersFinalState
            .filter((id) => props.forwardsObject[id] !== undefined)
            .map((skaterId, idx) => {
              if (
                props.gameData[0].liveData.boxscore.teams.home.onIce.includes(
                  skaterId
                )
              ) {
                return (
                  <div className="skaterOnIceRow" key={idx}>
                    <p className="GRName">
                      {props.forwardsObject[skaterId].toUpperCase()}
                    </p>
                    {goalScorerIdArr
                      .filter((id) => id === skaterId)
                      .map((goal) => (
                        <div className="puck" key={goal}></div>
                      ))}
                    <img
                      alt="Stick"
                      className="skaterOnIceStick"
                      src="stick.png"
                    />
                  </div>
                );
              } else {
                return (
                  <div className="skaterOnIceRow" key={idx}>
                    <p className="GRName">
                      {props.forwardsObject[skaterId].toUpperCase()}
                    </p>
                    {goalScorerIdArr
                      .filter((id) => id === skaterId)
                      .map((goal) => (
                        <div className="puck" key={goal}></div>
                      ))}
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default ActivePlayers;
