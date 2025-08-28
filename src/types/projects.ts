// types/projects.ts

export interface Project {
  id: number;
  title: string;
  shortDesc: string;
  challenge: string;
  architecture: string;
  technologies: string[];

  // --- CORREÇÕES APLICADAS ---

  // Corrigido: Agora pode ser uma string ou nulo, como no banco de dados.
  imageUrl: string | null;

  // Corrigido: Agora pode ser uma string ou nulo.
  liveUrl: string | null;
  githubUrl: string | null;

  // Adicionado: Campos de data que vêm do banco.
  // O Prisma serializa datas como strings no formato ISO 8601 ao enviar via JSON.
  createdAt: string;
  updatedAt: string;
}
