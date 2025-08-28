// components/ui/ProjectCard.tsx

import { Box, Typography, Chip, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { Project } from "@/types/projects";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
interface ProjectCardProps {
  project: Project;
}

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
} as const;

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Box
      component={motion.div}
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
      sx={{
        // Estilos do Glassmorphism
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px) saturate(150%)",
        WebkitBackdropFilter: "blur(10px) saturate(150%)",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        color: "white",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "180px",
          backgroundColor: "#333" /* Cor de fundo para o placeholder */,
        }}
      >
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          // Um placeholder simples caso não haja imagem
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Typography variant="caption" color="grey.500">
              Sem Imagem
            </Typography>
          </Box>
        )}
      </Box>
      <Box p={2} flexGrow={1} display="flex" flexDirection="column">
        <Typography variant="h6" fontWeight={600}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="grey.300" mt={1} flexGrow={1}>
          {project.shortDesc}
        </Typography>
        <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
          {project.technologies.slice(0, 4).map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              sx={{ color: "white", borderColor: "rgba(255,255,255,0.5)" }}
            />
          ))}
        </Box>
        <Box mt={2} display="flex" justifyContent="flex-end">
          {project.githubUrl && (
            <IconButton
              href={project.githubUrl}
              target="_blank"
              sx={{ color: "white" }}
            >
              <GitHubIcon />
            </IconButton>
          )}
          {project.liveUrl && (
            <IconButton
              href={project.liveUrl}
              target="_blank"
              sx={{ color: "white" }}
            >
              <LinkIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
