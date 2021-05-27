import './styles/Landing.css';
import { useState } from 'react';

const Landing = () => {
  const [currentGif, setCurrentGif] = useState(0);

  const tvOffOn = () => {
    const gif = document.getElementById('gifElement');
    if (gif.className === 'opacityShow') {
      gif.className = 'opacityHide';
    } else {
      gif.className = 'opacityShow';
    }
  };

  const changeClip = () => {
    const gif = document.getElementById('gifElement');
    const remote = document.getElementById('remoteContainer');
    if (gif.className === 'opacityShow') {
      if (currentGif === 6) {
        setCurrentGif(0);
      } else {
        setCurrentGif(currentGif + 1);
      }
    }
    remote.className = '';
    void remote.offsetWidth;
    remote.className = 'click';
  };

  const downUp = () => {
    const button = document.getElementById('remoteButtonFiller');
    if (button.className === 'buttonUp') {
      button.className = 'buttonDown';
    } else {
      button.className = 'buttonUp';
    }
  };

  return (
    <div id="landingMaster">
      <div id="landingContainer">
        <div id="tvContainer">
          <img id="tv" src="tv.png" alt="tv" />
          <img
            id="gifElement"
            src={`gifs/gif${currentGif}.gif`}
            alt="gif"
            className="opacityShow"
          />
          <div id="tvBlack"></div>
        </div>
        <div id="remoteContainer">
          <button type="button" id="remoteButtonOff" onClick={tvOffOn}></button>
          <button
            type="button"
            id="remoteButtonChange"
            onClick={changeClip}
            onMouseDown={downUp}
            onMouseUp={downUp}
          ></button>
          <div id="remoteButtonFiller" className="buttonUp"></div>
          <img id="remote" alt="remote" src="remote.png" />
        </div>
        <img alt="Jack" id="jack" src="jackbw.png" />
      </div>
    </div>
  );
};

export default Landing;
