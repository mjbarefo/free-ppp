import styles from './Header.module.css';

export default function Header({ totalAnswered, totalCorrect, streak, onLogoClick, theme, onToggleTheme }) {
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  return (
    <header className={styles.header}>
      <div className={styles.topBar} />
      <div className={styles.inner}>
        <div className={styles.logo} onClick={onLogoClick}>
          <h1 className={styles.title}>EPPP</h1>
          <span className={styles.subtitle}>Study Companion</span>
        </div>
        <div className={styles.right}>
          {totalAnswered > 0 && (
            <div className={styles.stats}>
              <span>
                Answered: <strong>{totalAnswered}</strong>
              </span>
              <span>
                Accuracy:{' '}
                <strong className={accuracy >= 70 ? styles.good : styles.warn}>
                  {accuracy}%
                </strong>
              </span>
              {streak > 1 && (
                <span className={styles.streak}>⚡ {streak}</span>
              )}
            </div>
          )}
          <button
            onClick={onToggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '◐' : '◑'}
          </button>
        </div>
      </div>
    </header>
  );
}
