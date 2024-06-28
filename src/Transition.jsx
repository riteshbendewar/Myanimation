import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className={`card ${scrolled ? 'scrolled' : ''}`}>
        <h1>Card 1</h1>
        <p>This card will move up and increase its opacity as you scroll.</p>
      </div>
      <div className={`card ${scrolled ? 'scrolled' : ''}`}>
        <h1>Card 2</h1>
        <p>This card will move up and increase its opacity as you scroll.</p>
      </div>
      <div className={`card ${scrolled ? 'scrolled' : ''}`}>
        <h1>Card 3</h1>
        <p>This card will move up and increase its opacity as you scroll.</p>
      </div>
      <div className="content">
        <p>Scroll down to see the effect...</p>
        <p>Keep scrolling...</p>
        <p>Almost there...</p>
        <p>You made it!</p>
      </div>
    </div>
  );
}

export default App;
