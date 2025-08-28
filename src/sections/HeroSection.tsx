import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

// Animação para "orquestrar" a entrada dos filhos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

interface HeroSectionProps {
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

const HeroSection = ({ scrollRef }: HeroSectionProps) => {
  const handleScrollToProjects = () => {
    const container = scrollRef.current;
    const projectsSection = document.getElementById("projects");

    if (container && projectsSection) {
      const topPosition = projectsSection.offsetTop;

      container.scrollTo({
        top: topPosition - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      component={motion.section}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh", // Ocupa uma boa parte da tela inicial
        color: "white",
      }}
    >
      <Typography
        component={motion.h1}
        variants={itemVariants}
        variant="h2"
        fontWeight={700}
      >
        Elias Santos
      </Typography>
      <Typography
        component={motion.p}
        variants={itemVariants}
        variant="h5"
        color="primary.light"
        sx={{ mt: 1, mb: 3 }}
      >
        Arquiteto de Soluções & Desenvolvedor Full-Stack
      </Typography>
      <motion.div variants={itemVariants}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          endIcon={<ArrowDownwardIcon />}
          onClick={handleScrollToProjects}
        >
          Ver Meus Projetos
        </Button>
      </motion.div>
      <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IconButton
            component={Link}
            href="https://github.com/Eliazynho"
            target="_blank"
            aria-label="GitHub"
            color="primary"
            sx={{
              border: "1px solid rgba(255, 255, 255, 0.3)",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IconButton
            component={Link}
            href="https://linkedin.com/in/elias-santos-67b5601b7"
            target="_blank"
            aria-label="LinkedIn"
            color="primary"
            sx={{
              border: "1px solid rgba(255, 255, 255, 0.3)",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IconButton
            component={Link}
            href="mailto:m10elias10@gmail.com"
            aria-label="Email"
            color="primary"
            sx={{
              border: "1px solid rgba(255, 255, 255, 0.3)",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
            }}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default HeroSection;
