/**
 * localStorage utility for persisting EPPP study progress
 * Handles save/load with schema versioning
 */

const STORAGE_KEY = "eppp_study_progress";
const SCHEMA_VERSION = 1;

/**
 * Save progress to localStorage
 * @param {Object} progress - Progress state from App
 * @param {Object} globalStats - { streak, totalAnswered, totalCorrect }
 */
export function saveProgress(progress, globalStats) {
  try {
    const data = {
      version: SCHEMA_VERSION,
      timestamp: new Date().toISOString(),
      progress,
      globalStats,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to save progress:", error);
  }
}

/**
 * Load progress from localStorage
 * @returns {Object|null} - { progress, globalStats } or null if not found
 */
export function loadProgress() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const data = JSON.parse(stored);

    // Handle schema migrations if needed
    if (data.version !== SCHEMA_VERSION) {
      console.warn(
        `Schema version mismatch. Expected ${SCHEMA_VERSION}, got ${data.version}`
      );
      // For now, just return null - could add migration logic here
      return null;
    }

    return {
      progress: data.progress,
      globalStats: data.globalStats,
      timestamp: data.timestamp,
    };
  } catch (error) {
    console.error("Failed to load progress:", error);
    return null;
  }
}

/**
 * Clear all saved progress
 */
export function clearProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear progress:", error);
  }
}

/**
 * Get last study timestamp
 * @returns {string|null} ISO timestamp or null
 */
export function getLastStudyTime() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const data = JSON.parse(stored);
    return data.timestamp;
  } catch {
    return null;
  }
}

// Chat history storage
const CHAT_STORAGE_KEY = "eppp_chat_history";
const CHAT_SCHEMA_VERSION = 1;

/**
 * Save chat history to localStorage
 * @param {Array} messages - Chat message array
 */
export function saveChatHistory(messages) {
  try {
    const data = {
      version: CHAT_SCHEMA_VERSION,
      timestamp: new Date().toISOString(),
      messages: messages.slice(-50), // Keep last 50 messages
    };
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to save chat history:", error);
  }
}

/**
 * Load chat history from localStorage
 * @returns {Array} - Array of messages or empty array
 */
export function loadChatHistory() {
  try {
    const stored = localStorage.getItem(CHAT_STORAGE_KEY);
    if (!stored) return [];

    const data = JSON.parse(stored);

    if (data.version !== CHAT_SCHEMA_VERSION) {
      console.warn("Chat schema version mismatch");
      return [];
    }

    return data.messages || [];
  } catch (error) {
    console.error("Failed to load chat history:", error);
    return [];
  }
}

/**
 * Clear chat history
 */
export function clearChatHistory() {
  try {
    localStorage.removeItem(CHAT_STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear chat history:", error);
  }
}
