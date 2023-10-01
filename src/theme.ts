import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    color: {
      main: string;
      mint: string;
      darkblue: string;
    };
    mono: {
      white: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      black: string;
    };
  }

  interface PaletteOptions {
    color?: Palette['color'];
    mono?: Palette['mono'];
  }
}

const theme = createTheme({
  palette: {
    color: {
      main: '#3964c3',
      mint: '#7ed8b8',
      darkblue: '#2e4b90',
    },
    mono: {
        white: '#FFFFFF',
        gray1: '#EFEFEF',
        gray2: '#DDDDDD',
      gray3: '#C1C1C1',
      gray4: '#9B9B9B',
      gray5: '#6D6D6D',
      black: '#1A1C19',
    },
  },
});

export default theme;