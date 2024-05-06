export interface GridTypes {
  condensed?: boolean;
  narrow?: boolean;
  noBoxSizing?: boolean;
  overflow: string;
  padding: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  allowOverflow?: boolean;
  justifyContent: 'flex-start' |
    'flex-end' |
    'center' |
    'space-between' |
    'space-around' |
    'space-evenly' |
    'initial' |
    'inherit';
  flexDirection: 'row' | 'column'
}
