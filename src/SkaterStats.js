const SkaterStats = (props) => {
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
            src={`/flags/${props.player.birthCountry}.png`}
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
            <p className="playerGamesPlayed PSRow">
              <span className="bold">{props.player.seasonData.games}</span>{' '}
              GAMES PLAYED
            </p>
            <p className="playerGoals PSRow">
              <span className="bold">{props.player.seasonData.goals}</span>{' '}
              GOALS
            </p>
            <p className="playerAssists PSRow">
              <span className="bold">{props.player.seasonData.assists}</span>{' '}
              ASSISTS
            </p>
            <p className="playerPoints PSRow">
              <span className="bold">{props.player.seasonData.points}</span>{' '}
              POINTS
            </p>
            <div className="PSDividingLine blackBG"></div>
            <p className="playerPlusMinus PSRow">
              <span className="bold">{props.player.seasonData.plusMinus}</span>{' '}
              PLUS/MINUS
            </p>
            <p className="playerPPG PSRow">
              <span className="bold">
                {props.player.seasonData.powerPlayGoals}
              </span>{' '}
              PP GOALS
            </p>
            <p className="playerSHG PSRow">
              <span className="bold">
                {props.player.seasonData.shortHandedGoals}
              </span>{' '}
              SH GOALS
            </p>
            <p className="playerShots PSRow">
              <span className="bold">{props.player.seasonData.shots}</span>{' '}
              SHOTS
            </p>
            <div className="PSDividingLine blackBG"></div>
            <p className="playerShotPercentage PSRow">
              <span className="bold">{props.player.seasonData.shotPct}</span>{' '}
              SHOT %
            </p>
            <p className="playerHits PSRow">
              <span className="bold"> {props.player.seasonData.hits}</span> HITS
            </p>
            <p className="playerPIM PSRow">
              <span className="bold">{props.player.seasonData.pim}</span> PIM
            </p>
            <p className="playerAVGTimeOnIce PSRow">
              <span className="bold">
                {props.player.seasonData.timeOnIcePerGame}
              </span>{' '}
              AVG TOI
            </p>
          </>
        ) : (
          <h4 id="noData">NO SEASON STATS AVAILABLE</h4>
        )}
      </div>
    </div>
  );
};

export default SkaterStats;
