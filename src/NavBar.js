import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const toggleBurger = () => {
    const stick0 = document.getElementById('stick0');
    const stick1 = document.getElementById('stick1');
    if (stick0.className === 'stick0Close') {
      stick0.className = 'stick0Open';
      stick1.className = 'stick1Open';
    } else {
      stick0.className = 'stick0Close';
      stick1.className = 'stick1Close';
    }
  };
  return (
    <div id="navBarWrapper">
      <Link className="navLink" to="/teamstats">
        Team Stats
      </Link>
      <Link className="navLink" to="/">
        Two
      </Link>
      <Link to="/">
        <div id="navMiddle">
          <h1 id="navTitle">Pasta</h1>
          <img src="pastalogo.png" id="navLogo" alt="pasta" />
          <h1 id="navTitle">Friends</h1>
        </div>
      </Link>
      <Link className="navLink" to="/">
        Top Six
      </Link>
      <Link className="navLink" to="/">
        Four
      </Link>
      <div id="stickContainer" onClick={toggleBurger}>
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
