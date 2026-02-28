import { useState, useEffect, useRef } from "react";
import { sendMessage } from "../utils/chat-ai";
import MarkdownText from "./MarkdownText";
import styles from "./Chat.module.css";

export default function Chat({
  domains,
  progress,
  initialQuestion = null,
  currentDomain = null,
  onBack,
  onClearContext,
}) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contextQuestion, setContextQuestion] = useState(initialQuestion);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Show context question if provided
  useEffect(() => {
    if (initialQuestion && messages.length === 0) {
      setContextQuestion(initialQuestion);
      setMessages([
        {
          role: "assistant",
          content: `I see you're asking about this question:\n\n**${initialQuestion.q}**\n\nWhat would you like to know about it? I can explain the correct answer, why the distractors are incorrect, or clarify any concepts.`,
        },
      ]);
    }
  }, [initialQuestion, messages.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    // Add placeholder for assistant message
    const assistantIndex = newMessages.length;
    setMessages([...newMessages, { role: "assistant", content: "" }]);

    try {
      let assistantContent = "";

      await sendMessage(
        newMessages,
        progress,
        domains,
        contextQuestion,
        currentDomain,
        (chunk) => {
          assistantContent += chunk;
          setMessages((prev) => {
            const updated = [...prev];
            updated[assistantIndex] = {
              role: "assistant",
              content: assistantContent,
            };
            return updated;
          });
        }
      );
    } catch (err) {
      console.error("Chat error:", err);
      setError(
        err.message || "Failed to get response. Please check your API configuration."
      );
      // Remove the placeholder assistant message
      setMessages(newMessages);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearContext = () => {
    setContextQuestion(null);
    if (onClearContext) onClearContext();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button onClick={onBack} className={styles.backButton}>
          ← Back
        </button>
        <h1 className={styles.title}>
          💬 Chat with Dr. EPPP
        </h1>
        {currentDomain && (
          <div className={styles.domainBadge} style={{ background: currentDomain.color }}>
            {currentDomain.icon} {currentDomain.name}
          </div>
        )}
      </header>

      {contextQuestion && (
        <div className={styles.contextBanner}>
          <div className={styles.contextText}>
            <strong>Question context active</strong>
          </div>
          <button onClick={handleClearContext} className={styles.clearContext}>
            Clear
          </button>
        </div>
      )}

      <div className={styles.messagesContainer}>
        {messages.length === 0 && !initialQuestion && (
          <div className={styles.welcome}>
            <h2>Welcome to Dr. EPPP</h2>
            <p>
              I'm here to help you prepare for the EPPP. Ask me anything about:
            </p>
            <ul>
              <li>Psychology concepts and theories</li>
              <li>Test-taking strategies</li>
              <li>Explanations of practice questions</li>
              <li>Study tips and mnemonics</li>
              <li>Clarification on any EPPP domain</li>
            </ul>
            <p className={styles.welcomeFooter}>
              Try: "Explain the difference between Type I and Type II errors" or
              "What's a good way to remember Erikson's stages?"
            </p>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`${styles.message} ${
              msg.role === "user" ? styles.userMessage : styles.assistantMessage
            }`}
          >
            <div className={styles.messageRole}>
              {msg.role === "user" ? "You" : "Dr. EPPP"}
            </div>
            <div className={styles.messageContent}>
              {msg.role === "assistant" ? (
                <MarkdownText text={msg.content || "..."} />
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}

        {error && (
          <div className={styles.error}>
            <strong>Error:</strong> {error}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            isLoading
              ? "Dr. EPPP is typing..."
              : "Ask a question about psychology or EPPP prep..."
          }
          disabled={isLoading}
          className={styles.input}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className={styles.sendButton}
        >
          {isLoading ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
}
