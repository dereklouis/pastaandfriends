import { useRef } from 'react';
import Loading from './Loading';
import { flipCard, handleAnimation } from './PlayerStatsFunctions';
import SkaterStats from './SkaterStats';
import SkaterPerson from './SkaterPerson';
import GoalieStats from './GoalieStats';
import GoaliePerson from './GoaliePerson';
import './styles/PlayerStats.css';

function PlayerStats(props) {
  let seasonArr = props.season.split('');
  seasonArr.splice(4, 0, ' - ');

  const skaterRefs = useRef([]);

  const goalieRefs = useRef([]);

  let skaterCount = 0;
  let goalieCount = 0;

  return (
    <>
      {props.fullTeamStats.length ? (
        <div id="PSMaster" className="FCAIC">
          <p id="PSSeason">{seasonArr.join('')}</p>
          <h1 id="PSTitle">REGULAR SEASON PLAYER STATS</h1>
          <div className="container">
            {props.fullTeamStats
              .filter(
                (player) =>
                  player.primaryPosition.abbreviation !== 'G' &&
                  player.seasonData
              )
              .sort((a, b) => b.seasonData.points - a.seasonData.points)
              .map((player, idx) => {
                skaterCount++;
                return (
                  <div
                    key={player.id}
                    ref={(element) => skaterRefs.current.push(element)}
                    onClick={(e) =>
                      flipCard(e, idx, 'S', skaterRefs, goalieRefs)
                    }
                    className="cardContainer spin0"
                    onAnimationEnd={(e) =>
                      handleAnimation(e, idx, 'S', skaterRefs, goalieRefs)
                    }
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
                  onClick={(e) =>
                    flipCard(e, idx + skaterCount, 'S', skaterRefs, goalieRefs)
                  }
                  className="cardContainer spin0"
                  onAnimationEnd={(e) =>
                    handleAnimation(
                      e,
                      idx + skaterCount,
                      'S',
                      skaterRefs,
                      goalieRefs
                    )
                  }
                >
                  <SkaterStats player={player} />
                  <SkaterPerson player={player} />
                </div>
              ))}
            {props.fullTeamStats
              .filter(
                (player) =>
                  player.primaryPosition.abbreviation === 'G' &&
                  player.seasonData
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
                    onClick={(e) =>
                      flipCard(e, idx, 'G', skaterRefs, goalieRefs)
                    }
                    onAnimationEnd={(e) =>
                      handleAnimation(e, idx, 'G', skaterRefs, goalieRefs)
                    }
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
                  onClick={(e) =>
                    flipCard(e, idx + goalieCount, 'G', skaterRefs, goalieRefs)
                  }
                  onAnimationEnd={(e) =>
                    handleAnimation(
                      e,
                      idx + goalieCount,
                      'G',
                      skaterRefs,
                      goalieRefs
                    )
                  }
                >
                  <GoalieStats player={player} />
                  <GoaliePerson player={player} />
                </div>
              ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default PlayerStats;
