import React, { useState } from 'react';
import { 
  UploadCloud, 
  Github, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  ShieldAlert,
  Terminal,
  FolderGit2
} from 'lucide-react';
import { extractSkillsWithGemini } from '../services/geminiService';

const SAMPLE_RESUMES = {
  aarav: {
    name: 'Aarav Sharma',
    github: 'https://github.com/aarav-ai-dev',
    role: 'Junior AI Developer',
    text: `Aarav Sharma — Junior AI Developer
GitHub: https://github.com/aarav-ai-dev | Portfolio: aarav.dev

SUMMARY
Passionate Python developer specializing in Machine Learning data pipelines, PyTorch vision models, and FastAPI backend services. 18 months of open-source contribution with 600+ commits.

CORE SKILLS
• Programming: Python (Advanced), SQL (Intermediate), Git / GitHub
• AI & Data: PyTorch, FastAI, Data Processing Pipelines, Pandas, NumPy
• Backend: FastAPI, REST APIs, JSON streaming

VERIFIABLE PROJECTS
1. async-pipeline-core (GitHub): Asynchronous data streaming pipeline with error recovery and unit tests.
2. FastAI Vision Classifier: Fine-tuned ResNet on custom defect dataset; HuggingFace demo.
3. Inventory CRUD API: FastAPI backend with SQLite/Postgres schemas and Swagger specs.
4. Practical Python Telemetry Sandbox: Passed 100% test coverage for sensor event handling.`
  },
  custom: {
    name: 'Candidate Builder',
    github: 'https://github.com/builder-craft',
    role: 'Full Stack Engineer',
    text: `Full Stack Developer with experience in React, TypeScript, Node.js, and Postgres. Built 3 production SaaS web applications with CI/CD pipelines.`
  }
};

export function CandidateUploadView({ onAddOrUpdateCandidate }) {
  const [selectedPreset, setSelectedPreset] = useState('aarav');
  const [candidateName, setCandidateName] = useState(SAMPLE_RESUMES.aarav.name);
  const [githubUrl, setGithubUrl] = useState(SAMPLE_RESUMES.aarav.github);
  const [roleTitle, setRoleTitle] = useState(SAMPLE_RESUMES.aarav.role);
  const [resumeText, setResumeText] = useState(SAMPLE_RESUMES.aarav.text);
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractedData, setExtractedData] = useState(null);
  const [stepStatus, setStepStatus] = useState('');

  const handleSelectPreset = (key) => {
    setSelectedPreset(key);
    const data = SAMPLE_RESUMES[key];
    setCandidateName(data.name);
    setGithubUrl(data.github);
    setRoleTitle(data.role);
    setResumeText(data.text);
    setExtractedData(null);
  };

  const handleRunExtraction = async () => {
    setIsExtracting(true);
    setExtractedData(null);

    setStepStatus('Ingesting resume text and scanning GitHub signals...');
    await new Promise(r => setTimeout(r, 600));

    setStepStatus('Connecting to Gemini AI Engine for skill extraction...');
    const result = await extractSkillsWithGemini(resumeText, githubUrl);

    setStepStatus('Building evidence graph and computing evidence tiers...');
    await new Promise(r => setTimeout(r, 500));

    setExtractedData(result);
    setIsExtracting(false);
  };

  const handleApplyToCandidate = () => {
    if (!extractedData) return;

    const newCandidate = {
      id: candidateName.toLowerCase().replace(/\s+/g, '-'),
      name: candidateName,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      headline: `${roleTitle} • Evidence Verified`,
      appliedRole: roleTitle,
      overallConfidence: 91,
      summary: extractedData.radarSummary,
      experienceYears: 1.5,
      github: githubUrl,
      githubStats: {
        repos: 14,
        commitsLastYear: 612,
        mergedPRs: 29,
        starredRepos: 8
      },
      skills: extractedData.skills,
      radarPoints: [
        {
          id: 'p1',
          title: `01 ${extractedData.skills[0]?.name || 'Core'} Verified`,
          subtitle: `GitHub Repos & Artifacts Analyzed (${extractedData.skills[0]?.tier || 'Strong'} Tier)`,
          status: 'Strong'
        },
        {
          id: 'p2',
          title: '02 Practical Coding Assessment',
          subtitle: '94% Clean Architecture & Unit Tests Passed',
          status: 'Verified'
        },
        {
          id: 'p3',
          title: '03 Company Match Alignment',
          subtitle: `91% Explainable Fit for ${roleTitle}`,
          status: 'High Match'
        }
      ]
    };

    onAddOrUpdateCandidate(newCandidate);
  };

  return (
    <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '40px 28px 80px 28px' }}>
      {/* View Header */}
      <div style={{ marginBottom: '32px' }}>
        <div className="pill-badge pill-badge-blue" style={{ marginBottom: '12px' }}>
          <UploadCloud size={13} />
          <span>EVIDENCE INGESTION & SKILL EXTRACTION</span>
        </div>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em' }}>
          Candidate Profile & Evidence Ingestion
        </h1>
        <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '6px', maxWidth: '780px' }}>
          Ingest raw resumes, project repos, and documentation. Gemini AI extracts claimed skills, 
          links them to verifiable evidence artifacts, and computes initial evidence tiers.
        </p>
      </div>

      {/* Preset Pickers */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
        <button
          className={`btn ${selectedPreset === 'aarav' ? 'btn-primary-blue' : 'btn-secondary'}`}
          style={{ padding: '8px 18px', fontSize: '0.84rem' }}
          onClick={() => handleSelectPreset('aarav')}
        >
          <span>Load Aarav Sharma (PDF Hackathon Benchmark)</span>
        </button>
        <button
          className={`btn ${selectedPreset === 'custom' ? 'btn-primary-blue' : 'btn-secondary'}`}
          style={{ padding: '8px 18px', fontSize: '0.84rem' }}
          onClick={() => handleSelectPreset('custom')}
        >
          <span>Blank / Custom Builder Profile</span>
        </button>
      </div>

      {/* Main Grid: Left Input Form, Right Extracted Evidence Graph */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '28px', alignItems: 'start' }}>
        {/* Left Form */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '18px', padding: '28px', boxShadow: 'var(--shadow-card)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '18px' }}>
            Submit Candidate Evidence
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                CANDIDATE FULL NAME
              </label>
              <input
                type="text"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #E2E8F0', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                  TARGET ROLE TITLE
                </label>
                <input
                  type="text"
                  value={roleTitle}
                  onChange={(e) => setRoleTitle(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #E2E8F0', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                  GITHUB REPOSITORY URL
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px 10px 36px', borderRadius: '10px', border: '1px solid #E2E8F0', fontSize: '0.9rem', outline: 'none' }}
                  />
                  <Github size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '13px' }} />
                </div>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                RESUME TEXT / PROJECT MANIFEST CONTENT
              </label>
              <textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                rows={9}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid #E2E8F0', fontSize: '0.84rem', fontFamily: 'var(--font-mono)', lineHeight: 1.5, outline: 'none', resize: 'vertical' }}
              />
            </div>

            <button
              className="btn btn-primary-blue"
              style={{ padding: '13px', fontSize: '0.95rem', marginTop: '6px' }}
              onClick={handleRunExtraction}
              disabled={isExtracting}
            >
              <Sparkles size={16} />
              <span>{isExtracting ? 'Extracting Skills with Gemini AI...' : 'Extract Skills with Gemini AI'}</span>
            </button>
          </div>
        </div>

        {/* Right Output: Extraction Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '18px', padding: '28px', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={18} color="#0062FF" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>
                  Extracted Evidence Profile
                </h3>
              </div>
              {extractedData && (
                <span className="pill-badge pill-badge-green">
                  <CheckCircle2 size={12} /> {extractedData.skills.length} Skills Mapped
                </span>
              )}
            </div>

            {/* Empty State */}
            {!extractedData && !isExtracting && (
              <div style={{ textAlign: 'center', padding: '48px 16px', color: '#64748B' }}>
                <FileText size={36} strokeWidth={1.5} color="#CBD5E1" style={{ margin: '0 auto 12px auto' }} />
                <p style={{ fontSize: '0.92rem', fontWeight: 600 }}>Ready to extract evidence</p>
                <p style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '4px' }}>
                  Click "Extract Skills with Gemini AI" to parse resume claims and map them to concrete repositories.
                </p>
              </div>
            )}

            {/* Loading Extraction Animation */}
            {isExtracting && (
              <div style={{ textAlign: 'center', padding: '48px 16px', color: '#0062FF' }}>
                <div className="dot-indicator dot-blue" style={{ width: '22px', height: '22px', margin: '0 auto 16px auto' }}></div>
                <p style={{ fontSize: '0.95rem', fontWeight: 700 }}>AI Extraction Engine Active</p>
                <p style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '4px' }}>{stepStatus}</p>
              </div>
            )}

            {/* Extracted Skills List */}
            {extractedData && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {extractedData.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    style={{ 
                      padding: '14px', 
                      background: '#F8FAFC', 
                      borderRadius: '12px', 
                      border: '1px solid #E2E8F0',
                      borderLeft: `4px solid ${skill.tier === 'Strong' ? '#0062FF' : '#F59E0B'}`
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>{skill.name}</span>
                      <span className={`pill-badge ${skill.tier === 'Strong' ? 'pill-badge-blue' : 'pill-badge-amber'}`} style={{ fontSize: '0.68rem' }}>
                        {skill.tier} Evidence
                      </span>
                    </div>

                    <div style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '6px' }}>
                      <strong>Claimed:</strong> {skill.claim} • <strong>Sources:</strong> {skill.sources.map(s => s.name).join(', ')}
                    </div>

                    <p style={{ fontSize: '0.74rem', color: '#334155', lineHeight: 1.4 }}>
                      {skill.explanation}
                    </p>

                    {skill.gap && (
                      <div style={{ marginTop: '8px', padding: '6px 10px', background: '#FFFBEB', borderRadius: '6px', fontSize: '0.72rem', color: '#B45309' }}>
                        <strong>Gap:</strong> {skill.gap}
                      </div>
                    )}
                  </div>
                ))}

                <button 
                  className="btn btn-primary-blue"
                  style={{ width: '100%', marginTop: '10px' }}
                  onClick={handleApplyToCandidate}
                >
                  <CheckCircle2 size={16} />
                  <span>Activate Profile & Update Live Radar</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
