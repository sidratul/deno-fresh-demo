import { h, FunctionComponent } from 'preact';
import { IconSvgProps } from './types.ts';

export const ChatIcon:  FunctionComponent<IconSvgProps> =  ({
  size = 24,
  color = 'currentColor',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3572 3H14.0355C14.9373 2.99999 15.6647 2.99999 16.2567 3.04038C16.8654 3.08191 17.4037 3.16948 17.9134 3.3806C19.1386 3.88807 20.1119 4.86144 20.6194 6.08658C20.8305 6.59628 20.9181 7.13456 20.9596 7.74331C21 8.33531 21 9.06272 21 9.96448V10.0355C21 10.9373 21 11.6647 20.9596 12.2567C20.9181 12.8654 20.8305 13.4037 20.6194 13.9134C20.1119 15.1386 19.1386 16.1119 17.9134 16.6194C17.4037 16.8305 16.8654 16.9181 16.2567 16.9596C15.6647 17 14.9373 17 14.0355 17H11.4286C10.969 17 10.8774 17.0046 10.8026 17.0197C10.6284 17.0548 10.4667 17.1356 10.3342 17.2539C10.2773 17.3047 10.2186 17.3752 9.94286 17.7429L9.92131 17.7716C9.31559 18.5792 8.8329 19.2228 8.43791 19.6881C8.06664 20.1255 7.64696 20.5654 7.14609 20.7725C5.76787 21.3422 4.1804 20.813 3.41966 19.5303C3.14319 19.0641 3.07138 18.4604 3.03679 17.8878C2.99999 17.2785 3 16.474 3 15.4645V10.3572C2.99999 9.27341 2.99998 8.39926 3.05782 7.69138C3.11737 6.96253 3.24318 6.32234 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.32234 3.24318 6.96253 3.11737 7.69138 3.05782C8.39926 2.99998 9.27341 2.99999 10.3572 3ZM7.85424 5.05118C7.24907 5.10062 6.90138 5.19279 6.63803 5.32698C6.07354 5.6146 5.6146 6.07354 5.32698 6.63803C5.19279 6.90138 5.10062 7.24907 5.05118 7.85424C5.00078 8.47108 5 9.26339 5 10.4V15.4286C5 16.4821 5.00045 17.2257 5.03315 17.7672C5.04933 18.035 5.07195 18.2233 5.09854 18.356C5.12107 18.4685 5.14072 18.5106 5.1418 18.5133C5.39548 18.9375 5.92112 19.1127 6.37856 18.9256C6.38104 18.9241 6.42204 18.9021 6.50757 18.8257C6.60844 18.7355 6.73951 18.5984 6.91318 18.3938C7.26422 17.9803 7.71074 17.3857 8.34286 16.5429C8.35735 16.5235 8.37171 16.5044 8.38594 16.4853C8.59427 16.2071 8.77734 15.9626 9.00255 15.7617C9.40023 15.4068 9.88528 15.1642 10.4078 15.059C10.7037 14.9994 11.0091 14.9997 11.3567 15C11.3805 15 11.4044 15 11.4286 15H14C14.9456 15 15.6047 14.9995 16.1206 14.9643C16.6275 14.9297 16.9227 14.865 17.1481 14.7716C17.8831 14.4672 18.4672 13.8831 18.7716 13.1481C18.865 12.9227 18.9297 12.6275 18.9643 12.1206C18.9995 11.6047 19 10.9456 19 10C19 9.05444 18.9995 8.39534 18.9643 7.87945C18.9297 7.37254 18.865 7.07734 18.7716 6.85195C18.4672 6.11687 17.8831 5.53284 17.1481 5.22836C16.9227 5.135 16.6275 5.07033 16.1206 5.03574C15.6047 5.00054 14.9456 5 14 5H10.4C9.26339 5 8.47108 5.00078 7.85424 5.05118Z" fill="#FAFAFA"/>
    <path d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8Z" fill="#FAFAFA"/>
    <path d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H11C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11H8Z" fill="#FAFAFA"/>
  </svg>

)

export default ChatIcon;