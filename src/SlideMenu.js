import './styles/SlideMenu.css';
import toggleBurgerSlide from './ToggleBurgerSlide';
import { Link } from 'react-router-dom';

const SlideMenu = () => {
  return (
    <div id="SMContainer" className="SMClose">
      <div id="SMLinkBox">
        <Link className="SMLink" to="/playerstats" onClick={toggleBurgerSlide}>
          Player Stats
        </Link>
        <Link className="SMLink" to="/teamstats" onClick={toggleBurgerSlide}>
          Team Stats
        </Link>
        <Link className="SMLink" to="/" onClick={toggleBurgerSlide}>
          Top Six
        </Link>
        <Link className="SMLink" to="/" onClick={toggleBurgerSlide}>
          Four
        </Link>
      </div>
    </div>
  );
};

export default SlideMenu;
