import { useRef } from 'react';
import './styles/RemoteTutorial.css';

window.scrollTo(0, 0);

const RemoteTutorial = (props) => {
  const remoteContainer = useRef(null);

  const handleClick = () => {
    localStorage.setItem('remoteTutorial', 'check');
    remoteContainer.current.classList.remove('fadeIn');
    remoteContainer.current.classList.add('fadeOut');
  };

  const handleAnimation = (e) => {
    if (e.target.classList.contains('fadeOut')) {
      remoteContainer.current.className = 'displayNone';
    }
  };

  return (
    <div
      id="remoteTutorialContainer"
      className={`FCAIC fadeIn ${props.isMobile ? 'mobile' : 'desktop'}`}
      onClick={handleClick}
      ref={remoteContainer}
      onAnimationEnd={handleAnimation}
    >
      <h1 id="RTTitle">WELCOME TO PASTA FRIENDS</h1>
      <h2 id="RTInstruction">USE THE REMOTE TO CHANGE TEAMS</h2>
      <video id="RTV" autoPlay muted loop playsInline>
        <source src="remoteTutorial.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default RemoteTutorial;
