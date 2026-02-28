import styles from './Flashcards.module.css';

export default function Flashcards({ flashcardState, domain, onFlip, onNext }) {
  const card = flashcardState.cards[flashcardState.current];

  return (
    <div className={`${styles.wrap} animate-in`}>
      <div className={styles.meta}>
        <span style={{ color: domain.color }}>
          {domain.icon} {domain.name}
        </span>
        <span>
          {flashcardState.current + 1} / {flashcardState.cards.length}
        </span>
      </div>

      <div
        className={`${styles.card} ${flashcardState.flipped ? styles.flipped : ''}`}
        style={flashcardState.flipped ? { borderColor: `${domain.color}30` } : {}}
        onClick={onFlip}
      >
        <div className={styles.cardLabel}>
          {flashcardState.flipped ? 'ANSWER' : 'QUESTION'}
        </div>
        <div className={flashcardState.flipped ? styles.cardBack : styles.cardFront}>
          {flashcardState.flipped ? card.back : card.front}
        </div>
        {!flashcardState.flipped && (
          <div className={styles.hint}>tap to reveal</div>
        )}
      </div>

      <div className={styles.actions}>
        <button className={styles.flipBtn} onClick={onFlip}>
          {flashcardState.flipped ? 'Show Question' : 'Flip Card'}
        </button>
        <button
          className={styles.nextBtn}
          style={{ background: domain.color }}
          onClick={onNext}
        >
          Next Card →
        </button>
      </div>
    </div>
  );
}
