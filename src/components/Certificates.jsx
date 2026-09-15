import { useEffect, useRef, useState } from 'react';
import { certificates } from '../data/portfolio.js';

export default function Certificates({ onClose }) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef(null);
  const startX = useRef(null);
  const move = (direction) => setIndex((current) => (current + direction + certificates.length) % certificates.length);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  return (
    <dialog ref={dialogRef} className="certificate-dialog" aria-label="Certificates" onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} onKeyDown={(event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        move(event.key === 'ArrowLeft' ? -1 : 1);
      }
    }}>
      <div className="carousel-container">
        <button className="close-certificates" aria-label="Close certificates" onClick={onClose}>×</button>
        <div className="carousel" onTouchStart={(event) => { startX.current = event.touches[0].clientX; }} onTouchCancel={() => { startX.current = null; }} onTouchEnd={(event) => {
          if (startX.current === null) return;
          const delta = event.changedTouches[0].clientX - startX.current;
          if (Math.abs(delta) > 50) move(delta > 0 ? -1 : 1);
          startX.current = null;
        }}>
          <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {certificates.map((certificate, i) => (
              <div className="slide" key={certificate.pdf} aria-hidden={i !== index} inert={i !== index}>
                <div className="certificate-card">
                  <a href={certificate.pdf} target="_blank" rel="noopener noreferrer">
                    <img className="cert" src={certificate.image} alt={`${certificate.name} certificate`} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="buttons">
            <button aria-label="Previous certificate" onClick={() => move(-1)}>❮</button>
            <button aria-label="Next certificate" onClick={() => move(1)}>❯</button>
          </div>
          <div className="dots">
            {certificates.map((certificate, i) => <button key={certificate.pdf} className={`dot${i === index ? ' active' : ''}`} aria-label={`Show ${certificate.name} certificate`} aria-pressed={i === index} onClick={() => setIndex(i)} />)}
          </div>
        </div>
        <p className="certificate-status" aria-live="polite">{certificates[index].name} — {index + 1} of {certificates.length}</p>
      </div>
    </dialog>
  );
}
