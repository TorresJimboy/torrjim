import { useEffect, useRef, useState } from 'react';

export default function ScrollPanel({ id, title, count, itemLabel, className = '', children }) {
  const viewportRef = useRef(null);
  const contentRef = useRef(null);
  const [position, setPosition] = useState({ hasOverflow: false, atStart: true, atEnd: false });

  useEffect(() => {
    const viewport = viewportRef.current;
    function updatePosition() {
      const { scrollTop, scrollHeight, clientHeight } = viewport;
      const next = {
        hasOverflow: scrollHeight > clientHeight + 1,
        atStart: scrollTop <= 1,
        atEnd: scrollTop + clientHeight >= scrollHeight - 1,
      };
      setPosition((current) => (
        Object.keys(next).every((key) => current[key] === next[key]) ? current : next
      ));
    }

    const observer = new ResizeObserver(updatePosition);
    observer.observe(viewport);
    observer.observe(contentRef.current);
    viewport.addEventListener('scroll', updatePosition, { passive: true });
    updatePosition();
    return () => {
      observer.disconnect();
      viewport.removeEventListener('scroll', updatePosition);
    };
  }, []);

  function scroll(direction) {
    viewportRef.current.scrollBy({
      top: direction * viewportRef.current.clientHeight * 0.8,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }

  return (
    <div className={`scroll-panel ${className}`}>
      <div className="panel-header">
        <h2 id={`${id}-title`}><span className="panel-dot" aria-hidden="true" />{title}</h2>
        <span className="panel-count">{count} {itemLabel}</span>
      </div>
      <div className={`panel-body${position.hasOverflow && !position.atEnd ? ' has-more' : ''}`}>
        <div id={id} className="panel-viewport" ref={viewportRef} tabIndex={0} role="region" aria-labelledby={`${id}-title`} aria-describedby={`${id}-hint`}>
          <div className="panel-content" ref={contentRef}>{children}</div>
        </div>
      </div>
      <div className="panel-footer">
        <p id={`${id}-hint`}>
          <span className="scroll-hint-icon" aria-hidden="true">{position.hasOverflow && !position.atEnd ? '↓' : '✓'}</span>
          {!position.hasOverflow ? `All ${itemLabel} in view` : position.atEnd ? "You've reached the end" : `Scroll to explore more ${itemLabel}`}
        </p>
        <div className="scroll-controls">
          <button type="button" aria-label={`Scroll ${itemLabel} up`} aria-controls={id} disabled={!position.hasOverflow || position.atStart} onClick={() => scroll(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 14 6-6 6 6" /></svg>
          </button>
          <button type="button" aria-label={`Scroll ${itemLabel} down`} aria-controls={id} disabled={!position.hasOverflow || position.atEnd} onClick={() => scroll(1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 10 6 6 6-6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
