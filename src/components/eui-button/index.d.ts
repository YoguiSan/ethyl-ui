export interface ButtonTypes {
  classes: string | string[];
  color: string;
  fontColor: string;
  icon: Element;
  onClick: (event?: unknown) => void;
  styles: { [key: string]: string | number };
  text: string;
  type: string;
  variant: string;
}
