"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#a6c1ee",
    },
    background: {
      default: "#0c0c1d",
      paper: "rgba(12, 12, 29, 0.8)",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
  },
});

export const glassmorphicStyle = {
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "16px",
};

export default theme;
