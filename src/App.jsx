import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Meditation from './pages/Meditation/Meditation';
import Events from './pages/Events/Events';
import Team from './pages/Team/Team';
import Resources from './pages/Resources/Resources';
import Join from './pages/Join/Join';
import Contact from './pages/Contact/Contact';

/**
 * Root Application Component
 * Manages page routing, initial loading screen, and persistent layout elements (Navbar and Footer).
 */
export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <BrowserRouter>
      {/* 1.8s Pulse Loading Animation on First Load */}
      {!loadingComplete && (
        <Loader onFinish={() => setLoadingComplete(true)} />
      )}

      <div className="app-layout">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
