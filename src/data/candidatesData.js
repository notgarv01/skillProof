// SkillProof Evidence-Based Candidate Database
// Modeled directly on the SkillProof Project Overview PDF & Aravali Build Challenge specifications

export const INITIAL_CANDIDATES = [
  {
    id: 'aarav-sharma',
    name: 'Aarav Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    headline: 'AI & Python Developer • Evidence Verified',
    appliedRole: 'Junior AI Developer',
    overallConfidence: 91,
    summary: 'Strong practical evidence across Python, ML pipelines, and version control. Moderate database and API design evidence. Proven through GitHub commit velocity and practical coding challenge.',
    experienceYears: 1.5,
    github: 'https://github.com/aarav-ai-dev',
    githubStats: {
      repos: 14,
      commitsLastYear: 612,
      mergedPRs: 29,
      starredRepos: 8
    },
    skills: [
      {
        name: 'Python',
        category: 'Core Language',
        claim: 'Advanced (3+ yrs)',
        tier: 'Strong',
        tierScore: 96,
        sources: [
          { type: 'GitHub Repo', name: 'async-pipeline-core', commits: 184, role: 'Sole Author' },
          { type: 'Project', name: 'Distributed Log Parser', status: 'In Production' },
          { type: 'Assessment', name: 'Practical Python Sandbox', score: '94/100', testCoverage: '100%' }
        ],
        explanation: 'Multiple active repositories with clean modular architecture, typing hints, and verified algorithmic efficiency in the practical challenge.'
      },
      {
        name: 'Machine Learning',
        category: 'AI / Data',
        claim: 'Intermediate / Applied',
        tier: 'Strong',
        tierScore: 91,
        sources: [
          { type: 'Project', name: 'FastAI Vision Classifier', status: 'Deployed on HuggingFace' },
          { type: 'Model Implementation', name: 'PyTorch Transformer from scratch', status: 'Verifiable weights' },
          { type: 'Documentation', name: 'MLOps Evaluation Docs & Benchmarks', status: 'Peer Reviewed' }
        ],
        explanation: 'Concrete model training scripts, loss curve documentation, and deployed inference endpoints on Hugging Face.'
      },
      {
        name: 'Git',
        category: 'DevOps & Tooling',
        claim: 'Proficient',
        tier: 'Strong',
        tierScore: 94,
        sources: [
          { type: 'GitHub Activity', name: '612 commits across 14 public repositories' },
          { type: 'PR Reviews', name: '29 merged pull requests with descriptive changelogs' }
        ],
        explanation: 'Consistent multi-branch commit cadence, atomic commits, and clear PR descriptions over 18 continuous months.'
      },
      {
        name: 'SQL',
        category: 'Database',
        claim: 'Intermediate',
        tier: 'Moderate',
        tierScore: 68,
        sources: [
          { type: 'Project', name: 'E-commerce CRUD schema', status: 'Single project usage' },
          { type: 'Assessment', name: 'Limited query benchmark data' }
        ],
        gap: 'Lacks demonstrated evidence in complex indexing, query optimization, and transaction isolation.',
        explanation: 'Basic schema design and CRUD operations verified, but lacks evidence of high-concurrency optimization or indexing strategies.'
      },
      {
        name: 'API Development',
        category: 'Backend',
        claim: 'Advanced',
        tier: 'Moderate',
        tierScore: 74,
        sources: [
          { type: 'Project', name: 'FastAPI Microservice with Swagger docs' }
        ],
        gap: 'No evidence of distributed caching (Redis) or rate-limiting architecture under load.',
        explanation: 'Standard REST endpoints built with OpenAPI documentation, but limited evidence on authentication security and high-load stress testing.'
      }
    ],
    radarPoints: [
      {
        id: 'p1',
        title: '01 Python & ML Verified',
        subtitle: 'GitHub Repos & FastAI Pipeline Analyzed (Strong Tier)',
        angle: 60,
        radius: 72,
        status: 'Strong'
      },
      {
        id: 'p2',
        title: '02 Practical Coding Assessment',
        subtitle: '94% Clean Architecture & Async Unit Tests Passed',
        angle: 195,
        radius: 82,
        status: 'Verified'
      },
      {
        id: 'p3',
        title: '03 Company Match Alignment',
        subtitle: '91% Explainable Fit for Junior AI Developer',
        angle: 310,
        radius: 78,
        status: 'High Match'
      }
    ]
  },
  {
    id: 'priya-patel',
    name: 'Priya Patel',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    headline: 'Full Stack Engineer • Frontend & React Specialist',
    appliedRole: 'Senior Frontend Engineer',
    overallConfidence: 89,
    summary: 'Exceptional evidence in React, TypeScript, and UI Design Systems. Moderate testing coverage on backend services.',
    experienceYears: 3.2,
    github: 'https://github.com/priya-frontend-craft',
    githubStats: {
      repos: 22,
      commitsLastYear: 890,
      mergedPRs: 58,
      starredRepos: 24
    },
    skills: [
      {
        name: 'React & Next.js',
        category: 'Frontend',
        claim: 'Senior / Expert',
        tier: 'Strong',
        tierScore: 98,
        sources: [
          { type: 'GitHub Repo', name: 'design-system-core', commits: 340 },
          { type: 'Production Web App', name: 'Fintech SaaS Dashboard', status: 'Live with 10k users' }
        ],
        explanation: 'Deep component architecture, state management optimization, and custom hook library demonstrated across 4 live production apps.'
      },
      {
        name: 'TypeScript',
        category: 'Frontend',
        claim: 'Advanced',
        tier: 'Strong',
        tierScore: 92,
        sources: [
          { type: 'GitHub Repo', name: 'Strict type utilities package on npm' }
        ],
        explanation: 'Strict typing flags enabled across all repos; generic interfaces used effectively without "any" escapes.'
      },
      {
        name: 'Node.js & APIs',
        category: 'Backend',
        claim: 'Proficient',
        tier: 'Moderate',
        tierScore: 71,
        sources: [
          { type: 'Project', name: 'Express BFF for frontend app' }
        ],
        gap: 'Needs evidence in message brokers (RabbitMQ/Kafka) and horizontal scale.',
        explanation: 'Adequate for backend-for-frontend and REST APIs, but limited microservice evidence.'
      }
    ],
    radarPoints: [
      {
        id: 'p1',
        title: '01 React & Design Systems',
        subtitle: '4 Production Apps + Custom NPM Design System (Strong Tier)',
        angle: 45,
        radius: 88,
        status: 'Strong'
      },
      {
        id: 'p2',
        title: '02 TypeScript & Code Quality',
        subtitle: 'Strict TS Mode & 0 Any Types in 14k LOC',
        angle: 170,
        radius: 80,
        status: 'Verified'
      },
      {
        id: 'p3',
        title: '03 Frontend Lead Alignment',
        subtitle: '89% Explainable Fit for Senior Frontend Engineer',
        angle: 300,
        radius: 75,
        status: 'High Match'
      }
    ]
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    headline: 'Backend & Cloud Systems Engineer',
    appliedRole: 'Cloud Infrastructure / Python Backend',
    overallConfidence: 86,
    summary: 'Strong Docker, Kubernetes, and Golang backend proof. Moderate Python machine learning integration.',
    experienceYears: 2.8,
    github: 'https://github.com/marcus-systems-infra',
    githubStats: {
      repos: 18,
      commitsLastYear: 520,
      mergedPRs: 41,
      starredRepos: 15
    },
    skills: [
      {
        name: 'Docker & Kubernetes',
        category: 'DevOps / Cloud',
        claim: 'Advanced',
        tier: 'Strong',
        tierScore: 95,
        sources: [
          { type: 'GitHub Repo', name: 'k8s-gitops-terraform', commits: 210 },
          { type: 'Cert', name: 'CKA - Certified Kubernetes Administrator', status: 'Verified Credential' }
        ],
        explanation: 'Production Helm charts, multi-stage Dockerfiles, and Terraform provisioning scripts verified.'
      },
      {
        name: 'Go / Golang',
        category: 'Backend',
        claim: 'Proficient',
        tier: 'Strong',
        tierScore: 88,
        sources: [
          { type: 'Project', name: 'High-throughput UDP packet aggregator' }
        ],
        explanation: 'Concurrency patterns using Goroutines and channels tested with race condition analyzers.'
      },
      {
        name: 'Python',
        category: 'Core Language',
        claim: 'Intermediate',
        tier: 'Moderate',
        tierScore: 73,
        sources: [
          { type: 'Scripting', name: 'Automated CI/CD bot scripts' }
        ],
        gap: 'Needs more evidence in web frameworks and data processing pipelines.',
        explanation: 'Solid scripting capability for infrastructure automation, but limited web framework evidence.'
      }
    ],
    radarPoints: [
      {
        id: 'p1',
        title: '01 Cloud & Kubernetes Core',
        subtitle: 'CKA Verified + Helm & Terraform Repos (Strong Tier)',
        angle: 50,
        radius: 85,
        status: 'Strong'
      },
      {
        id: 'p2',
        title: '02 Go Concurrency Sandbox',
        subtitle: 'Race-condition free Goroutine stress tests passed',
        angle: 180,
        radius: 76,
        status: 'Verified'
      },
      {
        id: 'p3',
        title: '03 Cloud Infra Alignment',
        subtitle: '86% Match for Backend / DevOps Role',
        angle: 320,
        radius: 73,
        status: 'High Match'
      }
    ]
  }
];
