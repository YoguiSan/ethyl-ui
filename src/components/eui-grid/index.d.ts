export interface GridStyleType {
  flexDirection: 'row' | 'column';
  justifyContent:
    'flex-start' |
    'flex-end' |
    'center' |
    'space-between' |
    'space-around' |
    'space-evenly' |
    'initial' |
    'inherit'
}

export default interface EUIGridRowColumnType extends GridStyleType {
  condensed: boolean;
  narrow: boolean;
  noBoxSizing: boolean;
  overflow: string;
  padding: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  allowOverflow: boolean;
}
