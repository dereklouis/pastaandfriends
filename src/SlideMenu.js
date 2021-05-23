import './styles/SlideMenu.css';
import toggleBurgerSlide from './ToggleBurgerSlide';
import { Link } from 'react-router-dom';

const SlideMenu = () => {
  const slideMenu = document.getElementById('SMContainer');
  window.onresize = () => {
    if (slideMenu.className === 'SMOpen' && window.innerWidth > 600) {
      toggleBurgerSlide();
    }
  };

  return (
    <div id="SMContainer" className="SMClose">
      <div id="SMLinkBox">
        <Link className="SMLink" to="/playerstats" onClick={toggleBurgerSlide}>
          Player Stats
        </Link>
        <Link className="SMLink" to="/teamstats" onClick={toggleBurgerSlide}>
          Team Stats
        </Link>
        <Link className="SMLink" to="/boxscore" onClick={toggleBurgerSlide}>
          Boxscore
        </Link>
        <Link className="SMLink" to="/" onClick={toggleBurgerSlide}>
          Four
        </Link>
      </div>
    </div>
  );
};

export default SlideMenu;
