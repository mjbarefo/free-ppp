import styles from './DomainIcon.module.css';

/**
 * Professional domain icons - replacing emojis with clean SVG graphics
 */
const icons = {
  assessment: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  biological: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C12 2 15 5 15 9C15 11.2091 13.2091 13 11 13C8.79086 13 7 11.2091 7 9C7 5 10 2 10 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 17C7 17 9 15 12 15C15 15 17 17 17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="9" r="1.5" fill="currentColor"/>
    </svg>
  ),
  cognitive: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 19V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4.22 4.22L6.34 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17.66 17.66L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4.22 19.78L6.34 17.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17.66 6.34L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  ethics: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L4 7V11C4 16 8 20 12 21C16 20 20 16 20 11V7L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="15" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M5 12L12 8L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8C12 8 10 6 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4C14 6 12 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="7" cy="15" r="2" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17" cy="15" r="2" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  research: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  social: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17" cy="17" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M13 8L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M5 14C5 14 6.5 12 9 12C11.5 12 13 14 13 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  treatment: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
};

export default function DomainIcon({ name, color }) {
  return (
    <div className={styles.iconBadge} style={{ '--icon-color': color }}>
      {icons[name] || icons.assessment}
    </div>
  );
}
