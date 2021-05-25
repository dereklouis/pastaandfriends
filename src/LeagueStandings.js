const LeagueStandings = (props) => {
  return (
    <div id="TSStandingsBox" className="under">
      <p id="TSStandingSeason">{props.seasonArr.join('')}</p>
      <h1 id="TSStandingTitle">LEAGUE STANDINGS</h1>
      <div id="TSStandingColumns">
        {props.teamStats[1][0].teamRecords.map((team) => (
          <div className="TSStandingRow" key={team.team.id}>
            <p className="LeagueRank">{team.leagueRank}. </p>
            <img
              alt="Team Logo"
              className="TSStandingLogo"
              src={`teamLogos/team${team.team.id}.png`}
            />
            <p className="StandingPoints">
              <span className="TSStandingsBold">{team.points}</span>{' '}
              <span className="TSStandingPoints">PTS,</span>{' '}
              <span className="StandingGP">({team.gamesPlayed} GP)</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeagueStandings;
