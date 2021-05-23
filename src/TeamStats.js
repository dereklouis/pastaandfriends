import './styles/TeamStats.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';

const TeamStats = (props) => {
  let seasonArr = props.season.split('');
  seasonArr.splice(4, 0, ' - ');
  return (
    <>
      {Object.keys(props.teamStats).length ? (
        <div id="teamStatsContainer" className="FCAIC">
          <div id="teamStatsBox">
            <img alt="Bruins Logo" src="bruinsLogo.png" id="TSBruinsLogo" />
            <p id="TSSeason">{seasonArr.join('')}</p>
            <h1 id="TSTitle">Regular Season Team Stats</h1>
            <div id="TSWrapContainer">
              <div id="TSColumnWrap">
                <p className="teamWins TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.wins}
                  </span>{' '}
                  Wins{' '}
                  <span className="TSNote">
                    ... ({props.teamStats[1].splits[0].stat.wins})
                  </span>
                </p>
                <p className="teamOT TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.ot}
                  </span>{' '}
                  OT{' '}
                  <span className="TSNote">
                    ... ({props.teamStats[1].splits[0].stat.ot})
                  </span>
                </p>
                <p className="teamGoalsAverage TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.goalsPerGame}
                  </span>{' '}
                  Goals For Avg.{' '}
                  <span className="TSNote">
                    ... ({props.teamStats[1].splits[0].stat.goalsPerGame})
                  </span>
                </p>
                <p className="teamPP% TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.powerPlayPercentage}
                  </span>{' '}
                  PP %{' '}
                  <span className="TSNote">
                    ... ({props.teamStats[1].splits[0].stat.powerPlayPercentage}
                    )
                  </span>
                </p>
                <p className="teamGamesPlayed TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.gamesPlayed}
                  </span>{' '}
                  Games Played
                </p>
                <p className="teamLosses TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.losses}
                  </span>{' '}
                  Losses{' '}
                  <span className="TSNote">
                    ... ({props.teamStats[1].splits[0].stat.losses})
                  </span>
                </p>
                <p className="teamPoints TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.pts}
                  </span>{' '}
                  Points{' '}
                  <span className="TSNote">
                    ... ({props.teamStats[1].splits[0].stat.pts})
                  </span>
                </p>
                <p className="teamGoalsAgainst TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.goalsAgainstPerGame}
                  </span>{' '}
                  Goals Agst. Avg.{' '}
                  <span className="TSNote">
                    ... ({props.teamStats[1].splits[0].stat.goalsAgainstPerGame}
                    )
                  </span>
                </p>
                <p className="teamPK% TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.penaltyKillPercentage}
                  </span>{' '}
                  PK %{' '}
                  <span className="TSNote">
                    ... (
                    {props.teamStats[1].splits[0].stat.penaltyKillPercentage})
                  </span>
                </p>
                <p className="teamFO% TSData">
                  <span className="TSBold">
                    {props.teamStats[0].splits[0].stat.faceOffWinPercentage}
                  </span>{' '}
                  FO %{' '}
                  <span className="TSNote">
                    ... (
                    {props.teamStats[1].splits[0].stat.faceOffWinPercentage})
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TeamStats;
