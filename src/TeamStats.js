import './styles/TeamStats.css';
import Loading from './Loading';
import BruinsTeamStats from './BruinsTeamStats';
import LeagueStandings from './LeagueStandings';
import { flipCard, handleCardFlipAnimation } from './CardFlip';
import { useRef } from 'react';

const TeamStats = (props) => {
  let seasonArr = props.season.split('');
  seasonArr.splice(4, 0, ' - ');

  const TSMaster = useRef(null);

  return (
    <>
      {props.teamStats.length ? (
        <div id="teamStatsContainer" className="FCAIC">
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
            />
            <LeagueStandings
              teamStats={props.teamStats}
              seasonArr={seasonArr}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TeamStats;
