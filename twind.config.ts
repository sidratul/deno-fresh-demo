import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      'grey-bg': '#FAFAFA',
      'nav-bg': '#645854',
      'green' : '#A7CAB1',
      'white': '#FFFFFF',
      'black': '#000000',
      'black-60': 'rgba(0, 0, 0, 0.6)',
      'yellow-800': '#E3960F',
    }
  }
} as Options;
