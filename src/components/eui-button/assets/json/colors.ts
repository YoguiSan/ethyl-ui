import { Colors } from '../../../assets/json';

const colors: { [key: string]: string } = {};

Object.keys(Colors).forEach((color: string) => {
  colors[color] = `
  background: ${(Colors as { [key: string]: string })[color] as string};
  `;
});

export default colors;
