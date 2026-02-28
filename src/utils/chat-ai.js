// Dr. EPPP Chat AI Integration using Claude Sonnet 4.5

const DR_EPPP_SYSTEM_PROMPT = `You are Dr. EPPP, an expert psychology tutor helping students prepare for the Examination for Professional Practice in Psychology (EPPP).

Your expertise spans all 8 EPPP domains:
1. Assessment & Diagnosis (16%)
2. Biological Bases of Behavior (10%)
3. Cognitive-Affective Bases (13%)
4. Ethical/Legal/Professional (16%)
5. Growth & Lifespan Development (12%)
6. Research Methods & Statistics (7%)
7. Social & Multicultural Bases (11%)
8. Treatment & Intervention (15%)

Your role:
- Explain psychology concepts clearly and accurately
- Clarify EPPP content and answer study questions
- Provide test-taking strategies and mnemonics
- Reference current evidence-based knowledge (DSM-5-TR, APA Ethics Code 2017)
- Be encouraging and supportive while maintaining academic rigor

Communication style:
- Concise but thorough (2-4 paragraphs typically)
- Use clinical examples and case applications
- Reference key theorists and research
- Provide memory aids when helpful
- Avoid overly technical jargon unless necessary

Respond as a knowledgeable, supportive psychology professor would during office hours.`;

/**
 * Builds context string from user progress and current domain
 */
export function buildContext(progress, domains, contextQuestion = null, currentDomain = null) {
  let context = '\n\nStudent progress context:\n';

  // Overall stats
  const totalAnswered = Object.values(progress).reduce((sum, p) => sum + (p.total || 0), 0);
  const totalCorrect = Object.values(progress).reduce((sum, p) => sum + (p.correct || 0), 0);
  const accuracy = totalAnswered > 0 ? ((totalCorrect / totalAnswered) * 100).toFixed(1) : 0;

  context += `- Overall: ${totalAnswered} questions answered, ${accuracy}% accuracy\n`;

  // Domain-specific accuracy
  context += '- Domain accuracy:\n';
  domains.forEach(domain => {
    const p = progress[domain.id] || { correct: 0, total: 0 };
    if (p.total > 0) {
      const domainAccuracy = ((p.correct / p.total) * 100).toFixed(1);
      context += `  * ${domain.name}: ${domainAccuracy}% (${p.correct}/${p.total})\n`;
    }
  });

  // Current domain focus
  if (currentDomain) {
    context += `\nStudent is currently studying: ${currentDomain.name}\n`;
    context += `Domain topics: ${currentDomain.topics.slice(0, 5).join(', ')}...\n`;
  }

  // Specific question context
  if (contextQuestion) {
    context += `\nStudent is asking about this question:\n`;
    context += `Q: ${contextQuestion.q}\n`;
    context += `Options: ${contextQuestion.options.join(', ')}\n`;
    context += `Correct answer: ${contextQuestion.options[contextQuestion.correct]}\n`;
    context += `Explanation: ${contextQuestion.explanation}\n`;
  }

  return context;
}

/**
 * Sends a chat message to backend API with streaming
 */
export async function sendMessage(messages, progress, domains, contextQuestion = null, currentDomain = null, onChunk) {
  // Build context object for backend
  const context = {
    mode: 'chat',
    domain: currentDomain?.name,
    progress: {
      correct: Object.values(progress).reduce((sum, p) => sum + (p.correct || 0), 0),
      total: Object.values(progress).reduce((sum, p) => sum + (p.total || 0), 0),
    }
  };

  // Add question context if provided
  if (contextQuestion) {
    context.question = {
      q: contextQuestion.q,
      options: contextQuestion.options,
      correct: contextQuestion.correct,
      explanation: contextQuestion.explanation
    };
  }

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages,
      context,
      stream: true
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
    console.error('API Error:', errorData);
    throw new Error(errorData.error?.message || `API error: ${response.status}`);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let fullText = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') continue;

          try {
            const parsed = JSON.parse(data);

            if (parsed.type === 'content') {
              const chunk = parsed.text;
              fullText += chunk;
              if (onChunk) onChunk(chunk);
            } else if (parsed.type === 'error') {
              console.error('Stream error event:', parsed);
              throw new Error(parsed.error?.message || 'Unknown stream error');
            }
          } catch (e) {
            if (e.message && e.message !== 'Unexpected end of JSON input') {
              console.error('Stream parsing error:', e, 'Raw data:', data);
            }
          }
        }
      }
    }

    return fullText;
  } catch (error) {
    console.error('Streaming error:', error);
    throw error;
  }
}
