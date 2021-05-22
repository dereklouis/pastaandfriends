import { useRef } from 'react';
import Loading from './Loading';
import SkaterStats from './SkaterStats';
import SkaterPerson from './SkaterPerson';
import GoalieStats from './GoalieStats';
import GoaliePerson from './GoaliePerson';
import './PlayerStats.css';

function PlayerStats(props) {
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

  let skaterCount = 0;
  let goalieCount = 0;

  return (
    <>
      {props.fullTeamStats.length ? (
        <div className="container">
          {props.fullTeamStats
            .filter(
              (player) =>
                player.primaryPosition.abbreviation !== 'G' && player.seasonData
            )
            .sort((a, b) => b.seasonData.points - a.seasonData.points)
            .map((player, idx) => {
              skaterCount++;
              return (
                <div
                  key={player.id}
                  ref={(element) => skaterRefs.current.push(element)}
                  onClick={(e) => flipCard(e, idx, 'S')}
                  className="cardContainer spin0"
                  onAnimationEnd={(e) => handleAnimation(e, idx, 'S')}
                >
                  <SkaterStats player={player} />
                  <SkaterPerson player={player} />
                </div>
              );
            })}
          {props.fullTeamStats
            .filter(
              (player) =>
                player.primaryPosition.abbreviation !== 'G' &&
                !player.seasonData
            )
            .map((player, idx) => (
              <div
                key={player.id}
                ref={(element) => skaterRefs.current.push(element)}
                onClick={(e) => flipCard(e, idx + skaterCount, 'S')}
                className="cardContainer spin0"
                onAnimationEnd={(e) =>
                  handleAnimation(e, idx + skaterCount, 'S')
                }
              >
                <SkaterStats player={player} />
                <SkaterPerson player={player} />
              </div>
            ))}
          {props.fullTeamStats
            .filter(
              (player) =>
                player.primaryPosition.abbreviation === 'G' && player.seasonData
            )
            .sort(
              (a, b) =>
                b.seasonData.savePercentage - a.seasonData.savePercentage
            )
            .map((player, idx) => {
              goalieCount++;
              return (
                <div
                  key={player.id}
                  ref={(element) => goalieRefs.current.push(element)}
                  className="cardContainer spin0"
                  onClick={(e) => flipCard(e, idx, 'G')}
                  onAnimationEnd={(e) => handleAnimation(e, idx, 'G')}
                >
                  <GoalieStats player={player} />
                  <GoaliePerson player={player} />
                </div>
              );
            })}
          {props.fullTeamStats
            .filter(
              (player) =>
                player.primaryPosition.abbreviation === 'G' &&
                !player.seasonData
            )
            .map((player, idx) => (
              <div
                key={player.id}
                ref={(element) => goalieRefs.current.push(element)}
                className="cardContainer spin0"
                onClick={(e) => flipCard(e, idx + goalieCount, 'G')}
                onAnimationEnd={(e) =>
                  handleAnimation(e, idx + goalieCount, 'G')
                }
              >
                <GoalieStats player={player} />
                <GoaliePerson player={player} />
              </div>
            ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default PlayerStats;
