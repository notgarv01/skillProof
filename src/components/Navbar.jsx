import React from 'react';
import { ShieldCheck, ChevronDown, Sparkles, ArrowRight, UserCheck } from 'lucide-react';

export function Navbar({ activeView, setActiveView, currentCandidate, onSelectCandidate, candidates, onOpenUpload, onOpenDemo }) {
  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        {/* Left: Brand Logo */}
        <div className="nav-left">
          <div className="brand-logo" onClick={() => setActiveView('landing')}>
            <div className="logo-icon-box">
              <ShieldCheck size={22} strokeWidth={2.4} />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span className="brand-text">SkillProof</span>
              <span className="brand-badge">ABC 2026</span>
            </div>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="nav-center">
          <button 
            className={`nav-link ${activeView === 'landing' ? 'active' : ''}`}
            onClick={() => setActiveView('landing')}
          >
            Overview
          </button>
          <button 
            className={`nav-link ${activeView === 'challenge' ? 'active' : ''}`}
            onClick={() => setActiveView('challenge')}
          >
            Practical Sandbox
          </button>
          <button 
            className={`nav-link ${activeView === 'recruiter' ? 'active' : ''}`}
            onClick={() => setActiveView('recruiter')}
          >
            Company Matcher
          </button>
          <button 
            className={`nav-link ${activeView === 'upload' ? 'active' : ''}`}
            onClick={() => setActiveView('upload')}
          >
            Upload Evidence
          </button>
        </nav>

        {/* Right: Candidate Selector & Action CTA */}
        <div className="nav-right">
          {/* Candidate Profile Quick Switcher */}
          <div className="candidate-preset-select" title="Switch active candidate profile">
            <UserCheck size={14} color="#0062FF" />
            <select
              value={currentCandidate.id}
              onChange={(e) => {
                const found = candidates.find(c => c.id === e.target.value);
                if (found) onSelectCandidate(found);
              }}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontFamily: 'inherit',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'inherit',
                cursor: 'pointer'
              }}
            >
              {candidates.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.skills[0].name})
                </option>
              ))}
            </select>
          </div>

          {/* Primary Action Button (Growleads Dark Pill) */}
          <button 
            className="btn btn-dark"
            onClick={onOpenDemo}
          >
            <span>Audit Evidence</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}
