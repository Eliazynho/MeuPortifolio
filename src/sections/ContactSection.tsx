import { Box, Typography, IconButton, Link, Stack } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const ContactSection = () => {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      sx={{
        textAlign: "center",
        color: "white",
        py: 6,
      }}
    >
      <Typography variant="h4" fontWeight={600} mb={2}>
        Vamos Conversar
      </Typography>
      <Typography
        variant="body1"
        color="grey.400"
        maxWidth="600px"
        mx="auto"
        mb={4}
      >
        Estou sempre aberto a novas oportunidades, colaborações e um bom
        bate-papo sobre tecnologia. Sinta-se à vontade para me contatar através
        de qualquer um dos canais abaixo.
      </Typography>
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

export default ContactSection;
