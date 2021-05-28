import './styles/NavBar.css';
import toggleBurgerSlide from './ToggleBurgerSlide';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const pastaClose = () => {
    const slideMenu = document.getElementById('SMContainer');
    if (slideMenu.className === 'SMOpen') {
      toggleBurgerSlide();
    }
  };
  return (
    <div id="navBarWrapper">
      <Link className="navLink" to="/playerstats">
        PLAYER STATS
      </Link>
      <Link className="navLink" to="/teamstats">
        TEAM STATS
      </Link>
      <Link to="/" id="navMiddleLink" onClick={pastaClose}>
        <div id="navMiddle">
          <h1 id="navTitle">PASTA</h1>
          <img src="pastalogo.png" id="navLogo" alt="pasta" />
          <h1 id="navTitle">FRIENDS</h1>
        </div>
      </Link>
      <Link className="navLink" to="/boxscore">
        BOXSCORE
      </Link>
      <Link className="navLink" to="/gamerosters">
        GAME ROSTERS
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
