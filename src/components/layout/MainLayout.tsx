// components/layout/MainLayout.tsx

import { ReactNode } from "react";
import { Box } from "@mui/material";

// Animações de keyframes para o fundo Aurora
const keyframes = {
  "@keyframes move-aurora-1": {
    "0%": { transform: "translate(0, 0) rotate(0deg)" },
    "50%": { transform: "translate(100px, 200px) rotate(180deg)" },
    "100%": { transform: "translate(0, 0) rotate(360deg)" },
  },
  "@keyframes move-aurora-2": {
    "0%": { transform: "translate(0, 0) rotate(0deg)" },
    "50%": { transform: "translate(-150px, -100px) rotate(180deg)" },
    "100%": { transform: "translate(0, 0) rotate(360deg)" },
  },
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#090a0f",
        position: "relative",
        overflow: "hidden",
        ...keyframes,
        overflowY: { xs: "hidden", lg: "auto" },
        // Estilização customizada da barra de scroll
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.4)",
        },

        // Adicionado para centralizar o conteúdo (o painel de vidro)
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 0, sm: 2, md: 4 },

        // Efeitos de gradiente da aurora
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-20%",
          left: "-20%",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(10, 89, 233, 0.3) 0%, rgba(10, 89, 233, 0) 70%)",
          filter: "blur(80px)",
          animation: "move-aurora-1 25s infinite linear",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-20%",
          right: "-20%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(131, 58, 180, 0.3) 0%, rgba(131, 58, 180, 0) 70%)",
          filter: "blur(100px)",
          animation: "move-aurora-2 30s infinite linear",
          zIndex: 0,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default MainLayout;
