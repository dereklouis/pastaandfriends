import logo from './logo.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const season = '20202021';

function App() {
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
    setRoster(finalData);
  };

  const [roster, setRoster] = useState([]);

  useEffect(() => {
    fetchRoster();
  }, []);

  console.log(111, roster);

  return (
    <div className="container">
      <div id="buttonContainer" onClick={fetchRoster}>
        <button type="button" id="fetchButtonTop">
          Fetch Data!
        </button>
        <button type="button" id="fetchButtonBottom">
          Fetch Data!
        </button>
      </div>
      {roster.length ? (
        roster.map((player) => (
          <div key={player.primaryNumber}>
            <h3>#{player.primaryNumber}</h3>
            <h6>{player.fullName}</h6>
          </div>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default App;
