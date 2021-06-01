import './styles/RemoteIcon.css';
import toggleBurgerSlide from './ToggleBurgerSlide';
import { Link } from 'react-router-dom';

const RemoteIcon = () => {
  const handleToggle = () => {
    const slideMenu = document.getElementById('SMContainer');
    if (slideMenu.className === 'SMOpen') {
      toggleBurgerSlide();
    }
  };
  return (
    <Link
      to="/mancave"
      id="mancaveLink"
      className="RILeft"
      onClick={handleToggle}
    >
      <img src="/remoteIcon.png" alt="Remote Icon" id="remoteIcon" />
    </Link>
  );
};

export default RemoteIcon;
