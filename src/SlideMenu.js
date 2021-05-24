import './styles/SlideMenu.css';
import toggleBurgerSlide from './ToggleBurgerSlide';
import { Link } from 'react-router-dom';

const SlideMenu = () => {
  const slideMenu = document.getElementById('SMContainer');
  window.onresize = () => {
    if (slideMenu.className === 'SMOpen' && window.innerWidth > 800) {
      toggleBurgerSlide();
    }
  };

  return (
    <div id="SMContainer" className="SMClose">
      <div id="SMLinkBox">
        <Link className="SMLink" to="/playerstats" onClick={toggleBurgerSlide}>
          PLAYER STATS
        </Link>
        <Link className="SMLink" to="/teamstats" onClick={toggleBurgerSlide}>
          TEAM STATS
        </Link>
        <Link className="SMLink" to="/boxscore" onClick={toggleBurgerSlide}>
          BOXSCORE
        </Link>
        <Link className="SMLink" to="/gamerosters" onClick={toggleBurgerSlide}>
          GAME ROSTERS
        </Link>
      </div>
    </div>
  );
};

export default SlideMenu;
