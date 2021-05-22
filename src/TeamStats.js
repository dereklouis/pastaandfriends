import { useState, useEffect, useRef } from 'react';
import Loading from './Loading';
import './TeamStats.css';

function TeamStats(props) {
  const skaterRefs = useRef([]);

  const goalieRefs = useRef([]);

  const flipCard = (e, idx, type) => {
    if (type === 'S') {
      const sElement = skaterRefs.current[String(idx)];
      if (sElement.classList.contains('spin0')) {
        sElement.classList.remove('spin0');
        sElement.classList.add('spin1');
      } else if (sElement.classList.contains('spin2')) {
        sElement.classList.remove('spin2');
        sElement.classList.add('spin3');
      }
    } else {
      const gElement = goalieRefs.current[String(idx)];
      if (gElement.classList.contains('spin0')) {
        gElement.classList.remove('spin0');
        gElement.classList.add('spin1');
      } else if (gElement.classList.contains('spin2')) {
        gElement.classList.remove('spin2');
        gElement.classList.add('spin3');
      }
    }
  };

  const handleAnimation = (e, idx, type) => {
    if (type === 'S') {
      const sElement = skaterRefs.current[String(idx)];
      if (sElement.classList.contains('spin1')) {
        sElement.classList.remove('spin1');
        sElement.classList.add('spin2');
        sElement.firstChild.classList.remove('over');
        sElement.firstChild.classList.add('under');
        sElement.lastChild.classList.remove('under');
        sElement.lastChild.classList.add('over');
      } else if (sElement.classList.contains('spin3')) {
        sElement.classList.remove('spin3');
        sElement.classList.add('spin4');
        sElement.firstChild.classList.remove('under');
        sElement.firstChild.classList.add('over');
        sElement.lastChild.classList.remove('over');
        sElement.lastChild.classList.add('under');
      } else if (sElement.classList.contains('spin4')) {
        sElement.classList.remove('spin4');
        sElement.classList.add('spin0');
      }
    } else {
      const gElement = goalieRefs.current[String(idx)];
      if (gElement.classList.contains('spin1')) {
        gElement.classList.remove('spin1');
        gElement.classList.add('spin2');
        gElement.firstChild.classList.remove('over');
        gElement.firstChild.classList.add('under');
        gElement.lastChild.classList.remove('under');
        gElement.lastChild.classList.add('over');
      } else if (gElement.classList.contains('spin3')) {
        gElement.classList.remove('spin3');
        gElement.classList.add('spin4');
        gElement.firstChild.classList.remove('under');
        gElement.firstChild.classList.add('over');
        gElement.lastChild.classList.remove('over');
        gElement.lastChild.classList.add('under');
      } else if (gElement.classList.contains('spin4')) {
        gElement.classList.remove('spin4');
        gElement.classList.add('spin0');
      }
    }
  };

  return (
    <>
      {props.fullTeamStats.length ? (
        <div className="container">
          {props.fullTeamStats
            .filter((player) => player.primaryPosition.abbreviation !== 'G')
            .map((player, idx) => (
              <div
                key={player.id}
                ref={(element) => skaterRefs.current.push(element)}
                onClick={(e) => flipCard(e, idx, 'S')}
                className="cardContainer spin0"
                onAnimationEnd={(e) => handleAnimation(e, idx, 'S')}
              >
                <div className="playerBoxStats over">
                  <img
                    alt="flag"
                    className="flag"
                    src={`/flags/${player.nationality}.png`}
                  />
                  {player.captain === true ? (
                    <img alt="Captain" className="badge" src="captain.png" />
                  ) : (
                    false
                  )}
                  {player.alternateCaptain === true ? (
                    <img
                      alt="Alternate Captain"
                      className="badge"
                      src="alternate.png"
                    />
                  ) : (
                    false
                  )}
                  <p className="position">
                    {player.primaryPosition.abbreviation}
                  </p>
                  <h3 className="playerNumber">#{player.primaryNumber}</h3>
                  <h6 className="playerName">{player.fullName}</h6>
                  <div className="columnWrap">
                    {player.seasonData ? (
                      <>
                        <p className="playerGamesPlayed">
                          <span className="bold">
                            {player.seasonData.games}
                          </span>{' '}
                          Games Played
                        </p>
                        <p className="playerGoals">
                          <span className="bold">
                            {player.seasonData.goals}
                          </span>{' '}
                          Goals
                        </p>
                        <p className="playerAssists">
                          <span className="bold">
                            {player.seasonData.assists}
                          </span>{' '}
                          Assists
                        </p>
                        <p className="playerPoints">
                          <span className="bold">
                            {player.seasonData.points}
                          </span>{' '}
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
                          <span className="bold">
                            {player.seasonData.shots}
                          </span>{' '}
                          Shots
                        </p>
                        <p className="playerShotPercentage">
                          <span className="bold">
                            {player.seasonData.shotPct}
                          </span>{' '}
                          Shot %
                        </p>
                        <p className="playerHits">
                          <span className="bold">
                            {' '}
                            {player.seasonData.hits}
                          </span>{' '}
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
                      <h4 id="noData">No Season Stats Available</h4>
                    )}
                  </div>
                </div>
                <div className="playerBoxPerson under">
                  <img
                    alt="flag"
                    className="flag"
                    src={`/flags/${player.nationality}.png`}
                  />
                  {player.captain === true ? (
                    <img alt="Captain" className="badge" src="captain.png" />
                  ) : (
                    false
                  )}
                  {player.alternateCaptain === true ? (
                    <img
                      alt="Alternate Captain"
                      className="badge"
                      src="alternate.png"
                    />
                  ) : (
                    false
                  )}
                  <p className="position">
                    {player.primaryPosition.abbreviation}
                  </p>
                  <h3 className="playerNumber">#{player.primaryNumber}</h3>
                  <h6 className="playerName">{player.fullName}</h6>
                  <div className="wrapContainer">
                    <div className="columnWrapCenter">
                      <p className="playerHeight">
                        Height: <span className="bold">{player.height}</span>
                      </p>
                      <p className="playerCurrentAge">
                        Age: <span className="bold">{player.currentAge}</span>
                      </p>
                      <p className="playerBirthCountry">
                        Birth Country:{' '}
                        <span className="bold">{player.birthCountry}</span>
                      </p>
                      {player.birthStateProvince ? (
                        <p className="playerBirthCity">
                          Birth City:{' '}
                          <span className="bold">{player.birthCity}</span>
                        </p>
                      ) : (
                        <p className="playerShootsCatches">
                          Shoots/Catches:{' '}
                          <span className="bold">{player.shootsCatches}</span>
                        </p>
                      )}
                      <p className="playerWeight">
                        Weight: <span className="bold">{player.weight}</span>
                      </p>
                      <p className="playerBirthday">
                        Birthday:{' '}
                        <span className="bold">{player.birthDate}</span>
                      </p>
                      {player.birthStateProvince && (
                        <p className="playerBirthStateProvince">
                          Birth State/Province:{' '}
                          <span className="bold">
                            {player.birthStateProvince}
                          </span>
                        </p>
                      )}
                      {player.birthStateProvince ? (
                        <p className="playerShootsCatches">
                          Shoots/Catches:{' '}
                          <span className="bold">{player.shootsCatches}</span>
                        </p>
                      ) : (
                        <p className="playerBirthCity">
                          Birth City:{' '}
                          <span className="bold">{player.birthCity}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {props.fullTeamStats
            .filter((player) => player.primaryPosition.abbreviation === 'G')
            .map((player, idx) => (
              <div
                key={player.id}
                ref={(element) => goalieRefs.current.push(element)}
                className="cardContainer spin0"
                onClick={(e) => flipCard(e, idx, 'G')}
                onAnimationEnd={(e) => handleAnimation(e, idx, 'G')}
              >
                <div className="playerBoxStats over">
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
                          <span className="bold">
                            {player.seasonData.games}
                          </span>{' '}
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
                            {Number(
                              player.seasonData.goalAgainstAverage
                            ).toFixed(2)}
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
                          <span className="bold">
                            {player.seasonData.losses}
                          </span>{' '}
                          Losses
                        </p>
                        <p className="playerOT">
                          <span className="bold">{player.seasonData.ot}</span>{' '}
                          OT Losses
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
                          <span className="bold">
                            {player.seasonData.saves}
                          </span>{' '}
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
                      <h4 id="noData">No Season Stats Available</h4>
                    )}
                  </div>
                </div>
                <div className="playerBoxPerson under">
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
                  <div className="wrapContainer">
                    <div className="columnWrapCenter">
                      <p className="playerHeight">
                        Height: <span className="bold">{player.height}</span>
                      </p>
                      <p className="playerCurrentAge">
                        Age: <span className="bold">{player.currentAge}</span>
                      </p>
                      <p className="playerBirthCountry">
                        Birth Country:{' '}
                        <span className="bold">{player.birthCountry}</span>
                      </p>
                      {player.birthStateProvince ? (
                        <p className="playerBirthCity">
                          Birth City:{' '}
                          <span className="bold">{player.birthCity}</span>
                        </p>
                      ) : (
                        <p className="playerShootsCatches">
                          Shoots/Catches:{' '}
                          <span className="bold">{player.shootsCatches}</span>
                        </p>
                      )}
                      <p className="playerWeight">
                        Weight: <span className="bold">{player.weight}</span>
                      </p>
                      <p className="playerBirthday">
                        Birthday:{' '}
                        <span className="bold">{player.birthDate}</span>
                      </p>
                      {player.birthStateProvince && (
                        <p className="playerBirthStateProvince">
                          Birth State/Province:{' '}
                          <span className="bold">
                            {player.birthStateProvince}
                          </span>
                        </p>
                      )}
                      {player.birthStateProvince ? (
                        <p className="playerShootsCatches">
                          Shoots/Catches:{' '}
                          <span className="bold">{player.shootsCatches}</span>
                        </p>
                      ) : (
                        <p className="playerBirthCity">
                          Birth City:{' '}
                          <span className="bold">{player.birthCity}</span>
                        </p>
                      )}
                    </div>
                  </div>
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
