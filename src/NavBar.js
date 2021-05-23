import './styles/NavBar.css';
import toggleBurgerSlide from './ToggleBurgerSlide';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div id="navBarWrapper">
      <Link className="navLink" to="/playerstats">
        Player Stats
      </Link>
      <Link className="navLink" to="/teamstats">
        Team Stats
      </Link>
      <Link to="/">
        <div id="navMiddle">
          <h1 id="navTitle">Pasta</h1>
          <img src="pastalogo.png" id="navLogo" alt="pasta" />
          <h1 id="navTitle">Friends</h1>
        </div>
      </Link>
      <Link className="navLink" to="/boxscore">
        Boxscore
      </Link>
      <Link className="navLink" to="/gamerosters">
        Game Rosters
      </Link>
      <div id="stickContainer" onClick={toggleBurgerSlide}>
        <img
          src="stick.png"
          className="stick0Close"
          id="stick0"
          alt="hockey stick"
        />
        <img
          src="stick.png"
          className="stick1Close"
          id="stick1"
          alt="hockey stick"
        />
      </div>
    </div>
  );
};

export default NavBar;
