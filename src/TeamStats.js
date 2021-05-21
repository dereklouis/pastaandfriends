import { useState, useEffect } from 'react';
import Loading from './Loading';
import './TeamStats.css';

function TeamStats(props) {
  return (
    <>
      {props.fullTeamStats.length ? (
        <div className="container">
          {props.fullTeamStats
            .filter((player) => player.primaryPosition.abbreviation !== 'G')
            .map((player) => (
              <div key={player.id} className="playerBox">
                <img
                  alt="flag"
                  className="flag"
                  src={`/flags/${player.nationality}.png`}
                />
                <p className="position">
                  {player.primaryPosition.abbreviation}
                </p>
                <h3 className="playerNumber">#{player.primaryNumber}</h3>
                <h6 className="playerName">{player.fullName}</h6>
                <div className="columnWrap">
                  {player.seasonData ? (
                    <>
                      <p className="playerGamesPlayed">
                        <span className="bold">{player.seasonData.games}</span>{' '}
                        Games Played
                      </p>
                      <p className="playerGoals">
                        <span className="bold">{player.seasonData.goals}</span>{' '}
                        Goals
                      </p>
                      <p className="playerAssists">
                        <span className="bold">
                          {player.seasonData.assists}
                        </span>{' '}
                        Assists
                      </p>
                      <p className="playerPoints">
                        <span className="bold">{player.seasonData.points}</span>{' '}
                        Points
                      </p>
                      <p className="playerPlusMinus">
                        <span className="bold">
                          {player.seasonData.plusMinus}
                        </span>{' '}
                        PlusMinus
                      </p>
                      <p className="playerPPG">
                        <span className="bold">
                          {player.seasonData.powerPlayGoals}
                        </span>{' '}
                        PP Goals
                      </p>
                      <p className="playerSHG">
                        <span className="bold">
                          {player.seasonData.shortHandedGoals}
                        </span>{' '}
                        SH Goals
                      </p>
                      <p className="playerShots">
                        <span className="bold">{player.seasonData.shots}</span>{' '}
                        Shots
                      </p>
                      <p className="playerShotPercentage">
                        <span className="bold">
                          {player.seasonData.shotPct}
                        </span>{' '}
                        Shot %
                      </p>
                      <p className="playerHits">
                        <span className="bold"> {player.seasonData.hits}</span>{' '}
                        Hits
                      </p>
                      <p className="playerPIM">
                        <span className="bold">{player.seasonData.pim}</span>{' '}
                        PIM
                      </p>
                      <p className="playerAVGTimeOnIce">
                        <span className="bold">
                          {player.seasonData.timeOnIcePerGame}
                        </span>{' '}
                        AVG TOI
                      </p>
                    </>
                  ) : (
                    <h4 id="noData">No Data Available</h4>
                  )}
                </div>
              </div>
            ))}
          {props.fullTeamStats
            .filter((player) => player.primaryPosition.abbreviation === 'G')
            .map((player) => (
              <div key={player.id} className="playerBox">
                <img
                  alt="flag"
                  className="flag"
                  src={`/flags/${player.nationality}.png`}
                />
                <p className="position">
                  {player.primaryPosition.abbreviation}
                </p>
                <h3 className="playerNumber">#{player.primaryNumber}</h3>
                <h6 className="playerName">{player.fullName}</h6>
                <div className="columnWrap">
                  {player.seasonData ? (
                    <>
                      <p className="playerGamesPlayed">
                        <span className="bold">{player.seasonData.games}</span>{' '}
                        Games Played
                      </p>
                      <p className="playerSavePercentage">
                        <span className="bold">
                          {player.seasonData.savePercentage
                            .toString()
                            .split('')
                            .slice(2)
                            .join('')}
                        </span>{' '}
                        Save %
                      </p>
                      <p className="playerGAA">
                        <span className="bold">
                          {Number(player.seasonData.goalAgainstAverage).toFixed(
                            2
                          )}
                        </span>{' '}
                        GAA
                      </p>
                      <p className="playerShutouts">
                        <span className="bold">
                          {player.seasonData.shutouts}
                        </span>{' '}
                        Shutouts
                      </p>
                      <p className="playerWins">
                        <span className="bold">{player.seasonData.wins}</span>{' '}
                        Wins
                      </p>
                      <p className="playerLosses">
                        <span className="bold">{player.seasonData.losses}</span>{' '}
                        Losses
                      </p>
                      <p className="playerOT">
                        <span className="bold">{player.seasonData.ot}</span> OT
                        Losses
                      </p>
                      <p className="playerGA">
                        <span className="bold">
                          {player.seasonData.goalsAgainst}
                        </span>{' '}
                        GA
                      </p>
                      <p className="playerSA">
                        <span className="bold">
                          {player.seasonData.shotsAgainst}
                        </span>{' '}
                        SA
                      </p>
                      <p className="playerSaves">
                        <span className="bold">{player.seasonData.saves}</span>{' '}
                        Saves
                      </p>
                      <p className="playerPPSavePercentage">
                        <span className="bold">
                          {Number(
                            player.seasonData.powerPlaySavePercentage
                          ).toFixed(2)}
                        </span>{' '}
                        PP Save %
                      </p>
                      <p className="playerSHSavePercentage">
                        <span className="bold">
                          {Number(
                            player.seasonData.shortHandedSavePercentage
                          ).toFixed(2)}
                        </span>{' '}
                        SH Save %
                      </p>
                    </>
                  ) : (
                    <h4 id="noData">No Data Available</h4>
                  )}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default TeamStats;

{
  /* <div id="buttonContainer" onClick={fetchRoster}>
        <button type="button" id="fetchButtonTop">
          Fetch Data!
        </button>
        <button type="button" id="fetchButtonBottom">
          Fetch Data!
        </button>
      </div> */
}
