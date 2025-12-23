import { React } from 'react';
import { variants } from './assets/json';

export default interface EUICardType {
  title?: string;
  iconBgColor?: string;
  variant?: 'regular' | 'callout',
}
