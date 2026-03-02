// src/theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7FBF3F", // SmartBase Lab グリーン
      contrastText: "#fff",
    },
    background: {
      default: "#F3F8F0", // 淡い背景
      paper: "#ffffff",
    },
    text: {
      primary: "#1F2A1F",
      secondary: "#4B5A4B",
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: `"Inter","Noto Sans JP",sans-serif`,
    button: { textTransform: "none", fontWeight: 600 },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(135deg,#F3F8F0 0%,#E6F2E1 100%)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          minHeight: 48,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});
