import { Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TeamStats from './TeamStats';
import Loading from './Loading';

const season = '20202021';

const pizza = [1, 2, 3, 4, 5];

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
    finalData.sort((a, b) => {
      if (a.seasonData === undefined || b.seasonData === undefined) {
        return 0;
      } else {
        return (
          (b.seasonData.points || b.seasonData.savePercentage) -
          (a.seasonData.points || a.seasonData.savePercentage)
        );
      }
    });
    setFullTeamStats(finalData);
  };

  useEffect(() => {
    fetchRoster();
  }, []);

  console.log('Roster--->', fullTeamStats);

  return (
    <>
      <Route
        path="/"
        render={(props) => (
          <TeamStats {...props} fullTeamStats={fullTeamStats} />
        )}
      />
    </>
  );
};

export default Routes;
