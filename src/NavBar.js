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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div id="navBarWrapper">
      <Link className="navLink" to="/playerstats" onClick={scrollToTop}>
        PLAYER STATS
      </Link>
      <Link className="navLink" to="/teamstats" onClick={scrollToTop}>
        TEAM STATS
      </Link>
      <Link
        to="/"
        id="navMiddleLink"
        onClick={() => {
          pastaClose();
          scrollToTop();
        }}
      >
        <div id="navMiddle">
          <h1 id="navTitle">PASTA</h1>
          <img src="pastalogo.png" id="navLogo" alt="pasta" />
          <h1 id="navTitle">FRIENDS</h1>
        </div>
      </Link>
      <Link className="navLink" to="/boxscore" onClick={scrollToTop}>
        BOXSCORE
      </Link>
      <Link className="navLink" to="/gamerosters" onClick={scrollToTop}>
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
