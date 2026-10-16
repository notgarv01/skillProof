import React, { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  ArrowRight, 
  UserCheck, 
  Filter, 
  FileCheck,
  Send,
  Building
} from 'lucide-react';
import { DEFAULT_ROLES } from '../data/rolesData';
import { calculateCandidateMatch } from '../services/matchingEngine';

export function RecruiterMatchView({ candidates, currentCandidate, onSelectCandidate, onInviteChallenge }) {
  const [selectedRole, setSelectedRole] = useState(DEFAULT_ROLES[0]);
  const [selectedCandidate, setSelectedCandidate] = useState(currentCandidate);

  // Run the explainable matching engine
  const matchResult = calculateCandidateMatch(selectedCandidate, selectedRole);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleCandidateChange = (cand) => {
    setSelectedCandidate(cand);
    if (onSelectCandidate) onSelectCandidate(cand);
  };

  return (
    <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '40px 28px 80px 28px' }}>
      {/* View Header */}
      <div style={{ marginBottom: '32px' }}>
        <div className="pill-badge pill-badge-blue" style={{ marginBottom: '12px' }}>
          <Briefcase size={13} />
          <span>COMPANY REQUIREMENTS & EXPLAINABLE MATCHING</span>
        </div>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em' }}>
          Explainable Candidate Matching Matrix
        </h1>
        <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '6px', maxWidth: '780px' }}>
          No black boxes. SkillProof maps company specifications directly against verified evidence tiers, 
          explaining exactly why a score was calculated and highlighting transparent skill gaps.
        </p>
      </div>

      {/* Role & Candidate Selectors Bar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', marginBottom: '32px' }}>
        {/* Role Selector Card */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '18px', padding: '20px', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Building size={16} color="#0062FF" />
            <span className="mono-tag" style={{ color: '#0062FF' }}>SELECT COMPANY ROLE CRITERIA</span>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {DEFAULT_ROLES.map(role => (
              <button
                key={role.id}
                className={`btn ${selectedRole.id === role.id ? 'btn-primary-blue' : 'btn-secondary'}`}
                style={{ padding: '8px 16px', fontSize: '0.84rem' }}
                onClick={() => handleRoleChange(role)}
              >
                <span>{role.title}</span>
              </button>
            ))}
          </div>

          <div style={{ marginTop: '16px', fontSize: '0.82rem', color: '#64748B', display: 'flex', gap: '16px' }}>
            <span><strong>Company:</strong> {selectedRole.company}</span>
            <span><strong>Experience:</strong> {selectedRole.experienceRange}</span>
            <span><strong>Location:</strong> {selectedRole.location}</span>
          </div>
        </div>

        {/* Candidate Selector Card */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '18px', padding: '20px', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <UserCheck size={16} color="#0062FF" />
            <span className="mono-tag" style={{ color: '#0062FF' }}>SELECT CANDIDATE TO EVALUATE</span>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {candidates.map(cand => (
              <button
                key={cand.id}
                className={`btn ${selectedCandidate.id === cand.id ? 'btn-dark' : 'btn-secondary'}`}
                style={{ padding: '8px 16px', fontSize: '0.84rem' }}
                onClick={() => handleCandidateChange(cand)}
              >
                <span>{cand.name}</span>
                <span style={{ opacity: 0.7, fontSize: '0.74rem' }}>({cand.appliedRole.split(' ')[0]})</span>
              </button>
            ))}
          </div>

          <div style={{ marginTop: '16px', fontSize: '0.82rem', color: '#64748B' }}>
            <strong>Public GitHub:</strong> {selectedCandidate.github} • {selectedCandidate.githubStats.commitsLastYear} commits
          </div>
        </div>
      </div>

      {/* MATCH RESULT BANNER (Matches PDF Page 7 exactly!) */}
      {matchResult && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* 91% Benchmark Box */}
          <div 
            style={{ 
              background: '#FFFFFF', 
              border: '2px solid #0062FF', 
              borderRadius: '20px', 
              padding: '30px', 
              boxShadow: 'var(--shadow-float)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <div>
                <span className="mono-tag" style={{ color: '#0062FF', fontSize: '0.76rem' }}>EXPLAINABLE MATCH VERDICT</span>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>
                  {matchResult.candidateName} ↔ {matchResult.roleTitle}
                </h2>
              </div>

              {/* Big Score Indicator */}
              <div style={{ textAlign: 'right', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: '#0062FF', lineHeight: 1 }}>
                  {matchResult.matchScore}%
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#475569' }}>
                  evidence match
                </span>
              </div>
            </div>

            {/* Why Recommended Callout (Exact text from PDF Page 7) */}
            <div 
              style={{ 
                background: '#EFF6FF', 
                border: '1px solid #BFDBFE', 
                borderRadius: '12px', 
                padding: '16px 20px',
                marginBottom: '24px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E40AF', fontWeight: 700, fontSize: '0.92rem' }}>
                <Info size={16} />
                <span>Why recommended?</span>
              </div>
              <p style={{ color: '#1E3A8A', fontSize: '0.92rem', marginTop: '4px', lineHeight: 1.5 }}>
                {matchResult.whyRecommended}
              </p>
            </div>

            {/* Requirement Breakdown Table (Matches PDF Page 7 table structure) */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #E2E8F0', background: '#F8FAFC' }}>
                    <th style={{ padding: '12px 16px', fontSize: '0.8rem', color: '#475569', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                      ROLE REQUIREMENT
                    </th>
                    <th style={{ padding: '12px 16px', fontSize: '0.8rem', color: '#475569', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                      {matchResult.candidateName.split(' ')[0]}'S EVIDENCE
                    </th>
                    <th style={{ padding: '12px 16px', fontSize: '0.8rem', color: '#475569', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                      RESULT TIER
                    </th>
                    <th style={{ padding: '12px 16px', fontSize: '0.8rem', color: '#475569', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                      AUDIT & GAPS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {matchResult.breakdown.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '16px', fontWeight: 700, color: '#0F172A', fontSize: '0.9rem' }}>
                        <div>{row.skill}</div>
                        <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 500 }}>{row.roleRequirement}</div>
                      </td>

                      <td style={{ padding: '16px', fontSize: '0.85rem', color: '#334155' }}>
                        <div style={{ fontWeight: 600 }}>{row.candidateEvidence}</div>
                        <div style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '2px' }}>{row.evidenceDetail}</div>
                      </td>

                      <td style={{ padding: '16px' }}>
                        <span 
                          className={`pill-badge ${row.status === 'strong' ? 'pill-badge-blue' : (row.status === 'moderate' ? 'pill-badge-amber' : 'pill-badge-rose')}`}
                          style={{ fontSize: '0.76rem' }}
                        >
                          {row.status === 'strong' && <CheckCircle2 size={12} />}
                          {row.status === 'moderate' && <AlertCircle size={12} />}
                          <span>{row.resultTier}</span>
                        </span>
                      </td>

                      <td style={{ padding: '16px', fontSize: '0.8rem', color: '#475569', maxWidth: '320px' }}>
                        {row.gapNotice ? (
                          <div style={{ color: '#B45309', background: '#FEF3C7', padding: '6px 10px', borderRadius: '6px', fontSize: '0.75rem' }}>
                            {row.gapNotice}
                          </div>
                        ) : (
                          <span style={{ color: '#059669', fontSize: '0.75rem', fontWeight: 600 }}>
                            ✓ Robust evidence meets role bar
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Important Prototype Notice (Exact citation from PDF Page 7) */}
            <div style={{ marginTop: '24px', padding: '14px 18px', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', fontSize: '0.8rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Info size={16} color="#0062FF" style={{ flexShrink: 0 }} />
              <span>
                <strong>Important Principle:</strong> {matchResult.safetyDisclaimer}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
