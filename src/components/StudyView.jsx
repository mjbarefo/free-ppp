import styles from './StudyView.module.css';

export default function StudyView({ domain, onStartQuiz, onStartFlashcards, onOpenChat }) {
  return (
    <div className={`${styles.wrap} animate-in`}>
      <div className={styles.header}>
        <span className={styles.icon}>{domain.icon}</span>
        <div>
          <h2 className={styles.title}>{domain.name}</h2>
          <span className={styles.meta} style={{ color: domain.color }}>
            {domain.weight}% of exam · {domain.questions.length} practice questions · {domain.flashcards.length} flashcards
          </span>
        </div>
      </div>

      {/* Topics */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Key Topics to Master</h3>
        <div className={styles.topicList}>
          {domain.topics.map((topic, i) => (
            <div key={i} className={styles.topic}>
              <span className={styles.dot} style={{ background: domain.color }} />
              {topic}
            </div>
          ))}
        </div>
      </div>

      {/* Concepts */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Key Concepts</h3>
        <div className={styles.conceptList}>
          {domain.flashcards.map((card, i) => (
            <div key={i} className={styles.concept}>
              <div className={styles.conceptQ}>{card.front}</div>
              <div className={styles.conceptA}>{card.back}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <button
          className={styles.primaryBtn}
          style={{ background: domain.color }}
          onClick={() => onStartQuiz(domain)}
        >
          Start Quiz →
        </button>
        <button className={styles.secondaryBtn} onClick={() => onStartFlashcards(domain)}>
          Flashcards →
        </button>
        {onOpenChat && (
          <button className={styles.chatBtn} onClick={onOpenChat}>
            💬 Ask Dr. EPPP
          </button>
        )}
      </div>
    </div>
  );
}
