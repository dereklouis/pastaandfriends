import './styles/SlideMenu.css';
import toggleBurgerSlide from './ToggleBurgerSlide';
import { Link } from 'react-router-dom';

const SlideMenu = () => {
  const slideMenuElement = document.getElementById('SMContainer');
  window.onresize = () => {
    if (slideMenuElement) {
      if (slideMenuElement.className === 'SMOpen' && window.innerWidth > 800) {
        toggleBurgerSlide();
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="SMContainer" className="SMClose">
      <div id="SMLinkBox">
        <Link
          className="SMLink"
          to="/playerstats"
          onClick={() => {
            toggleBurgerSlide();
            scrollToTop();
          }}
        >
          PLAYER STATS
        </Link>
        <Link
          className="SMLink"
          to="/teamstats"
          onClick={() => {
            toggleBurgerSlide();
            scrollToTop();
          }}
        >
          TEAM STATS
        </Link>
        <Link
          className="SMLink"
          to="/boxscore"
          onClick={() => {
            toggleBurgerSlide();
            scrollToTop();
          }}
        >
          BOXSCORE
        </Link>
        <Link
          className="SMLink"
          to="/gamerosters"
          onClick={() => {
            toggleBurgerSlide();
            scrollToTop();
          }}
        >
          GAME ROSTERS
        </Link>
      </div>
    </div>
  );
};

export default SlideMenu;
