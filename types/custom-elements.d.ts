// custom-elements.d.ts or similar
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'eui-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'eui-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'eui-figure': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'eui-grid': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'eui-input': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'eui-modal': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // You can also use 'any' if you don't need strict prop types:
      // 'my-custom-element': any; 
    }
  }
}
// For React 19+, you might need to augment React's namespace instead of the global one.
// The declaration file needs to be part of your TypeScript project (e.g., included in tsconfig.json).
