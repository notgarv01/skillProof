import React, { useState } from 'react';
import { X, Send, Sparkles, Bot, User, CheckCircle2, ExternalLink } from 'lucide-react';

export function AIAssistantDrawer({ isOpen, onClose, candidate }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hello! I am the SkillProof Explainability Engine. I can explain any evidence tier, audit candidate repository artifacts for ${candidate.name}, or clarify company matching criteria. What would you like to inspect?`
    }
  ]);
  const [inputText, setInputText] = useState('');

  if (!isOpen) return null;

  const quickQuestions = [
    `Why is Python awarded Strong tier for ${candidate.name}?`,
    `What evidence gaps exist for ${candidate.appliedRole}?`,
    `How does SkillProof eliminate resume keyword stuffing?`
  ];

  const handleSendMessage = (textToSend) => {
    const question = textToSend || inputText;
    if (!question.trim()) return;

    const newMessages = [...messages, { role: 'user', content: question }];
    setMessages(newMessages);
    setInputText('');

    // Generate explainable response
    setTimeout(() => {
      let response = '';
      const q = question.toLowerCase();

      if (q.includes('python') || q.includes('strong tier')) {
        response = `Python was awarded Strong Evidence Tier because ${candidate.name} linked 2 production repositories (184 commits in 'async-pipeline-core') and completed the practical coding challenge with a 94/100 composite score (O(N) stream efficiency and 100% test pass rate). This satisfies verified code complexity criteria.`;
      } else if (q.includes('gap') || q.includes('missing')) {
        response = `For the role of ${candidate.appliedRole}, SQL and API Development are currently at Moderate Evidence. While basic CRUD schemas and REST endpoints are verified, evidence is currently missing in high-concurrency indexing and distributed caching under load. The candidate has been invited to complete a 15-minute challenge to bridge this gap.`;
      } else if (q.includes('keyword') || q.includes('stuffing') || q.includes('eliminate')) {
        response = `Traditional ATS systems score candidates based on keyword frequency in raw text. SkillProof replaces keyword counting with an Evidence Layer: every skill must trace to a verified commit, pull request, model artifact, or sandboxed test run. Without supporting artifacts, a claimed skill remains at Limited Evidence.`;
      } else {
        response = `Based on our evidence graph for ${candidate.name}, 3 core competencies are verified at Strong Tier with 91% explainable alignment to company criteria. Every evaluation metric and source remains 100% auditable to both candidates and hiring managers.`;
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 450);
  };

  return (
    <>
      <div className="drawer-overlay" onClick={onClose}></div>
      <div className="drawer-sidebar">
        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="logo-icon-box" style={{ width: '32px', height: '32px' }}>
              <Sparkles size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>SkillProof AI Assistant</h3>
              <span style={{ fontSize: '0.7rem', color: '#10B981', fontWeight: 600 }}>● Online & Auditing</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#64748B' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat History */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {messages.map((m, idx) => (
            <div 
              key={idx}
              style={{ 
                display: 'flex', 
                gap: '10px', 
                alignItems: 'flex-start',
                flexDirection: m.role === 'user' ? 'row-reverse' : 'row'
              }}
            >
              <div 
                style={{ 
                  width: '28px', 
                  height: '28px', 
                  borderRadius: '50%', 
                  background: m.role === 'user' ? '#0F172A' : '#0062FF',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  flexShrink: 0
                }}
              >
                {m.role === 'user' ? 'U' : 'AI'}
              </div>

              <div 
                style={{ 
                  background: m.role === 'user' ? '#0062FF' : '#F8FAFC',
                  color: m.role === 'user' ? '#FFFFFF' : '#0F172A',
                  padding: '12px 16px',
                  borderRadius: '14px',
                  fontSize: '0.84rem',
                  lineHeight: 1.5,
                  maxWidth: '82%',
                  border: m.role === 'user' ? 'none' : '1px solid #E2E8F0'
                }}
              >
                {m.content}
              </div>
            </div>
          ))}

          {/* Quick Prompts */}
          <div style={{ marginTop: '10px' }}>
            <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
              Suggested Inquiries:
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(q)}
                  style={{ 
                    textAlign: 'left', 
                    background: '#F1F5F9', 
                    border: '1px solid #E2E8F0', 
                    padding: '8px 12px', 
                    borderRadius: '8px', 
                    fontSize: '0.75rem', 
                    color: '#334155', 
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = '#0062FF'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Bar */}
        <div style={{ padding: '16px 20px', borderTop: '1px solid #E2E8F0', background: '#FFFFFF' }}>
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            style={{ display: 'flex', gap: '8px' }}
          >
            <input
              type="text"
              placeholder="Ask about evidence, tiers, or candidate proof..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{ 
                flex: 1, 
                padding: '10px 14px', 
                borderRadius: '999px', 
                border: '1px solid #E2E8F0', 
                fontSize: '0.84rem',
                outline: 'none'
              }}
            />
            <button 
              type="submit" 
              className="btn btn-primary-blue"
              style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
