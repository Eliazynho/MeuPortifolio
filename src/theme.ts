// src/theme.ts
"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#a6c1ee", // Um azul mais suave e elegante
    },
    background: {
      default: "#0c0c1d",
      paper: "rgba(12, 12, 29, 0.8)", // Fundo do Drawer semi-transparente
    },
  },
  // Usa a nova fonte importada no layout.tsx
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

// Estilo reutilizável para o efeito de vidro
export const glassmorphicStyle = {
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)", // Para compatibilidade com Safari
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "16px",
};

export default theme;
