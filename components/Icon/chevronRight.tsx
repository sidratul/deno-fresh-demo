import { h, FunctionComponent } from 'preact';
import { IconSvgProps } from './types.ts';

export const ChevronRightIcon:  FunctionComponent<IconSvgProps> =  ({
  size = 24,
  color = 'currentColor',
}) => (
  <svg width={size} height={size} stroke={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2929 8.29289C10.6834 7.90237 11.3166 7.90237 11.7071 8.29289L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071L11.7071 15.7071C11.3166 16.0976 10.6834 16.0976 10.2929 15.7071C9.90237 15.3166 9.90237 14.6834 10.2929 14.2929L12.5858 12L10.2929 9.70711C9.90237 9.31658 9.90237 8.68342 10.2929 8.29289Z" fill="black"/>
  </svg>
)
