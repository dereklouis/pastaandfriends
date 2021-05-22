const GoalieStats = (props) => {
  return (
    <div className="playerBoxStats over">
      <img
        alt="flag"
        className="flag"
        src={`/flags/${props.player.nationality}.png`}
      />
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
            <p className="playerSavePercentage">
              <span className="bold">
                {props.player.seasonData.savePercentage
                  .toString()
                  .split('')
                  .slice(2)
                  .join('')}
              </span>{' '}
              Save %
            </p>
            <p className="playerGAA">
              <span className="bold">
                {Number(props.player.seasonData.goalAgainstAverage).toFixed(2)}
              </span>{' '}
              GAA
            </p>
            <p className="playerShutouts">
              <span className="bold">{props.player.seasonData.shutouts}</span>{' '}
              Shutouts
            </p>
            <p className="playerWins">
              <span className="bold">{props.player.seasonData.wins}</span> Wins
            </p>
            <p className="playerLosses">
              <span className="bold">{props.player.seasonData.losses}</span>{' '}
              Losses
            </p>
            <p className="playerOT">
              <span className="bold">{props.player.seasonData.ot}</span> OT
              Losses
            </p>
            <p className="playerGA">
              <span className="bold">
                {props.player.seasonData.goalsAgainst}
              </span>{' '}
              GA
            </p>
            <p className="playerSA">
              <span className="bold">
                {props.player.seasonData.shotsAgainst}
              </span>{' '}
              SA
            </p>
            <p className="playerSaves">
              <span className="bold">{props.player.seasonData.saves}</span>{' '}
              Saves
            </p>
            <p className="playerPPSavePercentage">
              <span className="bold">
                {Number(
                  props.player.seasonData.powerPlaySavePercentage
                ).toFixed(2)}
              </span>{' '}
              PP Save %
            </p>
            <p className="playerSHSavePercentage">
              <span className="bold">
                {Number(
                  props.player.seasonData.shortHandedSavePercentage
                ).toFixed(2)}
              </span>{' '}
              SH Save %
            </p>
          </>
        ) : (
          <h4 id="noData">No Season Stats Available</h4>
        )}
      </div>
    </div>
  );
};

export default GoalieStats;
