const toggleBurgerSlide = () => {
  const stick0 = document.getElementById('stick0');
  const stick1 = document.getElementById('stick1');
  const slideMenu = document.getElementById('SMContainer');
  const dimmer = document.getElementById('dimmerBox');
  if (stick0.className === 'stick0Close') {
    stick0.className = 'stick0Open';
    stick1.className = 'stick1Open';
    slideMenu.className = 'SMOpen';
    dimmer.className = 'dimmerOn';
  } else {
    stick0.className = 'stick0Close';
    stick1.className = 'stick1Close';
    slideMenu.className = 'SMClose';
    dimmer.className = 'dimmerFade';
  }
};

export default toggleBurgerSlide;
