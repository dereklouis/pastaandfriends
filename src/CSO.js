const CSO = (props) => {
  return (
    <div id="gameRosterBoxBack" className="under">
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
        <p className="GRCategory">HEAD COACH</p>
      </div>
      <div className="GRRowSB">
        <div className="GRStatsColumn">
          <p className="GRName">
            {props.gameData[0].liveData.boxscore.teams.away.coaches[0].person.fullName.toUpperCase()}
          </p>
        </div>
        <div className="GRStatsColumn">
          <p className="GRName">
            {props.gameData[0].liveData.boxscore.teams.home.coaches[0].person.fullName.toUpperCase()}
          </p>
        </div>
      </div>
      <div className="GRLine" />
      <div className="GRRowC">
        <p className="GRCategory">SCRATCHES</p>
      </div>
      <div className="GRRowSB">
        <div className="GRScratchColumn">
          {!props.gameData[0].liveData.boxscore.teams.away.scratches.length && (
            <p className="NotYet">NOT YET POSTED...</p>
          )}
          {props.gameData[0].liveData.boxscore.teams.away.scratches.map(
            (scratchId, idx) => (
              <p className="GRNameScratch" key={idx}>
                {props.scratchesObject[scratchId].toUpperCase()}
              </p>
            )
          )}
        </div>
        <div className="GRScratchColumn">
          {!props.gameData[0].liveData.boxscore.teams.home.scratches.length && (
            <p className="NotYet">NOT YET POSTED...</p>
          )}
          {props.gameData[0].liveData.boxscore.teams.home.scratches.map(
            (scratchId, idx) => (
              <p className="GRNameScratch" key={idx}>
                {props.scratchesObject[scratchId].toUpperCase()}
              </p>
            )
          )}
        </div>
      </div>
      <div className="GRLine" />
      <div className="GRRowC">
        <p id="officialsLabel" className="GRCategory">
          OFFICIALS
        </p>
      </div>
      <div className="GRRowC">
        <div className="GRStatsColumnOfficials">
          {!props.gameData[0].liveData.boxscore.officials.length && (
            <p className="NotYet">NOT YET POSTED...</p>
          )}
          {props.gameData[0].liveData.boxscore.officials.map((official) => (
            <p className="GRName" key={official.official.id}>
              {official.official.fullName.toUpperCase()}{' '}
              <span className="officialType">
                ({official.officialType.toUpperCase()})
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CSO;
