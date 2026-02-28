/**
 * Backend API integration for AI-powered explanations
 * Calls our Express backend which proxies to Anthropic API
 */

/**
 * Get expanded explanation from Claude via backend
 * @param {Object} context - Question context
 * @param {string} context.question - The quiz question
 * @param {string} context.userAnswer - The answer the user selected
 * @param {string} context.correctAnswer - The correct answer
 * @param {string} context.explanation - The original explanation
 * @param {boolean} context.wasCorrect - Whether the user was correct
 * @param {string} context.domain - Current domain name
 * @returns {Promise<string>} - AI-generated expanded explanation
 */
export async function getExpandedExplanation(context) {
  const prompt = `You are helping a psychology student prepare for the EPPP (Examination for Professional Practice in Psychology).

Question: ${context.question}

The student selected: "${context.userAnswer}"
The correct answer is: "${context.correctAnswer}"
${context.wasCorrect ? "✓ They answered correctly!" : "✗ They answered incorrectly."}

Original explanation: ${context.explanation}

Provide additional context, clinical examples, or clarification that will help the student better understand this concept. Keep your response concise (2-3 paragraphs maximum), focused on practical understanding for the EPPP exam. Include relevant theorists, studies, or clinical applications where appropriate.`;

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        mode: 'quiz',
        context: {
          domain: context.domain,
          question: {
            q: context.question,
            options: [context.correctAnswer, context.userAnswer],
            correct: 0,
            explanation: context.explanation
          }
        },
        stream: false
      }),
    });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        // If we can't parse the error response, provide a generic message
        throw new Error(`API request failed (${response.status} ${response.statusText})`);
      }

      console.error('API error response:', errorData);
      const errorMessage = errorData.error?.message || errorData.message || `API request failed (${response.status})`;
      throw new Error(errorMessage);
    }

    const data = await response.json();

    if (!data.content) {
      console.error('Invalid API response:', data);
      throw new Error('Received invalid response from server');
    }

    return data.content;
  } catch (error) {
    console.error('AI explanation error:', error);

    // Provide more helpful error messages
    if (error.message?.includes('fetch') || error.name === 'TypeError') {
      throw new Error('Unable to connect to server. Make sure the backend is running.');
    }

    // Re-throw the error with its message intact
    throw error;
  }
}

/**
 * Check if backend API is available
 * @returns {Promise<boolean>}
 */
export async function isApiAvailable() {
  try {
    const response = await fetch('/api/health');
    return response.ok;
  } catch {
    return false;
  }
}
