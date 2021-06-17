import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import SlideMenu from './SlideMenu';
import Dimmer from './Dimmer';
import Landing from './Landing';
import PlayerStats from './PlayerStats';
import TeamStats from './TeamStats';
import Boxscore from './Boxscore';
import GameRosters from './GameRosters';
import ErrorPage from './ErrorPage';

const season = '20202021';

let isMobile = false;

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  isMobile = true;
}

const Routes = () => {
  const [fullTeamStats, setFullTeamStats] = useState([]);
  const [teamStats, setTeamStats] = useState([]);

  if (window.localStorage.getItem('teamSelection') === null) {
    window.localStorage.setItem('teamSelection', 6);
  }

  const teamSelection = Number(window.localStorage.getItem('teamSelection'));

  const fetchPlayerStats = async () => {
    const data = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/teams/${teamSelection}/roster`
    );
    let finalData = [];
    for (let player of data.data.roster) {
      const playerData = await axios.get(
        `https://statsapi.web.nhl.com/api/v1/people/${player.person.id}`
      );
      let person = { ...playerData.data.people[0] };
      const seasonData = await axios.get(
        `https://statsapi.web.nhl.com/api/v1/people/${player.person.id}/stats?stats=statsSingleSeason&season=${season}`
      );
      if (seasonData.data.stats[0].splits[0]) {
        person.seasonData = seasonData.data.stats[0].splits[0].stat;
      }
      finalData.push(person);
    }
    setFullTeamStats(finalData);
  };

  const fetchData = async () => {
    await fetchPlayerStats();
    await fetchTeamStats();
  };

  const fetchTeamStats = async () => {
    let finalDataArr = [];
    const data = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/teams/${teamSelection}/stats`
    );
    const standingsData = await axios.get(
      'https://statsapi.web.nhl.com/api/v1/standings/byLeague'
    );
    finalDataArr.push(data.data.stats);
    finalDataArr.push(standingsData.data.records);
    setTeamStats(finalDataArr);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <SlideMenu />
      <Dimmer />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <PlayerStats
              {...props}
              fullTeamStats={fullTeamStats}
              season={season}
            />
          )}
        />
        <Route
          exact
          path="/mancave"
          render={(props) => (
            <Landing
              {...props}
              teamSelection={teamSelection}
              isMobile={isMobile}
            />
          )}
        />
        <Route
          path="/playerstats"
          render={(props) => (
            <PlayerStats
              {...props}
              fullTeamStats={fullTeamStats}
              season={season}
              isMobile={isMobile}
            />
          )}
        />
        <Route
          path="/teamstats"
          render={(props) => (
            <TeamStats
              {...props}
              teamStats={teamStats}
              teamSelection={teamSelection}
              season={season}
              isMobile={isMobile}
            />
          )}
        />
        <Route
          path="/boxscore"
          render={(props) => (
            <Boxscore
              {...props}
              teamStats={teamStats}
              teamSelection={teamSelection}
              season={season}
              isMobile={isMobile}
            />
          )}
        />
        <Route
          path="/gamerosters"
          render={(props) => (
            <GameRosters
              {...props}
              teamStats={teamStats}
              teamSelection={teamSelection}
              season={season}
              isMobile={isMobile}
            />
          )}
        />
        <Route path="/" component={ErrorPage} isMobile={isMobile} />
      </Switch>
    </>
  );
};

export default Routes;
