export interface Colors {
  ui: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    disabled: string;
    error: string;
    success: string;
  };
  bg: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quinary: string;
    disabled: string;
    inverse: string;
    error: string;
    success: string;
  };
}

export const colors: Colors = {
  ui: {
    primary: '#262626',
    secondary: '#757575',
    tertiary: '#F1F1F1',
    quaternary: '#FFFFFF',
    disabled: '#DEDEDE',
    error: '#D0421B',
    success: '#138000',
  },
  bg: {
    primary: '#00CCFF',
    secondary: '#00CCFFB0',
    tertiary: '#F3F1F3',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#5856D6',
    tertiary: 'purple',
    quaternary: '#000000',
    quinary: '#000000B0',
    disabled: '#9C9C9C',
    inverse: '#FFFFFF',
    error: '#D0421B',
    success: '#138000',
  },
};
