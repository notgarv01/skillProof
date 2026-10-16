import React from 'react';
import { X, ShieldCheck, Github, FileCode, CheckCircle2, AlertCircle, ExternalLink, ArrowRight } from 'lucide-react';

export function DetailModal({ skill, candidate, onClose, onLaunchChallenge }) {
  if (!skill) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <div className="pill-badge pill-badge-blue" style={{ marginBottom: '8px' }}>
              <ShieldCheck size={12} />
              <span>EVIDENCE AUDIT DOSSIER</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>
              {skill.name} Proof Verification
            </h2>
            <div style={{ fontSize: '0.84rem', color: '#64748B', marginTop: '2px' }}>
              Candidate: <strong>{candidate.name}</strong> • Category: {skill.category}
            </div>
          </div>

          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#94A3B8' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Claim vs Evidence Tier Comparison Box */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
          <div style={{ padding: '14px 18px', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <span className="mono-tag" style={{ color: '#64748B', fontSize: '0.68rem' }}>CANDIDATE CLAIM</span>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>
              {skill.claim}
            </div>
            <p style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '4px' }}>
              Self-reported proficiency on resume.
            </p>
          </div>

          <div style={{ padding: '14px 18px', background: '#EFF6FF', borderRadius: '12px', border: '1px solid #BFDBFE' }}>
            <span className="mono-tag" style={{ color: '#0062FF', fontSize: '0.68rem' }}>VERIFIED EVIDENCE TIER</span>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0062FF', marginTop: '4px' }}>
              {skill.tier} Evidence ({skill.tierScore || 90}%)
            </div>
            <p style={{ fontSize: '0.74rem', color: '#1E40AF', marginTop: '4px' }}>
              Assessed from verified artifacts & tests.
            </p>
          </div>
        </div>

        {/* Linked Evidence Sources */}
        <div style={{ marginBottom: '22px' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
            Verified Linked Sources ({skill.sources?.length || 0})
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {skill.sources?.map((src, i) => (
              <div 
                key={i}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: '12px 16px', 
                  background: '#FFFFFF', 
                  borderRadius: '10px', 
                  border: '1px solid #E2E8F0' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {src.type?.includes('GitHub') ? (
                    <Github size={16} color="#0F172A" />
                  ) : (
                    <FileCode size={16} color="#0062FF" />
                  )}
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>{src.name}</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                      {src.type} {src.commits ? `• ${src.commits} commits` : ''} {src.status ? `• ${src.status}` : ''}
                    </div>
                  </div>
                </div>

                <span className="pill-badge pill-badge-green" style={{ fontSize: '0.65rem' }}>
                  ✓ Verified
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Explainability Section */}
        <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '20px' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
            AI Explainability Note
          </div>
          <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.5 }}>
            {skill.explanation}
          </p>
        </div>

        {/* Gap Notice if present */}
        {skill.gap && (
          <div style={{ background: '#FFFBEB', padding: '14px', borderRadius: '12px', border: '1px solid #FDE68A', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#B45309', fontWeight: 700, fontSize: '0.8rem' }}>
              <AlertCircle size={14} />
              <span>Identified Evidence Gap</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#92400E', marginTop: '4px' }}>
              {skill.gap}
            </p>
          </div>
        )}

        {/* Action footer */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button 
            className="btn btn-primary-blue"
            onClick={() => {
              onClose();
              if (onLaunchChallenge) onLaunchChallenge();
            }}
          >
            <span>Run Practical Verification Test</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
