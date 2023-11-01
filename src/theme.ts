import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    color: {
      black: string;
      yellow: string;
      white: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      gray7: string;
    };
  }

  interface PaletteOptions {
    color?: Palette["color"];
    // mono?: Palette["mono"];
  }
}

const theme = createTheme({
  palette: {
    color: {
      black: "#000000",
      yellow: "#FFCD29",
      white: "#FFFFFF",
      gray1: "#EFEFEF",
      gray2: "#DDDDDD",
      gray3: "#C0C0C0",
      gray4: "#9B9B9B",
      gray5: "#6C6C6C",
      gray6: "#4E4E4E",
      gray7: "#373737",
    },
  },
});

export default theme;
