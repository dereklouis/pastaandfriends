const LeagueStandings = (props) => {
  const columnOne = props.teamStats[1][0].teamRecords.filter(
    (team, idx) => idx < 11
  );
  const columnTwo = props.teamStats[1][0].teamRecords.filter(
    (team, idx) => idx >= 11 && idx < 22
  );
  const columnThree = props.teamStats[1][0].teamRecords.filter(
    (team, idx) => idx > 21
  );

  return (
    <div id="TSStandingsBox" className="under">
      <p id="TSStandingSeason">{props.seasonArr.join('')}</p>
      <h1 id="TSStandingTitle">LEAGUE STANDINGS</h1>
      <div id="TSStandingColumnsRow">
        <div className="LSColumn">
          {columnOne.map((team) => (
            <div className="TSStandingRow" key={team.team.id}>
              <p className="LeagueRank">{team.leagueRank}. </p>
              <div className="TSStandingLogoContainer FCAIC">
                <img
                  alt="Team Logo"
                  className="TSStandingLogo"
                  src={`teamLogos/team${team.team.id}.png`}
                />
              </div>
              <p className="StandingPoints">
                <span className="TSStandingsBold">{team.points}</span>{' '}
                <span className="TSStandingPoints">PTS,</span>{' '}
                <span className="StandingGP">({team.gamesPlayed} GP)</span>
              </p>
            </div>
          ))}
        </div>
        <div className="TSStandingsDivide"></div>
        <div className="LSColumn">
          {columnTwo.map((team) => (
            <div className="TSStandingRow" key={team.team.id}>
              <p className="LeagueRank">{team.leagueRank}. </p>
              <div className="TSStandingLogoContainer FCAIC">
                <img
                  alt="Team Logo"
                  className="TSStandingLogo"
                  src={`teamLogos/team${team.team.id}.png`}
                />
              </div>
              <p className="StandingPoints">
                <span className="TSStandingsBold">{team.points}</span>{' '}
                <span className="TSStandingPoints">PTS,</span>{' '}
                <span className="StandingGP">({team.gamesPlayed} GP)</span>
              </p>
            </div>
          ))}
        </div>
        <div className="TSStandingsDivide"></div>
        <div className="LSColumn">
          {columnThree.map((team) => (
            <div className="TSStandingRow" key={team.team.id}>
              <p className="LeagueRank">{team.leagueRank}. </p>
              <div className="TSStandingLogoContainer FCAIC">
                <img
                  alt="Team Logo"
                  className="TSStandingLogo"
                  src={`teamLogos/team${team.team.id}.png`}
                />
              </div>
              <p className="StandingPoints">
                <span className="TSStandingsBold">{team.points}</span>{' '}
                <span className="TSStandingPoints">PTS,</span>{' '}
                <span className="StandingGP">({team.gamesPlayed} GP)</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeagueStandings;
