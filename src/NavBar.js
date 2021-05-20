import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
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
    </div>
  );
};

export default NavBar;
