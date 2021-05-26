const ScoringPlays = (props) => {
  return (
    <div id="boxscoreBoxBack" className="under">
      <h1 id="scoringPlays">SCORING PLAYS</h1>
      {props.gameData[0].liveData.plays.scoringPlays.length ? (
        <div id="scoringPlaysMaster">
          {props.gameData[0].liveData.plays.scoringPlays.map((playId, idx) => (
            <div key={idx}>
              <div className="scoringPlayContainer">
                <div className="scoringPlayLogoContainer FCAIC">
                  <img
                    alt="Team Logo"
                    className="scoringPlayLogo"
                    src={`teamLogos/team${props.gameData[0].liveData.plays.allPlays[playId].team.id}.png`}
                  />
                </div>
                <p className="scoringPlay" key={idx}>
                  {props.gameData[0].liveData.plays.allPlays[
                    playId
                  ].result.description.toUpperCase()}
                </p>
              </div>
              {idx !==
                props.gameData[0].liveData.plays.scoringPlays.length - 1 && (
                <div className="scoringPlayRowDivide"></div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p id="NoSPYet">NO SCORING PLAYS YET...</p>
      )}
    </div>
  );
};

export default ScoringPlays;
