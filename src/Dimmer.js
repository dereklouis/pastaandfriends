import './styles/Dimmer.css';
import toggleBurgerSlide from './ToggleBurgerSlide';

const Dimmer = () => {
  const handleAnimation = (e) => {
    const dimmer = document.getElementById('dimmerBox');
    if (e.target.className === 'dimmerFade') {
      dimmer.className = 'dimmerOff';
    }
  };

  return (
    <div
      id="dimmerBox"
      className="dimmerOff"
      onAnimationEnd={handleAnimation}
      onClick={toggleBurgerSlide}
    />
  );
};

export default Dimmer;
