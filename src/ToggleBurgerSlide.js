const toggleBurgerSlide = () => {
  const stick0 = document.getElementById('stick0');
  const stick1 = document.getElementById('stick1');
  const slideMenu = document.getElementById('SMContainer');
  const dimmer = document.getElementById('dimmerBox');
  const remoteIcon = document.getElementById('mancaveLink');
  if (stick0.className === 'stick0Close') {
    stick0.className = 'stick0Open';
    stick1.className = 'stick1Open';
    slideMenu.className = 'SMOpen';
    dimmer.className = 'dimmerOn';
    if (remoteIcon) {
      remoteIcon.className = 'RIRight';
    }
  } else {
    stick0.className = 'stick0Close';
    stick1.className = 'stick1Close';
    slideMenu.className = 'SMClose';
    dimmer.className = 'dimmerFade';
    if (remoteIcon) {
      remoteIcon.className = 'RILeft';
    }
  }
};

export default toggleBurgerSlide;
