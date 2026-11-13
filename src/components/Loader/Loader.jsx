import { useState, useEffect } from 'react';
import logoImg from '../../assets/images/tapas-logo.png';
import './Loader.css';

/**
 * Tapas Loading Animation
 * Shows a full-screen #F0F8FF background with centered pulsed logo for ~1.8 seconds on initial load,
 * then smoothly fades out to reveal the site.
 */
export default function Loader({ onFinish }) {
  const [isFading, setIsFading] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Show loader for 1.8 seconds, then trigger fade-out
    const timer = setTimeout(() => {
      setIsFading(true);
    }, 1800);

    // After fade-out transition (400ms), completely remove loader
    const removeTimer = setTimeout(() => {
      setIsRemoved(true);
      if (onFinish) {
        onFinish();
      }
    }, 2200);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  if (isRemoved) {
    return null;
  }

  return (
    <div
      className={`tapas-loader ${isFading ? 'tapas-loader--hiding' : ''}`}
      role="status"
      aria-label="Loading TAPAS-PCE"
    >
      <img
        src={logoImg}
        alt="TAPAS-PCE Heartfulness Tapas Meditation and Wellness Club Logo"
        className="tapas-loader__logo"
      />
    </div>
  );
}
