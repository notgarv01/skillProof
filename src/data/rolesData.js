// Company Role Specifications & Matching Criteria
// Matches Page 6 and 7 of the SkillProof Project Overview PDF

export const DEFAULT_ROLES = [
  {
    id: 'junior-python-dev',
    title: 'Junior Python Developer',
    department: 'AI & Data Engineering',
    company: 'NeuralFlow Labs',
    experienceRange: '0–2 years',
    location: 'Remote / Hybrid (Bengaluru / Udaipur)',
    overview: 'Looking for a foundational Python developer to build robust asynchronous data ingestion pipelines and interface with machine learning models.',
    requiredSkills: [
      {
        skill: 'Python',
        minimumTier: 'Strong',
        weight: 30,
        description: 'Clean idiomatic Python, async/await patterns, data structures, and edge-case handling.'
      },
      {
        skill: 'Machine Learning',
        minimumTier: 'Moderate',
        weight: 20,
        description: 'Working familiarity with PyTorch or Scikit-Learn pipelines and model inference.'
      },
      {
        skill: 'Git',
        minimumTier: 'Moderate',
        weight: 15,
        description: 'Branch hygiene, commit history, pull requests, and collaborative version control.'
      },
      {
        skill: 'SQL',
        minimumTier: 'Moderate',
        weight: 15,
        description: 'Schema modeling, relational joins, indexing, and basic query optimization.'
      },
      {
        skill: 'API Development',
        minimumTier: 'Strong',
        weight: 20,
        description: 'RESTful API construction with FastAPI or Flask, schema validation, and documentation.'
      }
    ],
    // The benchmark prototype match from PDF Page 7
    benchmarkMatchId: 'aarav-sharma',
    benchmarkScore: 91,
    benchmarkExplanation: 'Strong evidence for Python, Machine Learning, and Git; moderate evidence for SQL and APIs. Candidate demonstrates high hands-on proficiency in core coding challenges and public GitHub velocity.'
  },
  {
    id: 'senior-frontend-eng',
    title: 'Senior Frontend Engineer',
    department: 'Web Experience Team',
    company: 'Apex Cloud Systems',
    experienceRange: '3–5 years',
    location: 'Remote',
    overview: 'Seeking an expert frontend engineer to architect high-performance React design systems and real-time dashboard interfaces.',
    requiredSkills: [
      { skill: 'React & Next.js', minimumTier: 'Strong', weight: 40, description: 'Component architecture, performance profiling, and state management.' },
      { skill: 'TypeScript', minimumTier: 'Strong', weight: 30, description: 'Strict typing, complex generics, and type safety across large codebases.' },
      { skill: 'Node.js & APIs', minimumTier: 'Moderate', weight: 30, description: 'Backend-for-Frontend development and REST / GraphQL consumption.' }
    ],
    benchmarkMatchId: 'priya-patel',
    benchmarkScore: 89,
    benchmarkExplanation: 'Strong evidence across production React design systems and strict TypeScript. Backend microservice proof is moderate, making her exceptional for client-facing architecture.'
  },
  {
    id: 'cloud-backend-eng',
    title: 'Cloud Infrastructure / Python Backend',
    department: 'Platform Systems',
    company: 'HyperScale Infra',
    experienceRange: '2–4 years',
    location: 'Bengaluru, India',
    overview: 'Build resilient cloud automation, Kubernetes operator pipelines, and performant backend services.',
    requiredSkills: [
      { skill: 'Docker & Kubernetes', minimumTier: 'Strong', weight: 40, description: 'CKA certification, Helm chart management, and container security.' },
      { skill: 'Go / Golang', minimumTier: 'Moderate', weight: 30, description: 'Concurrent daemon construction and channel-based threading.' },
      { skill: 'Python', minimumTier: 'Moderate', weight: 30, description: 'Automation scripting and REST API maintenance.' }
    ],
    benchmarkMatchId: 'marcus-chen',
    benchmarkScore: 86,
    benchmarkExplanation: 'Exceptional verified cloud and containerization credentials with active GitHub repos. Python capabilities are moderate, perfectly aligned with automation requirements.'
  }
];
