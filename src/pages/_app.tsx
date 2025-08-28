import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme"; // Importa nosso tema já criado
import { Poppins } from "next/font/google";

// Configura a fonte com os pesos que usaremos
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Adiciona uma tag <main> com a classe da fonte para aplicá-la globalmente */}
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
