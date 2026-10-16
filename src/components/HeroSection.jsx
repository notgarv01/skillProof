import React from 'react';
import { ArrowRight, Star, CheckCircle, ShieldCheck, Terminal, Award } from 'lucide-react';
import { RadarVisualizer } from './RadarVisualizer';

export function HeroSection({ candidate, onSelectSkillDetail, onStartAnalysis, onOpenMatchDemo }) {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* Left Column: Headline, Value Proposition, Action CTAs */}
        <div className="hero-left">
          {/* Top Pill Tag (Screenshot 1 matching) */}
          <div className="pill-badge pill-badge-blue">
            <span className="dot-indicator dot-blue"></span>
            <span>AI-POWERED EVIDENCE VERIFICATION & MATCHING</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="hero-title">
            Don't just claim skills.<br />
            Prove them <span className="hero-title-accent">in 30 seconds.</span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="hero-subtitle">
            You build the code. We verify the proof. SkillProof is an AI-powered evidence layer 
            built around the builder, not keyword-stuffed resumes. We connect GitHub repositories, 
            run applied coding challenges, map explainable skill graphs, and give companies 100% 
            verifiable hiring confidence.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <button 
              className="btn btn-primary-blue"
              onClick={onStartAnalysis}
            >
              <span>Analyze Candidate Evidence</span>
              <ArrowRight size={16} />
            </button>

            <button 
              className="btn btn-secondary"
              onClick={onOpenMatchDemo}
            >
              <span>Explore 91% Match Demo</span>
            </button>
          </div>

          {/* Social Proof & Trust Badges Pill (Screenshot 1 matching) */}
          <div className="social-proof-pill">
            <div className="proof-brands">
              <span style={{ color: '#0062FF', fontWeight: 800 }}>GDG Udaipur</span>
              <span style={{ color: '#0F172A', fontWeight: 700 }}>Aravali ABC</span>
              <span style={{ color: '#10B981', fontWeight: 700 }}>Gemini AI</span>
            </div>

            <div className="proof-divider"></div>

            <div className="proof-rating">
              <div className="stars-row">
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
              </div>
              <span className="proof-text">
                <strong>98% Evidence Confidence</strong> across technical shortlists
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Signature Growleads-style Radar Visualizer */}
        <div className="hero-right">
          <RadarVisualizer 
            candidate={candidate} 
            onSelectSkillDetail={onSelectSkillDetail} 
          />
        </div>
      </div>
    </section>
  );
}
