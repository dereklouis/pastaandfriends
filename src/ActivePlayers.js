const ActivePlayers = (props) => {
  const scoringPlaysArr = props.gameData[0].liveData.plays.scoringPlays;

  const goalScorerIdArr = props.gameData[0].liveData.plays.allPlays
    .filter((play, idx) => scoringPlaysArr.includes(idx))
    .map((play) => play.players[0].player.id);

  let prevWidth = window.innerWidth;

  window.addEventListener('resize', (e) => {
    if (prevWidth >= 676 && window.innerWidth <= 675) {
      if (window.location.pathname === '/gamerosters') {
        window.location.reload();
      }
    } else if (prevWidth <= 675 && window.innerWidth >= 676) {
      if (window.location.pathname === '/gamerosters') {
        window.location.reload();
      }
    }
  });
  return (
    <div id="gameRosterBoxFront" className="over">
      <div id="GRTeamLogoRowBack">
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
      <div className="GRLineTop" />
      <div className="APSkatersWrapper FCAIC">
        <div className="PreWrap FCAIC">
          <div className="GRRowC">
            <p className="GRCategory">GOALTENDERS</p>
          </div>
          <div className="GRRowSB">
            <div className="GRStatsColumnGoaltenders">
              {!props.gameData[0].liveData.boxscore.teams.away.scratches
                .length ? (
                <p className="waiting">WAITING...</p>
              ) : (
                props.gameData[0].liveData.boxscore.teams.away.goalies
                  .filter((goalieId) =>
                    props.gameData[0].liveData.boxscore.teams.away.onIce.includes(
                      goalieId
                    )
                  )
                  .map((goalieId, idx) => (
                    <div className="goalieOnIceRow" key={`${idx}(65)`}>
                      <p className="GRName">
                        {window.innerWidth > 675
                          ? props.goalieObject[goalieId].toUpperCase()
                          : props.goalieObject[goalieId]
                              .toUpperCase()
                              .split(' ')[1]}
                      </p>
                      <img alt="Net" className="netLogo" src="net.png" />
                    </div>
                  ))
              )}
              {!!props.gameData[0].liveData.boxscore.teams.away.scratches
                .length &&
                props.gameData[0].liveData.boxscore.teams.away.goalies
                  .filter(
                    (goalieId) =>
                      !props.gameData[0].liveData.boxscore.teams.away.onIce.includes(
                        goalieId
                      )
                  )
                  .map((goalieId, idx) => (
                    <p className="GRName" key={`${idx}(87)`}>
                      {window.innerWidth > 675
                        ? props.goalieObject[goalieId].toUpperCase()
                        : props.goalieObject[goalieId]
                            .toUpperCase()
                            .split(' ')[1]}
                    </p>
                  ))}
            </div>
            <div className="GRStatsColumnGoaltenders">
              {!props.gameData[0].liveData.boxscore.teams.home.scratches
                .length ? (
                <p className="waiting">WAITING...</p>
              ) : (
                props.gameData[0].liveData.boxscore.teams.home.goalies
                  .filter((goalieId) =>
                    props.gameData[0].liveData.boxscore.teams.home.onIce.includes(
                      goalieId
                    )
                  )
                  .map((goalieId, idx) => (
                    <div className="goalieOnIceRow" key={`${idx}(108)`}>
                      <p className="GRName">
                        {window.innerWidth > 675
                          ? props.goalieObject[goalieId].toUpperCase()
                          : props.goalieObject[goalieId]
                              .toUpperCase()
                              .split(' ')[1]}
                      </p>
                      <img alt="Net" className="netLogo" src="net.png" />
                    </div>
                  ))
              )}
              {!!props.gameData[0].liveData.boxscore.teams.home.scratches
                .length &&
                props.gameData[0].liveData.boxscore.teams.home.goalies
                  .filter(
                    (goalieId) =>
                      !props.gameData[0].liveData.boxscore.teams.home.onIce.includes(
                        goalieId
                      )
                  )
                  .map((goalieId, idx) => (
                    <p className="GRName" key={`${idx}(130)`}>
                      {window.innerWidth > 675
                        ? props.goalieObject[goalieId].toUpperCase()
                        : props.goalieObject[goalieId]
                            .toUpperCase()
                            .split(' ')[1]}
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
              {!props.gameData[0].liveData.boxscore.teams.away.scratches
                .length ? (
                <p className="waiting">WAITING...</p>
              ) : (
                props.awaySkatersFinalState
                  .filter((id) => props.defensemenObject[id] !== undefined)
                  .map((skaterId, idx) => {
                    if (
                      props.gameData[0].liveData.boxscore.teams.away.onIce.includes(
                        skaterId
                      )
                    ) {
                      return (
                        <div className="skaterOnIceRow" key={`${idx}(159)`}>
                          <p className="GRName">
                            {window.innerWidth > 675
                              ? props.defensemenObject[skaterId].toUpperCase()
                              : props.defensemenObject[skaterId]
                                  .toUpperCase()
                                  .split(' ')[1]}
                          </p>
                          {goalScorerIdArr
                            .filter((id) => id === skaterId)
                            .map((goal, idx) => (
                              <div className="puck" key={`${idx}(170)`}></div>
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
                        <div className="skaterOnIceRow" key={`${idx}(181)`}>
                          <p className="GRName">
                            {window.innerWidth > 675
                              ? props.defensemenObject[skaterId].toUpperCase()
                              : props.defensemenObject[skaterId]
                                  .toUpperCase()
                                  .split(' ')[1]}
                          </p>
                          {goalScorerIdArr
                            .filter((id) => id === skaterId)
                            .map((goal, idx) => (
                              <div className="puck" key={`${idx}(192)`}></div>
                            ))}
                        </div>
                      );
                    }
                  })
              )}
            </div>
            <div className="GRStatsColumnDefensemen">
              {!props.gameData[0].liveData.boxscore.teams.home.scratches
                .length ? (
                <p className="waiting">WAITING...</p>
              ) : (
                props.homeSkatersFinalState
                  .filter((id) => props.defensemenObject[id] !== undefined)
                  .map((skaterId, idx) => {
                    if (
                      props.gameData[0].liveData.boxscore.teams.home.onIce.includes(
                        skaterId
                      )
                    ) {
                      return (
                        <div className="skaterOnIceRow" key={`${idx}(214)`}>
                          <p className="GRName">
                            {window.innerWidth > 675
                              ? props.defensemenObject[skaterId].toUpperCase()
                              : props.defensemenObject[skaterId]
                                  .toUpperCase()
                                  .split(' ')[1]}
                          </p>
                          {goalScorerIdArr
                            .filter((id) => id === skaterId)
                            .map((goal, idx) => (
                              <div className="puck" key={`${idx}(225)`}></div>
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
                        <div className="skaterOnIceRow" key={`${idx}(236)`}>
                          <p className="GRName">
                            {window.innerWidth > 675
                              ? props.defensemenObject[skaterId].toUpperCase()
                              : props.defensemenObject[skaterId]
                                  .toUpperCase()
                                  .split(' ')[1]}
                          </p>
                          {goalScorerIdArr
                            .filter((id) => id === skaterId)
                            .map((goal, idx) => (
                              <div className="puck" key={`${idx}(247)`}></div>
                            ))}
                        </div>
                      );
                    }
                  })
              )}
            </div>
          </div>
          <div className="GRLine" />
          <div className="GRRowC">
            <p className="GRCategory">FORWARDS</p>
          </div>
          <div className="GRRowSB">
            <div className="GRStatsColumnForwards">
              {!props.gameData[0].liveData.boxscore.teams.away.scratches
                .length ? (
                <p className="waiting">WAITING...</p>
              ) : (
                props.awaySkatersFinalState
                  .filter((id) => props.forwardsObject[id] !== undefined)
                  .map((skaterId, idx) => {
                    if (
                      props.gameData[0].liveData.boxscore.teams.away.onIce.includes(
                        skaterId
                      )
                    ) {
                      return (
                        <div className="skaterOnIceRow" key={`${idx}(275)`}>
                          <p className="GRName">
                            {window.innerWidth > 675
                              ? props.forwardsObject[skaterId].toUpperCase()
                              : props.forwardsObject[skaterId]
                                  .toUpperCase()
                                  .split(' ')[1]}
                          </p>
                          {goalScorerIdArr
                            .filter((id) => id === skaterId)
                            .map((goal, idx) => (
                              <div className="puck" key={`${idx}(286)`}></div>
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
                        <div className="skaterOnIceRow" key={`${idx}(297)`}>
                          <p className="GRName">
                            {window.innerWidth > 675
                              ? props.forwardsObject[skaterId].toUpperCase()
                              : props.forwardsObject[skaterId]
                                  .toUpperCase()
                                  .split(' ')[1]}
                          </p>
                          {goalScorerIdArr
                            .filter((id) => id === skaterId)
                            .map((goal, idx) => (
                              <div className="puck" key={`${idx}(308)`}></div>
                            ))}
                        </div>
                      );
                    }
                  })
              )}
            </div>
            <div className="GRStatsColumnForwards">
              {!props.gameData[0].liveData.boxscore.teams.home.scratches
                .length ? (
                <p className="waiting">WAITING...</p>
              ) : (
                props.homeSkatersFinalState
                  .filter((id) => props.forwardsObject[id] !== undefined)
                  .map((skaterId, idx) => {
                    if (
                      props.gameData[0].liveData.boxscore.teams.home.onIce.includes(
                        skaterId
                      )
                    ) {
                      return (
                        <div className="skaterOnIceRow" key={`${idx}(330)`}>
                          <p className="GRName">
                            {window.innerWidth > 675
                              ? props.forwardsObject[skaterId].toUpperCase()
                              : props.forwardsObject[skaterId]
                                  .toUpperCase()
                                  .split(' ')[1]}
                          </p>
                          {goalScorerIdArr
                            .filter((id) => id === skaterId)
                            .map((goal, idx) => (
                              <div className="puck" key={`${idx}(341)`}></div>
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
                        <div className="skaterOnIceRow" key={`${idx}(351)`}>
                          <p className="GRName">
                            {window.innerWidth > 675
                              ? props.forwardsObject[skaterId].toUpperCase()
                              : props.forwardsObject[skaterId]
                                  .toUpperCase()
                                  .split(' ')[1]}
                          </p>
                          {goalScorerIdArr
                            .filter((id) => id === skaterId)
                            .map((goal, idx) => (
                              <div className="puck" key={`${idx}(363)`}></div>
                            ))}
                        </div>
                      );
                    }
                  })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivePlayers;
