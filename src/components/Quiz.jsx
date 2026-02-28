import { useState, useEffect } from 'react';
import styles from './Quiz.module.css';
import { getExpandedExplanation } from '../utils/ai';
import MarkdownText from './MarkdownText';

export default function Quiz({ quizState, quizMode, domain, onAnswer, onNext, onPrevious }) {
  const [showExplanation, setShowExplanation] = useState(false);
  const [aiExplanation, setAiExplanation] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState(null);
  const q = quizState.questions[quizState.current];

  // Check if this question was already answered
  const wasAlreadyAnswered = quizState.answers.some((a) => a.question === quizState.current);

  // Show explanation automatically if navigating to a previously answered question
  useEffect(() => {
    if (wasAlreadyAnswered) {
      setShowExplanation(true);
    }
  }, [wasAlreadyAnswered]);

  const handleAnswer = (idx) => {
    if (quizState.selected !== null) return;
    if (wasAlreadyAnswered) return; // Prevent re-answering
    onAnswer(idx);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    setAiExplanation(null);
    setAiError(null);
    onNext();
  };

  const handlePrevious = () => {
    setShowExplanation(false);
    setAiExplanation(null);
    setAiError(null);
    onPrevious();
  };

  const handleAskClaude = async () => {
    setAiLoading(true);
    setAiError(null);

    try {
      const context = {
        question: q.q,
        userAnswer: q.options[quizState.selected],
        correctAnswer: q.options[q.correct],
        explanation: q.explanation,
        wasCorrect: quizState.selected === q.correct,
        domain: domain?.name || 'Unknown Domain',
      };

      const explanation = await getExpandedExplanation(context);
      setAiExplanation(explanation);
    } catch (error) {
      console.error('AI explanation error:', error);
      // Extract the most helpful error message
      const errorMessage = error?.message ||
                          error?.error?.message ||
                          String(error) ||
                          "Failed to get AI explanation. Please try again.";
      setAiError(errorMessage);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className={`${styles.wrap} animate-in`}>
      {/* Progress bar */}
      <div className={styles.progressWrap}>
        <div className={styles.progressMeta}>
          <span>{quizMode === 'mixed' ? 'Mixed Practice' : domain?.name}</span>
          <span>
            {quizState.current + 1} / {quizState.questions.length}
          </span>
        </div>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressFill}
            style={{
              width: `${((quizState.current + 1) / quizState.questions.length) * 100}%`,
              background: q.domainColor,
            }}
          />
        </div>
      </div>

      {/* Domain badge for mixed */}
      {quizMode === 'mixed' && (
        <span className={styles.badge} style={{ color: q.domainColor, background: `${q.domainColor}10`, borderColor: `${q.domainColor}25` }}>
          {q.domainName}
        </span>
      )}

      {/* Question */}
      <h2 className={styles.question}>{q.q}</h2>

      {/* Options */}
      <div className={styles.options}>
        {q.options.map((opt, i) => {
          const isSelected = quizState.selected === i;
          const isCorrect = i === q.correct;
          const answered = quizState.selected !== null;

          let className = styles.option;
          if (answered && isCorrect) className += ` ${styles.optionCorrect}`;
          else if (answered && isSelected && !isCorrect) className += ` ${styles.optionIncorrect}`;
          else if (answered) className += ` ${styles.optionDimmed}`;

          return (
            <button key={i} className={className} onClick={() => handleAnswer(i)} disabled={answered}>
              <span className={styles.optionLetter}>
                {answered && isCorrect ? '✓' : answered && isSelected ? '✗' : String.fromCharCode(65 + i)}
              </span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className={`${styles.explanation} animate-in`}>
          <div className={styles.explanationLabel}>Explanation</div>
          <p>{q.explanation}</p>
        </div>
      )}

      {/* AI Explanation */}
      {showExplanation && !aiExplanation && !aiLoading && (
        <button
          className={`${styles.aiBtn} animate-in`}
          onClick={handleAskClaude}
          disabled={aiLoading}
        >
          ✨ Ask Claude for more detail
        </button>
      )}

      {aiLoading && (
        <div className={`${styles.aiBox} ${styles.aiLoading} animate-in`}>
          <div className={styles.spinner}></div>
          <span>Getting expanded explanation...</span>
        </div>
      )}

      {aiExplanation && (
        <div className={`${styles.aiBox} animate-in`}>
          <div className={styles.aiLabel}>✨ Claude's Additional Context</div>
          <MarkdownText text={aiExplanation} />
        </div>
      )}

      {aiError && (
        <div className={`${styles.aiBox} ${styles.aiError} animate-in`}>
          <div className={styles.aiLabel}>⚠️ Error</div>
          <p>{aiError}</p>
        </div>
      )}

      {/* Navigation */}
      {(quizState.selected !== null || wasAlreadyAnswered) && (
        <div className={`${styles.navigation} animate-in`}>
          <button
            className={styles.navBtn}
            onClick={handlePrevious}
            disabled={quizState.current === 0}
            aria-label="Previous question"
          >
            ← Previous
          </button>
          <button className={styles.nextBtn} onClick={handleNext}>
            {quizState.current + 1 >= quizState.questions.length ? 'See Results →' : 'Next Question →'}
          </button>
        </div>
      )}
    </div>
  );
}
