// sections/ProjectsSection.tsx

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Project } from "@/types/projects";
import ProjectCard from "@/components/ui/ProjectsCard";

interface ProjectsSectionProps {
  projects: Project[];
}

const containerVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.15, // Anima um card após o outro
    },
  },
};

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{ width: "100%", scrollMarginTop: "80px" }}
    >
      <Typography
        variant="h4"
        color="white"
        fontWeight={600}
        mb={4}
        textAlign="center"
      >
        Meus Projetos
      </Typography>
      <Box
        component={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", // Grid responsivo
          gap: 4,
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsSection;
