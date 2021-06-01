import './styles/Landing.css';
import { teamIdKey, reverseTeamIdKey } from './Keys';
import { useState, useRef } from 'react';
import RemoteTutorial from './RemoteTutorial';

window.scrollTo(0, 0);

const Landing = (props) => {
  const [currentTeam, setCurrentTeam] = useState(
    reverseTeamIdKey[props.teamSelection]
  );
  const [currentGif, setCurrentGif] = useState(0);
  const gifClip = useRef(null);
  const teamTVLogo = useRef(null);
  const rink = useRef(null);
  const remoteRef = useRef(null);
  const upButton = useRef(null);
  const okButton = useRef(null);
  const downButton = useRef(null);
  const lastModeOn = useRef(null);

  const tvOffOn = () => {
    if (rink.current.className === 'opacityShow') {
      rink.current.className = 'opacityHide';
      teamTVLogo.current.className = 'opacityHide';
      lastModeOn.current = rink;
    } else if (gifClip.current.className === 'opacityShow') {
      gifClip.current.className = 'opacityHide';
      lastModeOn.current = gifClip;
    } else {
      lastModeOn.current.current.className = 'opacityShow';
      teamIdKey[currentTeam] === props.teamSelection
        ? (teamTVLogo.current.className = 'opacityShow')
        : (teamTVLogo.current.className = 'opacityHalf');
    }
  };

  const changeTeam = (command) => {
    if (rink.current.className === 'opacityShow') {
      if (command === 'plus') {
        if (currentTeam === 31) {
          setCurrentTeam(0);
        } else {
          setCurrentTeam(currentTeam + 1);
        }
      } else {
        if (currentTeam === 0) {
          setCurrentTeam(31);
        } else {
          setCurrentTeam(currentTeam - 1);
        }
      }
    }
  };

  const changeClip = (command) => {
    if (gifClip.current.className === 'opacityShow') {
      if (command === 'plus') {
        if (currentGif === 6) {
          setCurrentGif(0);
        } else {
          setCurrentGif(currentGif + 1);
        }
      } else {
        if (currentGif === 0) {
          setCurrentGif(6);
        } else {
          setCurrentGif(currentGif - 1);
        }
      }
    }
  };

  const remoteShake = () => {
    remoteRef.current.className = '';
    void remoteRef.current.offsetWidth;
    remoteRef.current.className = 'click';
  };

  const press = (e, button) => {
    if (button.current.id === 'okButtonFiller') {
      if (button.current.className === 'okButtonOff') {
        button.current.className = 'okButtonOn';
      } else {
        button.current.className = 'okButtonOff';
      }
    } else {
      if (button.current.className === 'arrowButtonOff') {
        button.current.className = 'arrowButtonOn';
      } else {
        button.current.className = 'arrowButtonOff';
      }
    }
  };

  const changeMode = () => {
    if (rink.current.className === 'opacityShow') {
      teamTVLogo.current.className = 'opacityHide';
      rink.current.className = 'opacityHide';
      gifClip.current.className = 'opacityShow';
    } else {
      if (teamIdKey[currentTeam] === props.teamSelection) {
        teamTVLogo.current.className = 'opacityShow';
      } else {
        teamTVLogo.current.className = 'opacityHalf';
      }
      rink.current.className = 'opacityShow';
      gifClip.current.className = 'opacityHide';
    }
  };

  const selectTeam = () => {
    if (rink.current.className === 'opacityShow') {
      if (teamIdKey[currentTeam] !== props.teamSelection) {
        teamTVLogo.current.className = 'selectAnimation';
      } else {
        teamTVLogo.current.className = 'nudge';
      }
    }
  };

  const handleAnimation = (e) => {
    if (e.target.className === 'nudge') {
      teamTVLogo.current.className = 'opacityShow';
    } else if (e.target.className === 'selectAnimation') {
      reloadWithNewTeam();
    }
  };

  const reloadWithNewTeam = () => {
    localStorage.setItem('teamSelection', teamIdKey[currentTeam]);
    props.history.push('/playerstats');
    window.location.reload();
  };

  return (
    <>
      {localStorage.getItem('remoteTutorial') === null && <RemoteTutorial />}
      <div id="landingMaster">
        <div id="landingContainer">
          <div id="tvContainer">
            <img id="tv" src="tv.png" alt="tv" />
            <div id="teamTVLogoContainer">
              <img
                alt="Team Logo"
                id="teamTVLogo"
                className={
                  teamIdKey[currentTeam] === props.teamSelection
                    ? 'opacityShow'
                    : 'opacityHalf'
                }
                ref={teamTVLogo}
                src={`/teamLogos/team${teamIdKey[currentTeam]}.png`}
                onAnimationEnd={handleAnimation}
              />
            </div>
            <img
              id="rink"
              src="rink.jpg"
              alt="TD Garden"
              className="opacityShow"
              ref={rink}
            />
            <img
              id="gifElement"
              src={`gifs/gif${currentGif}.gif`}
              alt="gif"
              className="opacityHide"
              ref={gifClip}
            />
            <div id="tvBlack"></div>
          </div>
          <div id="remoteContainer" ref={remoteRef}>
            <button
              type="button"
              id="remoteButtonOff"
              onClick={() => {
                tvOffOn();
                remoteShake();
              }}
            />
            <button
              type="button"
              id="modeButton"
              onClick={() => {
                changeMode();
                remoteShake();
              }}
            />
            <button
              type="button"
              id="upButton"
              onClick={() => {
                changeTeam('plus');
                changeClip('plus');
                remoteShake();
              }}
              onMouseDown={(e) => press(e, upButton)}
              onMouseUp={(e) => press(e, upButton)}
            />
            <button
              type="button"
              id="upButtonFiller"
              className="arrowButtonOff"
              ref={upButton}
            />
            <button
              type="button"
              id="okButton"
              onClick={() => {
                selectTeam();
                remoteShake();
              }}
              onMouseDown={(e) => press(e, okButton)}
              onMouseUp={(e) => press(e, okButton)}
            />
            <div id="okButtonFiller" className="okButtonOff" ref={okButton} />
            <button
              type="button"
              id="downButton"
              onClick={() => {
                changeTeam('minus');
                changeClip('minus');
                remoteShake();
              }}
              onMouseDown={(e) => press(e, downButton)}
              onMouseUp={(e) => press(e, downButton)}
            />
            <button
              type="button"
              id="downButtonFiller"
              className="arrowButtonOff"
              ref={downButton}
            />
            <img id="remote" alt="remote" src="remote.png" />
          </div>
          <img alt="Jack" id="jack" src="jackbw.png" />
        </div>
      </div>
    </>
  );
};

export default Landing;
