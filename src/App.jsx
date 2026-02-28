import { useState, useEffect } from 'react';
import { DOMAINS } from './data/domains';
import { loadProgress, saveProgress, clearProgress, loadChatHistory } from './utils/storage';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Flashcards from './components/Flashcards';
import StudyView from './components/StudyView';
import Chat from './components/Chat';

const shuffleArray = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function App() {
  const [savedProgress] = useState(() => loadProgress());
  const initialProgress = savedProgress?.progress ?? DOMAINS.reduce((acc, d) => {
    acc[d.id] = { correct: 0, total: 0, flashcardsReviewed: 0 };
    return acc;
  }, {});

  const [view, setView] = useState('dashboard');
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [quizState, setQuizState] = useState(null);
  const [flashcardState, setFlashcardState] = useState(null);
  const [progress, setProgress] = useState(initialProgress);
  const [streak, setStreak] = useState(savedProgress?.globalStats?.streak ?? 0);
  const [totalAnswered, setTotalAnswered] = useState(savedProgress?.globalStats?.totalAnswered ?? 0);
  const [totalCorrect, setTotalCorrect] = useState(savedProgress?.globalStats?.totalCorrect ?? 0);
  const [quizMode, setQuizMode] = useState('domain');
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('eppp-theme');
    return saved || 'light';
  });
  const [chatState, setChatState] = useState({
    messages: [],
    contextQuestion: null,
    contextDomain: null,
  });

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('eppp-theme', theme);
  }, [theme]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(progress).length > 0) {
      saveProgress(progress, { streak, totalAnswered, totalCorrect });
    }
  }, [progress, streak, totalAnswered, totalCorrect]);

  const goHome = () => {
    setView('dashboard');
    setSelectedDomain(null);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // ─── Chat ─────────────────────────────────────────────────────
  const openChat = (contextQuestion = null, contextDomain = null) => {
    const history = loadChatHistory();
    setChatState({
      messages: history,
      contextQuestion,
      contextDomain,
    });
    setView('chat');
  };

  const clearChatContext = () => {
    setChatState((prev) => ({
      ...prev,
      contextQuestion: null,
      contextDomain: null,
    }));
  };

  // ─── Quiz ─────────────────────────────────────────────────────
  const startQuiz = (domain, mode = 'domain') => {
    let questions;
    if (mode === 'mixed') {
      const allQs = DOMAINS.flatMap((d) =>
        d.questions.map((q) => ({ ...q, domainId: d.id, domainName: d.name, domainColor: d.color }))
      );
      questions = shuffleArray(allQs).slice(0, 15);
    } else {
      questions = shuffleArray(domain.questions).map((q) => ({
        ...q,
        domainId: domain.id,
        domainName: domain.name,
        domainColor: domain.color,
      }));
    }
    setQuizState({ questions, current: 0, selected: null, score: 0, answers: [], finished: false });
    setSelectedDomain(domain);
    setQuizMode(mode);
    setView('quiz');
  };

  const handleAnswer = (optionIndex) => {
    if (quizState.selected !== null) return;
    const current = quizState.questions[quizState.current];
    const isCorrect = optionIndex === current.correct;

    setQuizState((prev) => ({
      ...prev,
      selected: optionIndex,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, { question: prev.current, selected: optionIndex, correct: current.correct, isCorrect }],
    }));

    setTotalAnswered((t) => t + 1);
    if (isCorrect) {
      setTotalCorrect((t) => t + 1);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
    }

    setProgress((prev) => ({
      ...prev,
      [current.domainId]: {
        ...prev[current.domainId],
        correct: prev[current.domainId].correct + (isCorrect ? 1 : 0),
        total: prev[current.domainId].total + 1,
      },
    }));
  };

  const nextQuestion = () => {
    if (quizState.current + 1 >= quizState.questions.length) {
      setQuizState((prev) => ({ ...prev, finished: true }));
      setView('results');
    } else {
      const nextIndex = quizState.current + 1;
      const nextAnswer = quizState.answers.find((a) => a.question === nextIndex);
      setQuizState((prev) => ({
        ...prev,
        current: nextIndex,
        selected: nextAnswer ? nextAnswer.selected : null
      }));
    }
  };

  const previousQuestion = () => {
    if (quizState.current > 0) {
      const prevIndex = quizState.current - 1;
      const prevAnswer = quizState.answers.find((a) => a.question === prevIndex);
      setQuizState((prev) => ({
        ...prev,
        current: prevIndex,
        selected: prevAnswer ? prevAnswer.selected : null
      }));
    }
  };

  // ─── Flashcards ───────────────────────────────────────────────
  const startFlashcards = (domain) => {
    setFlashcardState({ cards: shuffleArray(domain.flashcards), current: 0, flipped: false });
    setSelectedDomain(domain);
    setView('flashcards');
  };

  const flipCard = () => setFlashcardState((prev) => ({ ...prev, flipped: !prev.flipped }));

  const nextCard = () => {
    setProgress((prev) => ({
      ...prev,
      [selectedDomain.id]: {
        ...prev[selectedDomain.id],
        flashcardsReviewed: prev[selectedDomain.id].flashcardsReviewed + 1,
      },
    }));
    setFlashcardState((prev) => ({
      ...prev,
      current: prev.current + 1 >= prev.cards.length ? 0 : prev.current + 1,
      flipped: false,
    }));
  };

  // ─── Reset Progress ───────────────────────────────────────────
  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      clearProgress();
      const initial = {};
      DOMAINS.forEach((d) => {
        initial[d.id] = { correct: 0, total: 0, flashcardsReviewed: 0 };
      });
      setProgress(initial);
      setStreak(0);
      setTotalAnswered(0);
      setTotalCorrect(0);
    }
  };

  return (
    <div style={{ maxWidth: 1120, margin: '0 auto', padding: '32px 28px 48px', minHeight: '100vh' }}>
      <Header
        totalAnswered={totalAnswered}
        totalCorrect={totalCorrect}
        streak={streak}
        onLogoClick={goHome}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {view !== 'dashboard' && (
        <button
          onClick={goHome}
          style={{
            marginBottom: 24,
            padding: '8px 0',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            fontSize: '0.875rem',
            fontFamily: 'var(--font-ui)',
            letterSpacing: '0.01em',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--text-secondary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
        >
          ← Back to domains
        </button>
      )}

      {view === 'dashboard' && (
        <Dashboard
          domains={DOMAINS}
          progress={progress}
          onStartQuiz={(d) => startQuiz(d)}
          onStartFlashcards={startFlashcards}
          onStudy={(d) => { setSelectedDomain(d); setView('study'); }}
          onMixedQuiz={() => startQuiz(null, 'mixed')}
          onResetProgress={resetProgress}
          onOpenChat={() => openChat()}
        />
      )}

      {view === 'quiz' && quizState && !quizState.finished && (
        <Quiz
          key={quizState.current}
          quizState={quizState}
          quizMode={quizMode}
          domain={selectedDomain}
          onAnswer={handleAnswer}
          onNext={nextQuestion}
          onPrevious={previousQuestion}
        />
      )}

      {view === 'results' && quizState && (
        <Results
          quizState={quizState}
          onBack={goHome}
          onRetry={() => startQuiz(selectedDomain, quizMode)}
          onAskAboutQuestion={(question) => openChat(question, selectedDomain)}
        />
      )}

      {view === 'flashcards' && flashcardState && selectedDomain && (
        <Flashcards
          key={flashcardState.current}
          flashcardState={flashcardState}
          domain={selectedDomain}
          onFlip={flipCard}
          onNext={nextCard}
        />
      )}

      {view === 'chat' && (
        <Chat
          domains={DOMAINS}
          progress={progress}
          initialQuestion={chatState.contextQuestion}
          currentDomain={chatState.contextDomain || selectedDomain}
          onBack={goHome}
          onClearContext={clearChatContext}
        />
      )}

      {view === 'study' && selectedDomain && (
        <StudyView
          domain={selectedDomain}
          onStartQuiz={(d) => startQuiz(d)}
          onStartFlashcards={startFlashcards}
          onOpenChat={() => openChat(null, selectedDomain)}
        />
      )}
    </div>
  );
}
