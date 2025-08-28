// sections/ContactSection.tsx

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

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
    </Box>
  );
};

export default ContactSection;
