export const flipCard = (e, element) => {
  if (element.current.className === 'spin0') {
    element.current.className = 'spin1';
  } else if (element.current.className === 'spin2') {
    element.current.className = 'spin3';
  }
};

export const handleCardFlipAnimation = (e, element) => {
  if (element.current.className === 'spin1') {
    element.current.className = 'spin2';
    element.current.firstChild.className = 'under';
    element.current.lastChild.className = 'over';
  } else if (element.current.className === 'spin3') {
    element.current.className = 'spin4';
    element.current.firstChild.className = 'over';
    element.current.lastChild.className = 'under';
  } else if (element.current.className === 'spin4') {
    element.current.className = 'spin0';
  }
};
