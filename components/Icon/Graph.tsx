import { h, FunctionComponent } from 'preact';
import { IconSvgProps } from './types.ts';

export const GraphIcon:  FunctionComponent<IconSvgProps> =  ({
  size = 24,
  color = 'currentColor',
}) => (
  <svg width={size} height={size} stroke={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C1.55228 0 2 0.447715 2 1V14C2 15.1046 2.89543 16 4 16H17C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18H4C1.79086 18 0 16.2091 0 14V1C0 0.447715 0.447715 0 1 0Z" fill="#FAFAFA"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3163 0.0513439C17.8402 0.225992 18.1234 0.792312 17.9487 1.31625L15.972 7.24625C15.2668 9.36195 12.5816 9.99584 11.0047 8.41889L9.58117 6.99538C9.05551 6.46973 8.16045 6.68102 7.92538 7.38626L5.94871 13.3163C5.77406 13.8402 5.20774 14.1234 4.6838 13.9487C4.15986 13.7741 3.8767 13.2077 4.05134 12.6838L6.02801 6.7538C6.73324 4.6381 9.41843 4.00422 10.9954 5.58117L12.4189 7.00467C12.9445 7.53032 13.8396 7.31903 14.0747 6.6138L16.0513 0.683799C16.226 0.159856 16.7923 -0.123304 17.3163 0.0513439Z" fill="#FAFAFA"/>
  </svg>
)
