const GoalieStats = (props) => {
  return (
    <div className="playerBoxStats over">
      <h6 className="playerName">{props.player.fullName.toUpperCase()}</h6>
      <div className="PSCircleRow">
        <div className="PSCircle FCAIC">
          <p className="position">
            {props.player.primaryPosition.abbreviation}
          </p>
        </div>
        <div className="PSCircle FCAIC">
          <h3 className="playerNumber">#{props.player.primaryNumber}</h3>
        </div>
        <div className="PSCircle FCAIC">
          <img
            alt="flag"
            className="flag"
            src={`/flags/${props.player.nationality}.png`}
          />
        </div>
        {props.player.captain === true ? (
          <div className="PSCircle FCAIC">
            <img alt="Captain" className="badge" src="captain.png" />
          </div>
        ) : (
          false
        )}
        {props.player.alternateCaptain === true ? (
          <div className="PSCircle FCAIC">
            <img
              alt="Alternate Captain"
              className="badge"
              src="alternate.png"
            />
          </div>
        ) : (
          false
        )}
      </div>
      <div className="columnWrap">
        {props.player.seasonData ? (
          <>
            <p className="playerGamesPlayed">
              <span className="bold">{props.player.seasonData.games}</span>{' '}
              GAMES PLAYED
            </p>
            <p className="playerSavePercentage">
              <span className="bold">
                {props.player.seasonData.savePercentage
                  .toString()
                  .split('')
                  .slice(2)
                  .join('')}
              </span>{' '}
              SAVE %
            </p>
            <p className="playerGAA">
              <span className="bold">
                {Number(props.player.seasonData.goalAgainstAverage).toFixed(2)}
              </span>{' '}
              GAA
            </p>
            <p className="playerShutouts">
              <span className="bold">{props.player.seasonData.shutouts}</span>{' '}
              SHUTOUTS
            </p>
            <p className="playerWins">
              <span className="bold">{props.player.seasonData.wins}</span> WINS
            </p>
            <p className="playerLosses">
              <span className="bold">{props.player.seasonData.losses}</span>{' '}
              LOSSES
            </p>
            <p className="playerOT">
              <span className="bold">{props.player.seasonData.ot}</span> OT
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
              SAVES
            </p>
            <p className="playerPPSavePercentage">
              <span className="bold">
                {Number(
                  props.player.seasonData.powerPlaySavePercentage
                ).toFixed(2)}
              </span>{' '}
              PP SAVE %
            </p>
            <p className="playerSHSavePercentage">
              <span className="bold">
                {Number(
                  props.player.seasonData.shortHandedSavePercentage
                ).toFixed(2)}
              </span>{' '}
              SH SAVE %
            </p>
          </>
        ) : (
          <h4 id="noData">NO SEASON STATS AVAILABLE</h4>
        )}
      </div>
    </div>
  );
};

export default GoalieStats;
