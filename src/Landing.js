import './styles/Landing.css';
import { useState, useRef } from 'react';

const Landing = () => {
  const [currentGif, setCurrentGif] = useState(0);
  const gifClip = useRef(null);
  const remoteRef = useRef(null);

  const tvOffOn = () => {
    if (gifClip.current.className === 'opacityShow') {
      gifClip.current.className = 'opacityHide';
    } else {
      gifClip.current.className = 'opacityShow';
    }
  };

  const changeClip = () => {
    if (gifClip.current.className === 'opacityShow') {
      if (currentGif === 6) {
        setCurrentGif(0);
      } else {
        setCurrentGif(currentGif + 1);
      }
    }
    remoteRef.current.className = '';
    void remoteRef.current.offsetWidth;
    remoteRef.current.className = 'click';
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
            ref={gifClip}
          />
          <div id="tvBlack"></div>
        </div>
        <div id="remoteContainer" ref={remoteRef}>
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
