export default interface EUIButtonType {
  variant: 'text' | 'outlined' | 'black' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'fatal';
  padding?: number | string;
  type?: string;
  color?: string;
  text: string;
  fontColor?: string;
  onClick: (event: unknown) => unknown;
  styles?: { [key: string]: unknown };
  classes?: string[];
  fullWidth?: boolean;
}
