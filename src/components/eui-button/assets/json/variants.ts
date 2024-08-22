const variants: {
  text: string;
  contained: string;
  outlined: string;
} = {
  text: `
  background: none;
  border: none;

  &:hover {
    background: #f2f2f2;
    opacity: .7;
  }
  `,
  contained: `
  &:hover {
    opacity: .7;
  }
  `,
  outlined: `
  background: none;
  border: solid 2px;

  &:hover {
    background: #f2f2f2;
    opacity: .7;
  }
  `,
};

export default variants;
