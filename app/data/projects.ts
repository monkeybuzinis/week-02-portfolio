export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Neo4j Knowledge Graph Multi-Agent System",
    description:
      "A multi-agent AI system built with CrewAI that constructs and queries a Neo4j knowledge graph. Agents collaborate to extract entities and relationships from documents, enabling complex graph-based reasoning over structured knowledge.",
    tech: ["Python", "CrewAI", "Neo4j", "LLM", "Multi-Agent"],
    githubUrl: "https://github.com/monkeybuzinis/Neo4j-Knowledge-Graph-Multi-Agent-System-with-CrewAI",
  },
  {
    id: 2,
    title: "Multi-Agent Travel Planner",
    description:
      "An AI-powered travel planning system where multiple specialized CrewAI agents collaborate to build comprehensive, personalized travel itineraries — covering flights, accommodation, local activities, and budget optimization.",
    tech: ["Python", "CrewAI", "LLM", "Multi-Agent", "Jupyter"],
    githubUrl: "https://github.com/monkeybuzinis/Multi-Agent-Travel-Planner-with-CrewAI",
  },
  {
    id: 3,
    title: "Art Style Classification",
    description:
      "A deep learning classifier that identifies artistic styles (Impressionism, Cubism, Baroque, etc.) using transfer learning with EfficientNet-B0 fine-tuned on the WikiArt dataset.",
    tech: ["Python", "PyTorch", "EfficientNet", "Transfer Learning", "Jupyter"],
    githubUrl: "https://github.com/monkeybuzinis/Art-Style-Classfication",
  },
  {
    id: 4,
    title: "Fine-Tuning Transformers for Text Classification",
    description:
      "Explores cross-domain transfer learning by fine-tuning pre-trained transformer models on text classification tasks across different domains, analyzing how well language representations generalize.",
    tech: ["Python", "Transformers", "NLP", "Hugging Face", "Jupyter"],
    githubUrl: "https://github.com/monkeybuzinis/Fine-Tuning-Transformer-Models-for-Cross-Domain-Text-Classification",
  },
  {
    id: 5,
    title: "Text-to-Image with Stable Diffusion",
    description:
      "Experiments with Stable Diffusion v1.5 for text-to-image generation, exploring prompt engineering techniques, sampler settings, and fine-tuning strategies to control output style and composition.",
    tech: ["Python", "Stable Diffusion", "Diffusers", "Generative AI", "Jupyter"],
    githubUrl: "https://github.com/monkeybuzinis/Text-to-Image-Stable-Diffusion-v1.5",
  },
  {
    id: 6,
    title: "Personal Portfolio Site",
    description:
      "This portfolio — built with Next.js App Router and Tailwind CSS as part of CSE 552 Fullstack Development. Features responsive design, a mobile navigation menu, and a filterable projects grid using React state.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/monkeybuzinis",
  },
];
