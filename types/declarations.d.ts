declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.webp';

declare module 'react-native-dotenv' {
  export const GOOGLE_API_KEY: string;
}
