import './NavBar.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const stick0 = useRef(null);
  const stick1 = useRef(null);

  const toggleBurger = () => {
    if (stick0.current.className === 'stick0Close') {
      stick0.current.className = 'stick0Open';
      stick1.current.className = 'stick1Open';
    } else {
      stick0.current.className = 'stick0Close';
      stick1.current.className = 'stick1Close';
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
          ref={stick0}
        />
        <img
          src="stick.png"
          className="stick1Close"
          id="stick1"
          alt="hockey stick"
          ref={stick1}
        />
      </div>
    </div>
  );
};

export default NavBar;
