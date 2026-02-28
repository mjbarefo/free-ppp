import styles from './Results.module.css';

export default function Results({ quizState, onBack, onRetry, onAskAboutQuestion }) {
  const pct = Math.round((quizState.score / quizState.questions.length) * 100);

  return (
    <div className={`${styles.wrap} animate-in`}>
      <div className={styles.scoreBlock}>
        <div className={styles.scoreNum}>
          {quizState.score}/{quizState.questions.length}
        </div>
        <div className={styles.scorePct} style={{ color: pct >= 70 ? 'var(--correct)' : '#E08A2D' }}>
          {pct}% correct
          {pct >= 70 ? ' — Strong performance!' : ' — Keep studying, you\'ll get there!'}
        </div>
      </div>

      <div className={styles.review}>
        {quizState.answers.map((a, i) => {
          const question = quizState.questions[a.question];
          return (
            <div key={i} className={a.isCorrect ? styles.reviewCorrect : styles.reviewIncorrect}>
              <span className={styles.reviewIcon}>{a.isCorrect ? '✓' : '✗'}</span>
              <div style={{ flex: 1 }}>
                <div className={styles.reviewQ}>{question.q}</div>
                {!a.isCorrect && (
                  <div className={styles.reviewAnswer}>
                    Correct: {question.options[a.correct]}
                  </div>
                )}
              </div>
              {onAskAboutQuestion && (
                <button
                  className={styles.askBtn}
                  onClick={() => onAskAboutQuestion(question)}
                  title="Ask Dr. EPPP about this question"
                >
                  💬
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.actions}>
        <button className={styles.backBtn} onClick={onBack}>← All Domains</button>
        <button className={styles.retryBtn} onClick={onRetry}>Try Again →</button>
      </div>
    </div>
  );
}
