import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { FullChallengeArena } from './components/FullChallengeArena';
import { RecruiterMatchView } from './components/RecruiterMatchView';
import { CandidateUploadView } from './components/CandidateUploadView';
import { AIAssistantDrawer } from './components/AIAssistantDrawer';
import { DetailModal } from './components/DetailModal';
import { Footer } from './components/Footer';
import { INITIAL_CANDIDATES } from './data/candidatesData';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [candidates, setCandidates] = useState(INITIAL_CANDIDATES);
  const [currentCandidate, setCurrentCandidate] = useState(INITIAL_CANDIDATES[0]);
  const [activeView, setActiveView] = useState('landing'); // 'landing' | 'challenge' | 'recruiter' | 'upload'
  const [selectedSkillForModal, setSelectedSkillForModal] = useState(null);
  const [isChatDrawerOpen, setIsChatDrawerOpen] = useState(false);

  // When a challenge is verified in the sandbox, update candidate's evidence profile
  const handleEvidenceVerified = (verifiedData) => {
    setCandidates(prev => prev.map(cand => {
      if (cand.id === currentCandidate.id) {
        const updatedSkills = cand.skills.map(s => {
          if (s.name.toLowerCase().includes(verifiedData.skillName.toLowerCase())) {
            return {
              ...s,
              tier: verifiedData.tier,
              tierScore: verifiedData.score,
              sources: [
                ...s.sources,
                { type: 'Assessment', name: verifiedData.challengeTitle, score: `${verifiedData.score}/100`, status: 'PASSED' }
              ],
              explanation: verifiedData.notes
            };
          }
          return s;
        });

        const updatedCand = {
          ...cand,
          skills: updatedSkills,
          overallConfidence: Math.min(100, cand.overallConfidence + 2)
        };
        setCurrentCandidate(updatedCand);
        return updatedCand;
      }
      return cand;
    }));
  };

  // When a new candidate profile is extracted or added
  const handleAddOrUpdateCandidate = (newCand) => {
    setCandidates(prev => {
      const exists = prev.find(c => c.id === newCand.id);
      if (exists) {
        return prev.map(c => c.id === newCand.id ? newCand : c);
      }
      return [newCand, ...prev];
    });
    setCurrentCandidate(newCand);
    setActiveView('landing');
  };

  return (
    <div className="app-container">
      {/* Growleads Style Sticky Navigation */}
      <Navbar 
        activeView={activeView}
        setActiveView={setActiveView}
        currentCandidate={currentCandidate}
        onSelectCandidate={setCurrentCandidate}
        candidates={candidates}
        onOpenUpload={() => setActiveView('upload')}
        onOpenDemo={() => setActiveView('recruiter')}
      />

      {/* Main Content Router */}
      <main>
        {activeView === 'landing' && (
          <>
            {/* Hero Section with Growleads Radar Scanner */}
            <HeroSection 
              candidate={currentCandidate}
              onSelectSkillDetail={setSelectedSkillForModal}
              onStartAnalysis={() => setActiveView('upload')}
              onOpenMatchDemo={() => setActiveView('recruiter')}
            />

            {/* 4 Killer Features / Capabilities (Screenshot 2 2x2 Grid) */}
            <CapabilitiesGrid 
              candidate={currentCandidate}
              onOpenSandbox={() => setActiveView('challenge')}
              onOpenRecruiter={() => setActiveView('recruiter')}
              onSelectSkillDetail={setSelectedSkillForModal}
            />
          </>
        )}

        {activeView === 'challenge' && (
          <FullChallengeArena 
            candidate={currentCandidate}
            onEvidenceVerified={handleEvidenceVerified}
          />
        )}

        {activeView === 'recruiter' && (
          <RecruiterMatchView 
            candidates={candidates}
            currentCandidate={currentCandidate}
            onSelectCandidate={setCurrentCandidate}
            onInviteChallenge={() => setActiveView('challenge')}
          />
        )}

        {activeView === 'upload' && (
          <CandidateUploadView 
            onAddOrUpdateCandidate={handleAddOrUpdateCandidate}
          />
        )}
      </main>

      {/* Floating Bottom Pill Dock (Screenshot 2 Growleads exact replica) */}
      <div className="floating-bottom-dock">
        <button 
          className="dock-btn dock-btn-chat"
          onClick={() => setIsChatDrawerOpen(true)}
        >
          <MessageSquare size={16} color="#0062FF" />
          <span>Chat with SkillProof AI</span>
        </button>

        <button 
          className="dock-btn dock-btn-action"
          onClick={() => setActiveView(activeView === 'recruiter' ? 'challenge' : 'recruiter')}
        >
          <span>{activeView === 'recruiter' ? 'Launch Practical Challenge' : 'Run 91% Match Demo'}</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Interactive AI Assistant Drawer */}
      <AIAssistantDrawer 
        isOpen={isChatDrawerOpen}
        onClose={() => setIsChatDrawerOpen(false)}
        candidate={currentCandidate}
      />

      {/* Drilldown Evidence Modal */}
      <DetailModal 
        skill={selectedSkillForModal}
        candidate={currentCandidate}
        onClose={() => setSelectedSkillForModal(null)}
        onLaunchChallenge={() => {
          setSelectedSkillForModal(null);
          setActiveView('challenge');
        }}
      />

      {/* Project & ABC Footer */}
      <Footer />
    </div>
  );
}
