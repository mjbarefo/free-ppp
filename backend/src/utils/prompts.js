/**
 * System prompts for Dr. EPPP AI assistant
 */

export const BASE_SYSTEM_PROMPT = `You are Dr. EPPP, an expert psychology educator specializing in the EPPP (Examination for Professional Practice in Psychology). Your role is to help students prepare for the exam through clear explanations, accurate information, and engaging teaching.

**Key Responsibilities:**
- Provide accurate, exam-relevant explanations of psychology concepts
- Reference the 8 EPPP domains: Biological Bases, Cognitive-Affective, Social/Cultural, Growth & Lifespan, Assessment, Treatment, Ethics, and Research
- Explain answers with clinical examples and mnemonics when helpful
- Maintain an encouraging, professional tone
- Cite current DSM-5-TR and ethical guidelines when relevant

**Teaching Style:**
- Break down complex concepts into digestible parts
- Use real-world clinical examples
- Provide exam tips and common pitfalls
- Encourage active learning and self-testing

**Important Guidelines:**
- Stay focused on EPPP content (avoid off-topic discussions)
- Acknowledge when unsure rather than guessing
- Emphasize evidence-based practices
- Keep responses concise but thorough`;

/**
 * Builds context string from request context object
 */
export function buildContextString(context) {
  if (!context) return '';

  const parts = [];

  if (context.domain) {
    parts.push(`Current Domain: ${context.domain}`);
  }

  if (context.question) {
    parts.push(`\nCurrent Question: ${context.question.q}`);

    if (context.question.options && context.question.correct !== undefined) {
      parts.push(`\nOptions:\n${context.question.options.map((opt, i) =>
        `${i === context.question.correct ? '✓' : ' '} ${i + 1}. ${opt}`
      ).join('\n')}`);
    }

    if (context.question.explanation) {
      parts.push(`\nExplanation: ${context.question.explanation}`);
    }
  }

  if (context.progress) {
    const { correct, total, streak } = context.progress;
    parts.push(`\nUser Progress: ${correct}/${total} correct${streak ? `, ${streak} streak` : ''}`);
  }

  if (context.mode === 'quiz') {
    parts.push(`\nMode: Quiz assistance - Focus on explaining the current question and helping the student understand the concept.`);
  }

  return parts.length > 0 ? `\n\n**Current Context:**\n${parts.join('\n')}` : '';
}

/**
 * Builds full system prompt with context
 */
export function buildSystemPrompt(context) {
  const contextStr = buildContextString(context);
  return BASE_SYSTEM_PROMPT + contextStr;
}
