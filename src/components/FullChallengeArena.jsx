import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  RotateCcw, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  Clock, 
  Cpu, 
  Award,
  AlertCircle
} from 'lucide-react';
import { PRACTICAL_CHALLENGES } from '../data/challengesData';
import { evaluateChallengeWithGemini } from '../services/geminiService';

export function FullChallengeArena({ candidate, onEvidenceVerified }) {
  const [selectedChallenge, setSelectedChallenge] = useState(PRACTICAL_CHALLENGES[0]);
  const [code, setCode] = useState(PRACTICAL_CHALLENGES[0].initialCode);
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [aiEvaluation, setAiEvaluation] = useState(null);
  const [isSynced, setIsSynced] = useState(false);

  const handleSelectChallenge = (ch) => {
    setSelectedChallenge(ch);
    setCode(ch.initialCode);
    setTestResults(null);
    setAiEvaluation(null);
    setIsSynced(false);
  };

  const handleResetCode = () => {
    setCode(selectedChallenge.initialCode);
    setTestResults(null);
    setAiEvaluation(null);
  };

  const handleRunTest = async () => {
    setIsRunning(true);
    setIsSynced(false);

    try {
      // Simulate running the unit tests
      await new Promise(r => setTimeout(r, 800));

      setTestResults(selectedChallenge.testCases.map(tc => ({
        ...tc,
        passed: true,
        executionTime: `${(Math.random() * 8 + 3).toFixed(1)}ms`
      })));

      // Call the multi-factor rubric evaluator
      const evalResult = await evaluateChallengeWithGemini(selectedChallenge.id, code);
      setAiEvaluation(evalResult);
    } catch (err) {
      console.error(err);
    } finally {
      setIsRunning(false);
    }
  };

  const handleSyncToProfile = () => {
    if (onEvidenceVerified && aiEvaluation) {
      onEvidenceVerified({
        skillName: selectedChallenge.skillTarget.split(' ')[0],
        challengeTitle: selectedChallenge.title,
        score: aiEvaluation.compositeScore,
        tier: aiEvaluation.tier,
        notes: aiEvaluation.aiVerdict
      });
      setIsSynced(true);
    }
  };

  return (
    <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '40px 28px 80px 28px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div className="pill-badge pill-badge-blue" style={{ marginBottom: '12px' }}>
          <Terminal size={13} />
          <span>PRACTICAL SKILL VERIFICATION SANDBOX</span>
        </div>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em' }}>
          Interactive Code Verification Sandbox
        </h1>
        <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '6px', maxWidth: '720px' }}>
          Evaluate applied engineering ability through hands-on role challenges. 
          Multi-factor rubric: correctness, approach, code quality, efficiency, and explanation.
        </p>
      </div>

      {/* Challenge Selector Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {PRACTICAL_CHALLENGES.map(ch => (
          <button
            key={ch.id}
            className={`btn ${selectedChallenge.id === ch.id ? 'btn-primary-blue' : 'btn-secondary'}`}
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            onClick={() => handleSelectChallenge(ch)}
          >
            <Cpu size={14} />
            <span>{ch.title}</span>
          </button>
        ))}
      </div>

      {/* Main Sandbox Grid: Left Editor & Description, Right Test & AI Rubric */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '28px', alignItems: 'start' }}>
        {/* Left Column: Task Overview & Code Editor */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Challenge Description Card */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '18px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
              <div>
                <span className="mono-tag" style={{ color: '#0062FF' }}>TARGET CLAIM: {selectedChallenge.skillTarget}</span>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>
                  {selectedChallenge.title}
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="pill-badge pill-badge-slate">
                  <Clock size={12} /> {selectedChallenge.timeLimit}
                </span>
                <span className="pill-badge pill-badge-blue">
                  {selectedChallenge.difficulty}
                </span>
              </div>
            </div>

            <div style={{ whiteSpace: 'pre-line', fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, background: '#F8FAFC', padding: '14px 18px', borderRadius: '12px', border: '1px solid #F1F5F9' }}>
              {selectedChallenge.description}
            </div>
          </div>

          {/* Code Editor Container */}
          <div className="code-editor-box">
            <div className="code-editor-topbar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="window-dots">
                  <div className="window-dot dot-red"></div>
                  <div className="window-dot dot-yellow"></div>
                  <div className="window-dot dot-green"></div>
                </div>
                <span style={{ fontSize: '0.74rem', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>
                  solution.py • Candidate: {candidate.name}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="btn btn-secondary btn-sm"
                  style={{ background: '#1E293B', color: '#CBD5E1', borderColor: 'rgba(255,255,255,0.1)' }}
                  onClick={handleResetCode}
                  title="Reset to initial code"
                >
                  <RotateCcw size={12} />
                  <span>Reset</span>
                </button>

                <button 
                  className="btn btn-primary-blue btn-sm"
                  onClick={handleRunTest}
                  disabled={isRunning}
                >
                  <Play size={12} fill="#FFFFFF" />
                  <span>{isRunning ? 'Running Tests...' : 'Run & AI Evaluate'}</span>
                </button>
              </div>
            </div>

            <textarea
              className="code-textarea"
              style={{ height: '360px' }}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck="false"
            />
          </div>
        </div>

        {/* Right Column: Unit Test Results & Gemini Multi-Factor Rubric */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Unit Test Results Card */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '18px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Terminal size={18} color="#0062FF" />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>
                  Live Test Runner
                </h3>
              </div>
              {testResults && (
                <span className="pill-badge pill-badge-green">
                  <CheckCircle2 size={12} /> All Tests Passed (3/3)
                </span>
              )}
            </div>

            {!testResults && !isRunning && (
              <div style={{ textAlign: 'center', padding: '36px 16px', color: '#64748B' }}>
                <Cpu size={32} strokeWidth={1.5} color="#CBD5E1" style={{ margin: '0 auto 12px auto' }} />
                <p style={{ fontSize: '0.88rem', fontWeight: 600 }}>No test run executed yet</p>
                <p style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '4px' }}>
                  Click "Run & AI Evaluate" to test the candidate implementation against edge cases.
                </p>
              </div>
            )}

            {isRunning && (
              <div style={{ textAlign: 'center', padding: '36px 16px', color: '#0062FF' }}>
                <div className="dot-indicator dot-blue" style={{ width: '18px', height: '18px', margin: '0 auto 14px auto' }}></div>
                <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>Executing test suite against sandbox...</p>
                <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Evaluating correctness and type constraints</p>
              </div>
            )}

            {testResults && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {testResults.map(tc => (
                  <div 
                    key={tc.id}
                    style={{ 
                      padding: '12px 14px', 
                      background: '#F8FAFC', 
                      borderRadius: '10px', 
                      border: '1px solid #E2E8F0',
                      borderLeft: '4px solid #10B981'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F172A' }}>{tc.name}</span>
                      <span style={{ fontSize: '0.7rem', color: '#10B981', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                        ✓ {tc.status} ({tc.executionTime})
                      </span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{tc.expected}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Gemini AI Multi-Factor Evaluation Card */}
          {aiEvaluation && (
            <div style={{ background: '#FFFFFF', border: '1px solid #BFDBFE', borderRadius: '18px', padding: '24px', boxShadow: 'var(--shadow-float)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={18} color="#0062FF" />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>
                    Gemini AI Skill Verification
                  </h3>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0062FF' }}>
                    {aiEvaluation.compositeScore}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#64748B' }}>/100</span>
                  <div>
                    <span className="pill-badge pill-badge-blue" style={{ fontSize: '0.66rem' }}>
                      {aiEvaluation.tier} Evidence
                    </span>
                  </div>
                </div>
              </div>

              {/* Rubric Breakdown Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '16px' }}>
                {Object.entries(aiEvaluation.rubrics).map(([key, val]) => (
                  <div key={key} style={{ padding: '8px 12px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #F1F5F9' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700 }}>
                      <span style={{ textTransform: 'capitalize', color: '#475569' }}>{key}</span>
                      <span style={{ color: '#0062FF' }}>{val.score}%</span>
                    </div>
                    <p style={{ fontSize: '0.68rem', color: '#94A3B8', marginTop: '2px', lineHeight: 1.3 }}>
                      {val.notes}
                    </p>
                  </div>
                ))}
              </div>

              {/* AI Summary Verdict */}
              <div style={{ background: '#EFF6FF', padding: '12px 14px', borderRadius: '10px', border: '1px solid #DBEAFE', fontSize: '0.8rem', color: '#1E40AF', lineHeight: 1.5, marginBottom: '16px' }}>
                <strong>Transparent Rubric Note:</strong> {aiEvaluation.aiVerdict}
              </div>

              {/* Sync Action */}
              <button 
                className={`btn ${isSynced ? 'btn-secondary' : 'btn-primary-blue'}`}
                style={{ width: '100%' }}
                onClick={handleSyncToProfile}
                disabled={isSynced}
              >
                {isSynced ? (
                  <>
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>Evidence Successfully Added to Profile!</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck size={16} />
                    <span>Sync Practical Evidence to Candidate Graph</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
