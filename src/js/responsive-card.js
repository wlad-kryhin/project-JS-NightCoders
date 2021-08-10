import VanillaTilt from 'vanilla-tilt';

const options = {
  max: 20,
  speed: 400,
  glare: true,
  'max-glare': 0.4,
  gyroscope: true,
  //   gyroscopeMinAngleX: -45, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
  //   gyroscopeMaxAngleX: 45, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
  //   gyroscopeMinAngleY: -45, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
  //   gyroscopeMaxAngleY: 45,
  //   gyroscopeSamples: 10,
};
export const makeCardsAnimated = () => {
  const cards = document.querySelectorAll('.film-item');
  VanillaTilt.init(cards, options);
};
