const CSO = (props) => {
  return (
    <div id="gameRosterBoxBack" className="under">
      <div id="GRTeamLogoRow">
        <p id="GRAwayTitle">Away</p>
        <img
          alt="Away Team"
          className="GRTeamLogo"
          src={`teamLogos/team${props.gameData[0].gameData.teams.away.id}.png`}
        />
        <h1 id="GameRostersTitle">Game Rosters</h1>
        <p id="GRHomeTitle">Home</p>
        <img
          alt="Home Team"
          className="GRTeamLogo"
          src={`teamLogos/team${props.gameData[0].gameData.teams.home.id}.png`}
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
              props.gameData[0].liveData.boxscore.teams.away.coaches[0].person
                .fullName
            }
          </p>
        </div>
        <div className="GRStatsColumn">
          <p className="GRName">
            {
              props.gameData[0].liveData.boxscore.teams.home.coaches[0].person
                .fullName
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
          {!props.gameData[0].liveData.boxscore.teams.away.scratches.length && (
            <p className="NotYet">Not yet posted...</p>
          )}
          {props.gameData[0].liveData.boxscore.teams.away.scratches.map(
            (scratchId, idx) => (
              <p className="GRName" key={idx}>
                {props.scratchesObject[scratchId]}
              </p>
            )
          )}
        </div>
        <div className="GRScratchColumn">
          {!props.gameData[0].liveData.boxscore.teams.home.scratches.length && (
            <p className="NotYet">Not yet posted...</p>
          )}
          {props.gameData[0].liveData.boxscore.teams.home.scratches.map(
            (scratchId, idx) => (
              <p className="GRName" key={idx}>
                {props.scratchesObject[scratchId]}
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
          {!props.gameData[0].liveData.boxscore.officials.length && (
            <p className="NotYet">Not yet posted...</p>
          )}
          {props.gameData[0].liveData.boxscore.officials.map((official) => (
            <p className="GRName" key={official.official.id}>
              {official.official.fullName}{' '}
              <span className="officialType">({official.officialType})</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CSO;
