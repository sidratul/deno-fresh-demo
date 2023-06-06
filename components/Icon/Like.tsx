import { h, FunctionComponent } from 'preact';
import { IconSvgProps } from './types.ts';

export const LikeIcon:  FunctionComponent<IconSvgProps> =  ({
  size = 24,
  color = 'currentColor',
}) => (
  <svg width={size} height={size} stroke={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10.208V20.208M8 10.208L4 10.208V20.208L8 20.208M8 10.208L13.1956 4.14648C13.6886 3.57131 14.4642 3.32405 15.1992 3.50778L15.2467 3.51967C16.5885 3.85511 17.1929 5.41858 16.4258 6.56936L14 10.208H18.5604C19.8225 10.208 20.7691 11.3626 20.5216 12.6002L19.3216 18.6002C19.1346 19.5351 18.3138 20.208 17.3604 20.208L8 20.208" stroke="black" stroke-opacity="0.4" stroke-size="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)
