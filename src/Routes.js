import { Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import PlayerStats from './PlayerStats';
import TeamStats from './TeamStats';
import Landing from './Landing';
import Loading from './Loading';

const season = '20202021';

const Routes = () => {
  const [fullTeamStats, setFullTeamStats] = useState([]);

  const fetchRoster = async () => {
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

  useEffect(() => {
    fetchRoster();
  }, []);

  console.log('Roster--->', fullTeamStats);

  return (
    <>
      <NavBar />
      <Route path="/loading" component={Loading} />
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
        render={(props) => <TeamStats {...props} season={season} />}
      />
    </>
  );
};

export default Routes;
