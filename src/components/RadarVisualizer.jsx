import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ChevronRight, Layers, FileCode, ExternalLink } from 'lucide-react';

export function RadarVisualizer({ candidate, onSelectSkillDetail }) {
  const [activeCallout, setActiveCallout] = useState(null);

  const points = candidate.radarPoints || [
    {
      id: 'p1',
      title: '01 Python & ML Verified',
      subtitle: 'GitHub Repos & FastAI Pipeline Analyzed',
      status: 'Strong'
    },
    {
      id: 'p2',
      title: '02 Practical Coding Assessment',
      subtitle: '94% Clean Architecture & Async Pipeline Tests Passed',
      status: 'Verified'
    },
    {
      id: 'p3',
      title: '03 Company Match Alignment',
      subtitle: '91% Explainable Fit for Junior AI Developer',
      status: 'High Match'
    }
  ];

  return (
    <div className="hero-radar-container">
      {/* Top Header Labels (Matches Screenshot 1) */}
      <div className="radar-header-bar">
        <div className="pill-badge pill-badge-blue">
          <span className="dot-indicator dot-blue"></span>
          <span>LIVE INTELLIGENCE</span>
        </div>

        <div className="mono-tag" style={{ color: '#0062FF', fontSize: '0.74rem' }}>
          <span style={{ color: '#64748B' }}>CANDIDATE: </span>
          <span style={{ fontWeight: 700 }}>{candidate.name.toUpperCase()}</span>
          <span style={{ color: '#CBD5E1', margin: '0 6px' }}>|</span>
          <span style={{ color: '#64748B' }}>ICP: </span>
          <span style={{ fontWeight: 700 }}>{candidate.appliedRole.toUpperCase()}</span>
        </div>
      </div>

      {/* Radar Canvas with Concentric Circles, Scanning Beam and Blips */}
      <div className="radar-canvas-box">
        {/* Concentric Rings */}
        <div className="radar-ring radar-ring-1"></div>
        <div className="radar-ring radar-ring-2"></div>
        <div className="radar-ring radar-ring-3"></div>
        <div className="radar-ring radar-ring-center"></div>

        {/* Crosshairs */}
        <div className="radar-crosshair-h"></div>
        <div className="radar-crosshair-v"></div>

        {/* Rotating Radar Sweep Beam */}
        <div className="radar-sweep-beam"></div>

        {/* SVG Connector Lines from Callout Cards to Blips */}
        <svg 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            width: '100%', 
            height: '100%', 
            pointerEvents: 'none',
            zIndex: 15
          }}
        >
          {/* Line 1: Callout 01 (top-left) to Blip 1 */}
          <line x1="28%" y1="23%" x2="38%" y2="28%" stroke="#0062FF" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.65" />
          {/* Line 2: Callout 02 (top-right) to Blip 2 */}
          <line x1="72%" y1="20%" x2="62%" y2="30%" stroke="#0062FF" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.65" />
          {/* Line 3: Callout 03 (bottom-right) to Blip 3 */}
          <line x1="74%" y1="80%" x2="62%" y2="72%" stroke="#0062FF" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.65" />
        </svg>

        {/* Radar Blips (Pulsing blue dots) */}
        {/* Blip 1 */}
        <div 
          className="radar-blip"
          style={{ top: '28%', left: '38%' }}
          title={points[0].title}
          onClick={() => setActiveCallout(0)}
        ></div>

        {/* Blip 2 */}
        <div 
          className="radar-blip"
          style={{ top: '30%', left: '62%' }}
          title={points[1].title}
          onClick={() => setActiveCallout(1)}
        ></div>

        {/* Blip 3 */}
        <div 
          className="radar-blip"
          style={{ top: '72%', left: '62%' }}
          title={points[2].title}
          onClick={() => setActiveCallout(2)}
        ></div>

        {/* Connected Callout Card 01 (Top-Left) */}
        <div 
          className="radar-callout-card callout-pos-1"
          onClick={() => {
            setActiveCallout(0);
            if (onSelectSkillDetail) onSelectSkillDetail(candidate.skills[0]);
          }}
        >
          <div>
            <span className="radar-callout-num">01</span>
            <span className="radar-callout-title">{points[0].title.replace(/^01\s*/, '')}</span>
          </div>
          <div className="radar-callout-sub">
            {points[0].subtitle}
          </div>
        </div>

        {/* Connected Callout Card 02 (Top-Right) */}
        <div 
          className="radar-callout-card callout-pos-2"
          onClick={() => {
            setActiveCallout(1);
            if (onSelectSkillDetail) onSelectSkillDetail(candidate.skills[1] || candidate.skills[0]);
          }}
        >
          <div>
            <span className="radar-callout-num">02</span>
            <span className="radar-callout-title">{points[1].title.replace(/^02\s*/, '')}</span>
          </div>
          <div className="radar-callout-sub">
            {points[1].subtitle}
          </div>
        </div>

        {/* Connected Callout Card 03 (Bottom-Right) */}
        <div 
          className="radar-callout-card callout-pos-3"
          onClick={() => {
            setActiveCallout(2);
            if (onSelectSkillDetail) onSelectSkillDetail(candidate.skills[2] || candidate.skills[0]);
          }}
        >
          <div>
            <span className="radar-callout-num">03</span>
            <span className="radar-callout-title">{points[2].title.replace(/^03\s*/, '')}</span>
          </div>
          <div className="radar-callout-sub">
            {points[2].subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
