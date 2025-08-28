import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
} as const;

const AboutSection = () => {
  return (
    <Box component="section" sx={{ width: "100%" }}>
      <Typography
        variant="h4"
        color="white"
        fontWeight={600}
        mb={4}
        textAlign="center"
      >
        Sobre Mim
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
        gap={3}
      >
        {/* Card de Biografia - Ocupa mais espaço */}
        <Box
          component={motion.div}
          gridColumn={{ xs: "1", md: "span 2" }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          sx={{
            p: 3,
            borderRadius: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography variant="body1" color="grey.300">
            Sou um Arquiteto de Soluções apaixonado por criar sistemas
            escaláveis e eficientes. Com mais de 2 anos de experiência, meu foco
            é transformar desafios complexos em tecnologia robusta e intuitiva,
            unindo a visão de negócio com a execução técnica.
            <br />
            <br />
            Aprimorando meu conhecimento em arquitetura de soluções e
            desenvolvimento de software, estou pronto para enfrentar novos
            desafios e contribuir para projetos inovadores.
            <br />
            <br />
            Estou sempre em busca de oportunidades para aprimorar minhas
            habilidades e colaborar em projetos desafiadores. Se você quer
            trabalhar comigo, sinta-se livre para entrar em contato.
          </Typography>
        </Box>

        {/* Card de Skills */}
        <Box
          component={motion.div}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          sx={{
            p: 3,
            borderRadius: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography variant="h6" color="white" mb={2}>
            Principais Skills
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {/* Você pode criar um componente SkillBadge se quiser */}
            {[
              "React",
              "Next.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Prisma",
              "Nest.js",
              "WebSockets",
              "TypeScript",
              "AWS",
              "Docker",
              "Kubernetes",
              "Git",
              "Jira",
              "Figma",
              "Photoshop",
            ].map((skill) => (
              <Typography
                key={skill}
                sx={{
                  bgcolor: "primary.main",
                  color: "black",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "12px",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                }}
              >
                {skill}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
