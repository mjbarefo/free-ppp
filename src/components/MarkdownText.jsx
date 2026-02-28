/**
 * Simple markdown renderer for AI responses
 * Handles headings, paragraphs, bold, italic, and lists
 */

export default function MarkdownText({ text }) {
  if (!text) return null;

  // Split into blocks (paragraphs, headings, lists)
  const blocks = text.split(/\n\n+/);

  const renderBlock = (block, index) => {
    const trimmed = block.trim();

    // Check for headings
    if (trimmed.startsWith('# ')) {
      return (
        <h3 key={index} className="md-h1">
          {renderInline(trimmed.replace(/^#\s+/, ''))}
        </h3>
      );
    }

    if (trimmed.startsWith('## ')) {
      return (
        <h4 key={index} className="md-h2">
          {renderInline(trimmed.replace(/^##\s+/, ''))}
        </h4>
      );
    }

    if (trimmed.startsWith('### ')) {
      return (
        <h5 key={index} className="md-h3">
          {renderInline(trimmed.replace(/^###\s+/, ''))}
        </h5>
      );
    }

    // Check for quoted text (starts and ends with ")
    if (trimmed.match(/^[""].*[""]$/s)) {
      return (
        <p key={index} className="md-quote" style={{
          fontStyle: 'italic',
          fontSize: '1.05em',
          margin: '0.5rem 0',
          paddingLeft: '1rem',
          borderLeft: '3px solid rgba(0,0,0,0.1)'
        }}>
          {renderInline(trimmed)}
        </p>
      );
    }

    // Check if it's a list
    if (trimmed.match(/^[-*•]\s/m)) {
      const items = trimmed
        .split('\n')
        .filter(line => line.trim().match(/^[-*•]\s/))
        .map(line => line.replace(/^[-*•]\s+/, ''));

      return (
        <ul key={index} className="md-list">
          {items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    }

    // Regular paragraph
    return (
      <p key={index} className="md-paragraph">
        {renderInline(trimmed)}
      </p>
    );
  };

  const renderInline = (text) => {
    // Handle bold (**text** or __text__)
    let parts = text.split(/(\*\*[^*]+\*\*|__[^_]+__)/g);

    return parts.map((part, i) => {
      // Bold
      if (part.match(/^\*\*.*\*\*$|^__.*__$/)) {
        const content = part.replace(/^\*\*|^__|__$|\*\*$/g, '');
        return <strong key={i}>{content}</strong>;
      }

      // Italic (single * or _)
      if (part.match(/^\*[^*]+\*$|^_[^_]+_$/)) {
        const content = part.replace(/^\*|^_|_$|\*$/g, '');
        return <em key={i}>{content}</em>;
      }

      return part;
    });
  };

  return (
    <div className="markdown-content">
      {blocks.map(renderBlock)}
    </div>
  );
}
