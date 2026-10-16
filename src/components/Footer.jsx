import React from 'react';
import { ShieldCheck, Heart, Github, Award } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ background: '#0F172A', color: '#94A3B8', padding: '60px 28px 40px 28px', borderTop: '1px solid #1E293B' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: '40px', paddingBottom: '40px', borderBottom: '1px solid #1E293B' }}>
          {/* Col 1: Brand & Slogan */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div className="logo-icon-box" style={{ width: '32px', height: '32px' }}>
                <ShieldCheck size={20} />
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF' }}>SkillProof</span>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#94A3B8', maxWidth: '380px', lineHeight: 1.6 }}>
              Don't just claim your skills. Prove them. An AI-powered evidence layer 
              connecting GitHub activity, practical code challenges, and company specifications.
            </p>

            <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
              <span className="pill-badge pill-badge-blue" style={{ background: 'rgba(0,98,255,0.15)', borderColor: 'rgba(0,98,255,0.3)', color: '#60A5FA' }}>
                Aravali Build Championship 2026
              </span>
              <span className="pill-badge pill-badge-slate" style={{ background: '#1E293B', color: '#E2E8F0', borderColor: '#334155' }}>
                GDG Udaipur
              </span>
            </div>
          </div>

          {/* Col 2: Team Code Reign */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
              Team Code Reign
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
              <li style={{ color: '#E2E8F0' }}><strong>Lakshya Yadav</strong> — Team Leader & Architect</li>
              <li style={{ color: '#CBD5E1' }}><strong>Garv Gupta</strong> — Core Systems</li>
              <li style={{ color: '#CBD5E1' }}><strong>Princy Joshi</strong> — AI & Evaluations</li>
              <li style={{ color: '#CBD5E1' }}><strong>Pranjal Malviya</strong> — Product & Data</li>
            </ul>
          </div>

          {/* Col 3: Principles & Future Scope */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
              Responsible AI Principles
            </h4>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.5, color: '#94A3B8' }}>
              • Consented public evidence ingestion<br />
              • Transparent explanation for every tier<br />
              • Non-infallible AI: Humans remain in final hiring control<br />
              • Zero keyword fluff
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', fontSize: '0.78rem' }}>
          <div>
            © 2026 SkillProof • Built for Aravali Build Championship by GDG Udaipur
          </div>
          <div style={{ color: '#64748B' }}>
            "We are not trying to replace job portals. We add an evidence layer between a candidate’s claims and a company’s confidence."
          </div>
        </div>
      </div>
    </footer>
  );
}
