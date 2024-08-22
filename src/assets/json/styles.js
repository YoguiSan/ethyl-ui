import Colors from './colors.json';

export default {
  boxShadow: (color = Colors.gray) => `box-shadow: -2px 2px 1rem ${color};`,
};
