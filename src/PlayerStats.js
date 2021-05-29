import { useRef, useState } from 'react';
import Loading from './Loading';
import { flipCard, handleAnimation } from './PlayerStatsFunctions';
import FlipTutorial from './FlipTutorial';
import SkaterStats from './SkaterStats';
import SkaterPerson from './SkaterPerson';
import GoalieStats from './GoalieStats';
import GoaliePerson from './GoaliePerson';
import './styles/PlayerStats.css';
import './styles/AutoScroll.css';

window.scrollTo(0, 0);

function PlayerStats(props) {
  let seasonArr = props.season.split('');
  seasonArr.splice(4, 0, ' - ');

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const skaterRefs = useRef([]);

  const goalieRefs = useRef([]);

  const scrollArrowContainer = useRef(null);
  const scrollArrow = useRef(null);

  const PSMaster = useRef(null);

  let skaterCount = 0;
  let goalieCount = 0;

  const handleScroll = (e) => {
    if (e.target.scrollTop > 350) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
    if (e.target.scrollTop < e.target.scrollHeight / 2) {
      scrollArrow.current.className = 'downPosition';
      scrollArrowContainer.current.classList.remove('containerUpPosition');
      scrollArrowContainer.current.classList.add('containerDownPosition');
    } else if (e.target.scrollTop > e.target.scrollHeight / 2) {
      scrollArrow.current.className = '';
      scrollArrowContainer.current.classList.remove('containerDownPosition');
      scrollArrowContainer.current.classList.add('containerUpPosition');
    }
  };

  const autoScroll = () => {
    if (scrollArrow.current.className === 'downPosition') {
      PSMaster.current.scrollTo(0, PSMaster.current.scrollHeight);
    } else {
      PSMaster.current.scrollTo(0, 0);
    }
  };

  return (
    <>
      {localStorage.getItem('flipTutorial') === null && <FlipTutorial />}
      {props.fullTeamStats.length ? (
        <div
          id="PSMaster"
          className="FCAIC"
          onScroll={handleScroll}
          ref={PSMaster}
        >
          <button
            type="button"
            id="autoScrollButton"
            className="FCAIC containerDownPosition"
            onClick={autoScroll}
            disabled={buttonDisabled}
            ref={scrollArrowContainer}
          >
            <img
              src="arrow.png"
              alt="Scroll Arrow"
              id="scrollArrow"
              className="downPosition"
              ref={scrollArrow}
            />
          </button>
          <p id="PSSeason">{seasonArr.join('')}</p>
          <h1 id="PSTitle">REGULAR SEASON PLAYER STATS</h1>
          <div className="playerStatsContainer">
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
