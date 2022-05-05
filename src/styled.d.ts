import 'styled-components';
import { lightTheme } from './themes/light.theme';

type Theme = typeof lightTheme;

// and extend them!
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {
  }
}