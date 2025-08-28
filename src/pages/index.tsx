// pages/index.tsx

import { GetServerSideProps, NextPage } from "next";
import { useRef } from "react";
import axios from "axios";
import { Box } from "@mui/material";

import { Project } from "@/types/projects";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";

interface HomePageProps {
  projects: Project[];
}

// Estilos de Glassmorphism para o painel
const glassmorphismStyles = {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(12px) saturate(180%)",
  WebkitBackdropFilter: "blur(12px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.125)",
  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
};

const Home: NextPage<HomePageProps> = ({ projects }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <MainLayout>
      {/* Este é o painel de vidro principal */}
      <Box
        ref={scrollContainerRef}
        sx={{
          width: { xs: "100%", lg: "1200px" },
          height: { xs: "auto", lg: "85vh" },
          minHeight: { xs: "100vh", lg: "auto" },
          borderRadius: { xs: 0, lg: "16px" },
        }}
      >
        {/* Container para as seções, com padding interno */}
        <Box
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: "80px", md: "100px" },
            padding: { xs: "40px 24px", md: "60px 48px" },
          }}
        >
          <HeroSection scrollRef={scrollContainerRef} />
          <AboutSection />
          <ProjectsSection projects={projects} />
          <ContactSection />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Home;

// A função getServerSideProps permanece a mesma
export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  try {
    const API_URL =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/projects";
    const response = await axios.get<Project[]>(API_URL);
    return {
      props: {
        projects: response.data,
      },
    };
  } catch (error) {
    console.error("Falha ao buscar projetos:", error);
    return {
      props: {
        projects: [],
      },
    };
  }
};
