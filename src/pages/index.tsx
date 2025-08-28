// pages/index.tsx

import { GetServerSideProps, NextPage } from "next";
import { useRef } from "react";
import { Box } from "@mui/material";

// Importa o cliente Supabase
import { createClient } from "@supabase/supabase-js";

import { Project } from "@/types/projects";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";

interface HomePageProps {
  projects: Project[];
}

const Home: NextPage<HomePageProps> = ({ projects }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <MainLayout>
      <Box
        ref={scrollContainerRef}
        sx={{
          width: { xs: "100%", lg: "1200px" },
          height: { xs: "auto", lg: "85vh" },
          minHeight: { xs: "100vh", lg: "auto" },
          borderRadius: { xs: 0, lg: "16px" },
        }}
      >
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

// Função getServerSideProps atualizada para Supabase
export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Variáveis de ambiente do Supabase não estão configuradas.");
    return {
      props: {
        projects: [],
      },
    };
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data: projects, error } = await supabase
      .from("projects")
      .select("*");

    if (error) {
      throw error;
    }

    return {
      props: {
        projects: (projects as Project[]) || [],
      },
    };
  } catch (error) {
    console.error("Falha ao buscar projetos do Supabase:", error);
    return {
      props: {
        projects: [],
      },
    };
  }
};
