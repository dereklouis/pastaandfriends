import { useRef } from 'react';
import './styles/FlipTutorial.css';

window.scrollTo(0, 0);

const FlipTutorial = (props) => {
  const flipContainer = useRef(null);

  const handleClick = () => {
    localStorage.setItem('flipTutorial', 'check');
    flipContainer.current.classList.remove('fadeIn');
    flipContainer.current.classList.add('fadeOut');
  };

  const handleAnimation = (e) => {
    if (e.target.classList.contains('fadeOut')) {
      flipContainer.current.className = 'displayNone';
    }
  };

  return (
    <div
      id="flipTutorialContainer"
      className={`FCAIC fadeIn ${props.isMobile ? 'mobile' : 'desktop'}`}
      onClick={handleClick}
      ref={flipContainer}
      onAnimationEnd={handleAnimation}
    >
      <h1 id="FTTitle">WELCOME TO PASTA FRIENDS</h1>
      <h2 id="FTInstruction">CLICK OR TAP CONTAINERS TO FLIP THEM!</h2>
      <video id="FTV" autoPlay muted loop playsInline>
        <source src="containerFlip.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FlipTutorial;
