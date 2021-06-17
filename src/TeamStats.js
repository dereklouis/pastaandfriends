import './styles/TeamStats.css';
import Loading from './Loading';
import BruinsTeamStats from './BruinsTeamStats';
import LeagueStandings from './LeagueStandings';
import FlipTutorial from './FlipTutorial';
import RemoteIcon from './RemoteIcon';
import { flipCard, handleCardFlipAnimation } from './CardFlip';
import { useRef } from 'react';

const TeamStats = (props) => {
  let seasonArr = props.season.split('');
  seasonArr.splice(4, 0, ' - ');

  const TSMaster = useRef(null);

  return (
    <>
      {localStorage.getItem('flipTutorial') === null && (
        <FlipTutorial isMobile={props.isMobile} />
      )}
      {props.teamStats.length ? (
        <>
          <RemoteIcon />
          <div
            id="teamStatsContainer"
            className={`FCAIC ${props.isMobile ? 'mobile' : 'desktop'}`}
          >
            <div
              id="TSBoxWrapper"
              ref={TSMaster}
              onClick={(e) => flipCard(e, TSMaster)}
              onAnimationEnd={(e) => handleCardFlipAnimation(e, TSMaster)}
              className="spin0"
            >
              <BruinsTeamStats
                teamStats={props.teamStats}
                seasonArr={seasonArr}
                teamSelection={props.teamSelection}
              />
              <LeagueStandings
                teamStats={props.teamStats}
                seasonArr={seasonArr}
              />
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TeamStats;
