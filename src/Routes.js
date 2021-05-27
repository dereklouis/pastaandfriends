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

const Routes = () => {
  const [fullTeamStats, setFullTeamStats] = useState([]);
  const [teamStats, setTeamStats] = useState([]);

  const fetchPlayerStats = async () => {
    const data = await axios.get(
      'https://statsapi.web.nhl.com/api/v1/teams/6/roster'
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
      'https://statsapi.web.nhl.com/api/v1/teams/6/stats'
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
        <Route exact path="/" component={Landing} />
        <Route
          path="/playerstats"
          render={(props) => (
            <PlayerStats
              {...props}
              fullTeamStats={fullTeamStats}
              season={season}
            />
          )}
        />
        <Route
          path="/teamstats"
          render={(props) => (
            <TeamStats {...props} teamStats={teamStats} season={season} />
          )}
        />
        <Route
          path="/boxscore"
          render={(props) => (
            <Boxscore {...props} teamStats={teamStats} season={season} />
          )}
        />
        <Route
          path="/gamerosters"
          render={(props) => (
            <GameRosters {...props} teamStats={teamStats} season={season} />
          )}
        />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Routes;
