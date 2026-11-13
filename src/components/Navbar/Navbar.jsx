import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoImg from '../../assets/images/tapas-logo.png';
import './Navbar.css';

/**
 * Tapas Navigation Bar
 * Features the TAPAS logo on the left, primary navigation links with active underline,
 * "Join Tapas" CTA button on the right, and a responsive hamburger menu for mobile devices.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Meditation', path: '/meditation' },
    { name: 'Events', path: '/events' },
    { name: 'Resources', path: '/resources' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <header className="tapas-navbar">
      <div className="site-container tapas-navbar__container">
        <Link to="/" className="tapas-navbar__logo-link" onClick={closeMenu}>
          <img
            src={logoImg}
            alt="TAPAS-PCE Logo"
            className="tapas-navbar__logo"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="tapas-navbar__nav" aria-label="Main Navigation">
          <ul className="tapas-navbar__links">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `tapas-navbar__link ${isActive ? 'active' : ''}`
                  }
                  end={item.path === '/'}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Join Button */}
        <div className="tapas-navbar__cta-wrapper">
          <Link to="/join" className="tapas-navbar__btn">
            Join Tapas
          </Link>
        </div>

        {/* Hamburger Menu Toggle Button (Mobile) */}
        <button
          type="button"
          className={`tapas-navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="tapas-navbar__hamburger-line" />
          <span className="tapas-navbar__hamburger-line" />
          <span className="tapas-navbar__hamburger-line" />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="tapas-navbar__mobile-menu">
          <ul className="tapas-navbar__mobile-links">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `tapas-navbar__mobile-link ${isActive ? 'active' : ''}`
                  }
                  end={item.path === '/'}
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="tapas-navbar__mobile-cta">
            <Link
              to="/join"
              className="tapas-navbar__mobile-btn"
              onClick={closeMenu}
            >
              Join Tapas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
