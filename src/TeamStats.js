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
                        {`${player.seasonData.games} Games Played`}
                      </p>
                      <p className="playerGoals">
                        {`${player.seasonData.goals} Goals`}
                      </p>
                      <p className="playerAssists">
                        {`${player.seasonData.assists} Assists`}
                      </p>
                      <p className="playerPoints">
                        {`${player.seasonData.points} Points`}
                      </p>
                      <p className="playerPlusMinus">
                        {`${player.seasonData.plusMinus} PlusMinus`}
                      </p>
                      <p className="playerPPG">
                        {`${player.seasonData.powerPlayGoals} PP Goals`}
                      </p>
                      <p className="playerSHG">
                        {`${player.seasonData.shortHandedGoals} SH Goals`}
                      </p>
                      <p className="playerShots">
                        {`${player.seasonData.shots} Shots`}
                      </p>
                      <p className="playerShotPercentage">
                        {`${player.seasonData.shotPct} Shot %`}
                      </p>
                      <p className="playerHits">
                        {`${player.seasonData.hits} Hits`}
                      </p>
                      <p className="playerPIM">
                        {`${player.seasonData.pim} PIM`}
                      </p>
                      <p className="playerAVGTimeOnIce">
                        {`${player.seasonData.timeOnIcePerGame} AVG TOI`}
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
                        {`${player.seasonData.games} Games Played`}
                      </p>
                      <p className="playerSavePercentage">
                        {`${player.seasonData.savePercentage
                          .toString()
                          .split('')
                          .slice(2)
                          .join('')} Save %`}
                      </p>
                      <p className="playerGAA">
                        {`${Number(
                          player.seasonData.goalAgainstAverage
                        ).toFixed(2)} GAA`}
                      </p>
                      <p className="playerShutouts">
                        {`${player.seasonData.shutouts} Shutouts`}
                      </p>
                      <p className="playerWins">
                        {`${player.seasonData.wins} Wins`}
                      </p>
                      <p className="playerLosses">
                        {`${player.seasonData.losses} Losses`}
                      </p>
                      <p className="playerOT">
                        {`${player.seasonData.ot} OT Losses`}
                      </p>
                      <p className="playerGA">
                        {`${player.seasonData.goalsAgainst} GA`}
                      </p>
                      <p className="playerSA">
                        {`${player.seasonData.shotsAgainst} SA`}
                      </p>
                      <p className="playerSaves">
                        {`${player.seasonData.saves} Saves`}
                      </p>
                      <p className="playerPPSavePercentage">
                        {`${Number(
                          player.seasonData.powerPlaySavePercentage
                        ).toFixed(2)} PP Save %`}
                      </p>
                      <p className="playerSHSavePercentage">
                        {`${Number(
                          player.seasonData.shortHandedSavePercentage
                        ).toFixed(2)} SH Save %`}
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
