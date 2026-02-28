import styles from './Dashboard.module.css';

export default function Dashboard({ domains, progress, onStartQuiz, onStartFlashcards, onStudy, onMixedQuiz, onResetProgress, onOpenChat }) {
  return (
    <div className="animate-in">
      {/* Exam info banner */}
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <div>
            <h2 className={styles.bannerTitle}>
              Examination for Professional Practice in Psychology
            </h2>
            <p className={styles.bannerMeta}>
              225 questions · 175 scored · 4 hrs 15 min · 500 to pass (scaled)
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className={styles.chatBtn} onClick={onOpenChat}>
              💬 Ask Dr. EPPP
            </button>
            <button className={styles.mixedBtn} onClick={onMixedQuiz}>
              Mixed Practice
            </button>
            <button
              className={styles.resetBtn}
              onClick={onResetProgress}
              title="Reset all progress"
            >
              Reset Progress
            </button>
          </div>
        </div>
      </div>

      {/* Domain grid */}
      <div className={styles.grid}>
        {domains.map((domain, idx) => {
          const dp = progress[domain.id] || { correct: 0, total: 0, flashcardsReviewed: 0 };
          const accuracy = dp.total > 0 ? Math.round((dp.correct / dp.total) * 100) : null;

          return (
            <div
              key={domain.id}
              className={styles.card}
              style={{ animationDelay: `${idx * 0.04}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>
                  <span className={styles.icon}>{domain.icon}</span>
                  <div>
                    <h3 className={styles.domainName}>{domain.name}</h3>
                    <span className={styles.weight} style={{ color: domain.color }}>
                      {domain.weight}% of exam
                    </span>
                  </div>
                </div>
                {accuracy !== null && (
                  <span
                    className={styles.accuracy}
                    style={{
                      color: accuracy >= 70 ? 'var(--correct)' : accuracy >= 50 ? '#E08A2D' : 'var(--incorrect)',
                    }}
                  >
                    {accuracy}%
                  </span>
                )}
              </div>

              <p className={styles.desc}>{domain.description}</p>

              {/* Progress bar */}
              {dp.total > 0 && (
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{
                      width: `${Math.min((dp.total / domain.questions.length) * 100, 100)}%`,
                      background: domain.color,
                    }}
                  />
                </div>
              )}

              {/* Weight indicator */}
              <div className={styles.weightBar}>
                <div
                  className={styles.weightFill}
                  style={{ width: `${domain.weight * 5}%`, background: domain.color }}
                />
              </div>

              {/* Action buttons */}
              <div className={styles.actions}>
                <button
                  className={styles.quizBtn}
                  style={{
                    background: `${domain.color}12`,
                    color: domain.color,
                    borderColor: `${domain.color}30`,
                  }}
                  onClick={() => onStartQuiz(domain)}
                >
                  Quiz ({domain.questions.length})
                </button>
                <button className={styles.secondaryBtn} onClick={() => onStartFlashcards(domain)}>
                  Cards ({domain.flashcards.length})
                </button>
                <button className={styles.secondaryBtn} onClick={() => onStudy(domain)}>
                  Study
                </button>
              </div>

              {dp.total > 0 && (
                <div className={styles.progress}>
                  {dp.total} answered · {dp.flashcardsReviewed} cards reviewed
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Study tips */}
      <div className={styles.tips}>
        <h3 className={styles.tipsTitle}>Study Strategies</h3>
        <div className={styles.tipsGrid}>
          <div>
            <strong style={{ color: '#E08A2D' }}>Prioritize by weight</strong>
            <br />
            Ethics (15%), Assessment (14%), and Treatment (14%) make up 43% of the exam. Start there.
          </div>
          <div>
            <strong style={{ color: '#2A7DD2' }}>Active recall</strong>
            <br />
            Use quiz mode first, then review flashcards. Testing yourself is 2-3x more effective than re-reading.
          </div>
          <div>
            <strong style={{ color: '#1EA85F' }}>Spaced practice</strong>
            <br />
            Study domains across multiple sessions. Return to weak areas after 1-2 days for better retention.
          </div>
          <div>
            <strong style={{ color: '#7C4DCD' }}>Read explanations</strong>
            <br />
            Even for correct answers, read every explanation. Understanding the "why" helps with novel questions.
          </div>
        </div>
      </div>
    </div>
  );
}
