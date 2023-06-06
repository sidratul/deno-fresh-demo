import { h, FunctionComponent } from 'preact';
import { IconSvgProps } from './types.ts';

export const CheckIcon:  FunctionComponent<IconSvgProps> =  ({
  size = 24,
  color = 'currentColor',
}) => (
  <svg width={size} height={size} stroke={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.5 7.20801L9.50004 18.208L4.49994 13.208" stroke="black" stroke-opacity="0.4" stroke-size="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)
