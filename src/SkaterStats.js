const SkaterStats = (props) => {
  return (
    <div className="playerBoxStats over">
      <img
        alt="flag"
        className="flag"
        src={`/flags/${props.player.nationality}.png`}
      />
      {props.player.captain === true ? (
        <img alt="Captain" className="badge" src="captain.png" />
      ) : (
        false
      )}
      {props.player.alternateCaptain === true ? (
        <img alt="Alternate Captain" className="badge" src="alternate.png" />
      ) : (
        false
      )}
      <p className="position">{props.player.primaryPosition.abbreviation}</p>
      <h3 className="playerNumber">#{props.player.primaryNumber}</h3>
      <h6 className="playerName">{props.player.fullName}</h6>
      <div className="columnWrap">
        {props.player.seasonData ? (
          <>
            <p className="playerGamesPlayed">
              <span className="bold">{props.player.seasonData.games}</span>{' '}
              Games Played
            </p>
            <p className="playerGoals">
              <span className="bold">{props.player.seasonData.goals}</span>{' '}
              Goals
            </p>
            <p className="playerAssists">
              <span className="bold">{props.player.seasonData.assists}</span>{' '}
              Assists
            </p>
            <p className="playerPoints">
              <span className="bold">{props.player.seasonData.points}</span>{' '}
              Points
            </p>
            <p className="playerPlusMinus">
              <span className="bold">{props.player.seasonData.plusMinus}</span>{' '}
              PlusMinus
            </p>
            <p className="playerPPG">
              <span className="bold">
                {props.player.seasonData.powerPlayGoals}
              </span>{' '}
              PP Goals
            </p>
            <p className="playerSHG">
              <span className="bold">
                {props.player.seasonData.shortHandedGoals}
              </span>{' '}
              SH Goals
            </p>
            <p className="playerShots">
              <span className="bold">{props.player.seasonData.shots}</span>{' '}
              Shots
            </p>
            <p className="playerShotPercentage">
              <span className="bold">{props.player.seasonData.shotPct}</span>{' '}
              Shot %
            </p>
            <p className="playerHits">
              <span className="bold"> {props.player.seasonData.hits}</span> Hits
            </p>
            <p className="playerPIM">
              <span className="bold">{props.player.seasonData.pim}</span> PIM
            </p>
            <p className="playerAVGTimeOnIce">
              <span className="bold">
                {props.player.seasonData.timeOnIcePerGame}
              </span>{' '}
              AVG TOI
            </p>
          </>
        ) : (
          <h4 id="noData">No Season Stats Available</h4>
        )}
      </div>
    </div>
  );
};

export default SkaterStats;
