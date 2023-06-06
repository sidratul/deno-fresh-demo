import { h, FunctionComponent } from 'preact';
import { IconSvgProps } from './types.ts';

export const DislikeIcon:  FunctionComponent<IconSvgProps> =  ({
  size = 24,
  color = 'currentColor',
}) => (
  <svg width={size} height={size} stroke={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 14.208V4.20801M8.5 14.208L4.5 14.208V4.20803L8.5 4.20801M8.5 14.208L13.6956 20.2695C14.1886 20.8447 14.9642 21.092 15.6992 20.9082L15.7467 20.8963C17.0885 20.5609 17.6929 18.9974 16.9258 17.8467L14.5 14.208H19.0604C20.3225 14.208 21.2691 13.0534 21.0216 11.8158L19.8216 5.81579C19.6346 4.88095 18.8138 4.20803 17.8604 4.20803L8.5 4.20801" stroke="black" stroke-opacity="0.4" stroke-size="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)
