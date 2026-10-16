import React from 'react';
import { 
  CheckCircle2, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  ArrowRight, 
  AlertCircle, 
  Layers, 
  ShieldCheck, 
  FileCheck,
  Terminal
} from 'lucide-react';

export function CapabilitiesGrid({ candidate, onOpenSandbox, onOpenRecruiter, onSelectSkillDetail }) {
  return (
    <section className="capabilities-section" id="capabilities">
      {/* Section Header */}
      <div className="section-header-centered">
        <div className="pill-badge pill-badge-blue">
          <span className="dot-indicator dot-blue"></span>
          <span>CORE KILLER FEATURES</span>
        </div>
        <h2 className="section-title">The SkillProof Evidence Architecture</h2>
        <p className="section-subtitle">
          Six foundational layers connecting raw developer artifacts to company hiring conviction. 
          Transparent, explainable, and zero keyword fluff.
        </p>
      </div>

      {/* 2x2 Capabilities Grid (Exact visual replica of Screenshot 2) */}
      <div className="capabilities-grid">
        {/* CARD 01: CLAIM VS EVIDENCE */}
        <div className="capability-card">
          <div>
            <div className="card-num-badge">01. CLAIM VS EVIDENCE</div>
            <h3 className="card-heading">Claim vs Evidence Engine</h3>
            <p className="card-desc">
              Resumes claim advanced proficiency; SkillProof audits every claim against 
              concrete repositories, commit cadence, and code complexity. Eliminate keyword 
              inflation before the first interview.
            </p>
          </div>

          {/* Embedded Live Mockup: Table + Intent Stream matching Screenshot 2 */}
          <div className="card-mockup-wrapper">
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.9fr', gap: '14px', alignItems: 'start' }}>
              {/* Left: Skill Claims Table */}
              <div style={{ background: '#FFFFFF', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="mono-tag" style={{ color: '#0F172A', fontSize: '0.68rem' }}>SKILL CLAIMS</span>
                  <span className="pill-badge pill-badge-green" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>
                    <span className="dot-indicator dot-green"></span> LIVE
                  </span>
                </div>

                <table className="live-stream-table">
                  <thead>
                    <tr>
                      <th>Claim</th>
                      <th>Proof</th>
                      <th>Tier</th>
                    </tr>
                  </thead>
                  <tbody>
                    {candidate.skills.slice(0, 3).map((s, idx) => (
                      <tr 
                        key={idx} 
                        style={{ cursor: 'pointer' }}
                        onClick={() => onSelectSkillDetail && onSelectSkillDetail(s)}
                      >
                        <td style={{ fontWeight: 600 }}>{s.name}</td>
                        <td style={{ color: '#64748B', fontSize: '0.72rem' }}>
                          {s.sources[0]?.name?.slice(0, 15) || 'Verified repo'}...
                        </td>
                        <td>
                          <span 
                            className={`pill-badge ${s.tier === 'Strong' ? 'pill-badge-blue' : 'pill-badge-amber'}`}
                            style={{ fontSize: '0.62rem', padding: '2px 6px' }}
                          >
                            {s.tier}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Right: Evidence Sources Stream (Intent Signals equivalent) */}
              <div style={{ background: '#FFFFFF', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="mono-tag" style={{ color: '#0F172A', fontSize: '0.68rem' }}>EVIDENCE FEEDS</span>
                  <span className="pill-badge pill-badge-amber" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>3 verified</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.74rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B' }}></span>
                    <strong style={{ color: '#0F172A' }}>GitHub Repos</strong>
                    <span style={{ color: '#94A3B8', marginLeft: 'auto' }}>612 commits</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0062FF' }}></span>
                    <strong style={{ color: '#0F172A' }}>FastAI Pipeline</strong>
                    <span style={{ color: '#94A3B8', marginLeft: 'auto' }}>Vision ML</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
                    <strong style={{ color: '#0F172A' }}>Code Sandbox</strong>
                    <span style={{ color: '#94A3B8', marginLeft: 'auto' }}>94% Score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 02: PRACTICAL SKILL CHALLENGES */}
        <div className="capability-card">
          <div>
            <div className="card-num-badge">02. PRACTICAL CHALLENGES</div>
            <h3 className="card-heading">Practical Skill Verification</h3>
            <p className="card-desc">
              Offer short, role-specific tasks to collect direct evidence of applied ability. 
              Evaluates correctness, architectural approach, code quality, efficiency, and explanation.
            </p>
          </div>

          {/* Embedded Live Mockup: ChatGPT / AI Citation Box matching Screenshot 2 */}
          <div className="card-mockup-wrapper">
            <div className="chat-mockup-box">
              <div className="chat-mockup-header">
                <span className="mono-tag" style={{ color: '#64748B', fontSize: '0.7rem' }}>GEMINI CODE EVALUATOR</span>
                <span className="pill-badge pill-badge-blue" style={{ fontSize: '0.65rem' }}>
                  GEMINI CITED
                </span>
              </div>

              {/* User Prompt */}
              <div className="chat-bubble">
                <div className="chat-avatar chat-avatar-user">R</div>
                <div className="chat-text">
                  <strong>Recruiter:</strong> Evaluate candidate's Python streaming telemetry parser?
                </div>
              </div>

              {/* AI Response with Citation */}
              <div className="chat-bubble" style={{ marginBottom: 0 }}>
                <div className="chat-avatar chat-avatar-ai">AI</div>
                <div className="chat-text">
                  Based on test execution, candidate wrote <strong>exception-resilient O(N) code</strong> handling 
                  malformed telemetry and physical sensor bounds with 100% test pass rate.
                  <br />
                  <div 
                    className="citation-pill-link"
                    style={{ cursor: 'pointer' }}
                    onClick={onOpenSandbox}
                  >
                    <span>1 skillproof.ai/evidence/{candidate.id}. Cited in Gemini, Sandbox</span>
                    <ExternalLink size={12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 03: SKILL EVIDENCE GRAPH */}
        <div className="capability-card">
          <div>
            <div className="card-num-badge">03. EVIDENCE GRAPH & TIERS</div>
            <h3 className="card-heading">Explainable Evidence Tiers</h3>
            <p className="card-desc">
              Skills are categorized into Strong, Moderate, or Limited Evidence with supporting 
              sources and transparent gaps. Keep the system honest: evidence tiers assess available proof, 
              not a person's total limit.
            </p>
          </div>

          {/* Embedded Mockup: Tiers & Gaps Breakdown */}
          <div className="card-mockup-wrapper">
            <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                <span className="pill-badge pill-badge-blue">
                  <CheckCircle2 size={12} /> Strong Tier ({candidate.skills.filter(s => s.tier === 'Strong').length})
                </span>
                <span className="pill-badge pill-badge-amber">
                  <AlertCircle size={12} /> Moderate Tier ({candidate.skills.filter(s => s.tier.includes('Moderate')).length})
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ padding: '8px 12px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #F1F5F9' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F172A' }}>Python & ML Core</span>
                    <span className="pill-badge pill-badge-green" style={{ fontSize: '0.62rem' }}>Verified Strong</span>
                  </div>
                  <p style={{ fontSize: '0.74rem', color: '#64748B' }}>
                    Linked to 2 production repositories, 184 commits, and 94% sandbox test score.
                  </p>
                </div>

                <div style={{ padding: '8px 12px', background: '#FFFBEB', borderRadius: '8px', border: '1px solid #FEF3C7' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#92400E' }}>SQL Evidence Gap</span>
                    <span className="pill-badge pill-badge-amber" style={{ fontSize: '0.62rem' }}>Needs Index Proof</span>
                  </div>
                  <p style={{ fontSize: '0.74rem', color: '#B45309' }}>
                    Candidate has basic CRUD project proof, but lacks demonstrated query optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 04: EXPLAINABLE CANDIDATE MATCHING */}
        <div className="capability-card">
          <div>
            <div className="card-num-badge">04. EXPLAINABLE MATCHING</div>
            <h3 className="card-heading">Explainable Company Matching</h3>
            <p className="card-desc">
              Show exactly why a candidate matches a role instead of displaying an opaque match score. 
              Requirement-by-requirement transparent reasons leave the final decision to the human team.
            </p>
          </div>

          {/* Embedded Mockup: 91% Match Benchmark from PDF Page 7 */}
          <div className="card-mockup-wrapper">
            <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div>
                  <span className="mono-tag" style={{ color: '#0062FF', fontSize: '0.72rem' }}>TARGET ROLE</span>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>Junior AI / Python Developer</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0062FF' }}>91%</span>
                  <div style={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 600 }}>EVIDENCE MATCH</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{ width: '100%', height: '7px', background: '#F1F5F9', borderRadius: '999px', overflow: 'hidden', marginBottom: '12px' }}>
                <div style={{ width: '91%', height: '100%', background: 'linear-gradient(90deg, #0062FF 0%, #3B82F6 100%)', borderRadius: '999px' }}></div>
              </div>

              <div style={{ background: '#F8FAFC', padding: '10px 12px', borderRadius: '8px', borderLeft: '3px solid #0062FF' }}>
                <span style={{ fontSize: '0.75rem', color: '#0F172A', fontWeight: 600 }}>Why recommended?</span>
                <p style={{ fontSize: '0.74rem', color: '#475569', marginTop: '2px' }}>
                  Strong evidence for Python, Machine Learning, and Git; moderate evidence for SQL and APIs.
                </p>
              </div>

              <button 
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', marginTop: '12px', justifyContent: 'space-between' }}
                onClick={onOpenRecruiter}
              >
                <span>View Full Requirement Matrix</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
