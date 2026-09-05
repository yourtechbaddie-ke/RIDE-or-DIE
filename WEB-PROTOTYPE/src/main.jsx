import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const MENU = [
  ['continue', 'CONTINUE', 'Return to where the world left you.'],
  ['new', 'NEW JOURNEY', 'Enter another life.'],
  ['world', 'THE WORLD', 'Observe what is changing.'],
  ['people', 'PEOPLE', 'Everyone has a story.'],
  ['journal', 'JOURNAL', 'What you remember may not be what happened.'],
  ['settings', 'SETTINGS', 'System configuration.']
];

function App() {
  const [phase, setPhase] = useState('intro');
  const [selected, setSelected] = useState(0);
  const [echo, setEcho] = useState(false);
  const audio = useRef(null);

  useEffect(() => {
    const intro = window.setTimeout(() => setPhase('threshold'), 15000);
    const anomaly = window.setTimeout(() => setEcho(true), 10500);
    return () => { window.clearTimeout(intro); window.clearTimeout(anomaly); };
  }, []);

  useEffect(() => {
    if (phase !== 'threshold') return;
    const timer = window.setInterval(() => setEcho(v => !v), 17000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const start = () => {
    if (phase === 'intro') setPhase('threshold');
  };

  const onKey = (event) => {
    if (phase === 'intro' && ['Enter', ' ', 'Escape'].includes(event.key)) return start();
    if (phase !== 'threshold') return;
    if (event.key === 'ArrowDown') setSelected(v => (v + 1) % MENU.length);
    if (event.key === 'ArrowUp') setSelected(v => (v - 1 + MENU.length) % MENU.length);
    if (event.key === 'Enter') console.info('Threshold menu selection:', MENU[selected][0]);
  };

  return (
    <main className={`threshold-app phase-${phase} ${echo ? 'echo-state' : ''}`} onKeyDown={onKey} tabIndex={0}>
      <section className="threshold-world" aria-label="The Threshold cinematic environment">
        <div className="sky" />
        <div className="fire-horizon"><i/><i/><i/><i/><i/></div>
        <div className="smoke smoke-a"/><div className="smoke smoke-b"/>
        <div className="impossible-road impossible-road-top" />
        <div className="road"><span className="road-glow"/><span className="lane lane-a"/><span className="lane lane-b"/></div>
        <div className="water"><div className="wrong-reflection" /></div>
        <div className="floating-room"><div className="room-lamp"/><div className="room-window"/><div className="room-bed"/></div>
        <div className="distant-city"><span/><span/><span/><span/><span/><span/></div>
        <div className="ash-field" />
        <div className="car car-left"><div className="headlight"/><div className="headlight"/></div>
        <div className="car car-right"><div className="headlight"/><div className="headlight"/></div>
        <div className="echo-artifact" />
        <div className="grain" />
        <div className="vignette" />
      </section>

      {phase === 'intro' && <Intro onStart={start} />}
      {phase === 'threshold' && <Menu selected={selected} setSelected={setSelected} />}
      <button className="sound-toggle" onClick={() => { if (audio.current) audio.current.paused ? audio.current.play() : audio.current.pause(); }} aria-label="Toggle ambient audio">◌</button>
      <audio ref={audio} loop preload="none" src="/audio/threshold-ambient.mp3" />
    </main>
  );
}

function Intro({ onStart }) {
  return <div className="intro-layer" onClick={onStart}>
    <div className="intro-copy"><span className="eyebrow">A LIVING WORLD</span><h1>RIDE<br/><em>OR</em> DIE</h1><p>BEFORE YOU ENTER THE WORLD,<br/>THE WORLD NOTICES YOU.</p></div>
    <button className="skip-intro" onClick={(e) => { e.stopPropagation(); onStart(); }}>SKIP INTRO</button>
    <span className="intro-hint">PRESS ENTER</span>
  </div>;
}

function Menu({ selected, setSelected }) {
  return <div className="menu-layer">
    <header className="brand"><span>RIDE OR DIE</span><small>THE THRESHOLD</small></header>
    <nav className="main-menu" aria-label="Main menu">
      {MENU.map(([id, label, hint], index) => <button key={id} className={selected === index ? 'active' : ''} onMouseEnter={() => setSelected(index)} onClick={() => console.info('Menu:', id)}>
        <span className="menu-index">0{index + 1}</span><strong>{label}</strong><small>{hint}</small>
      </button>)}
    </nav>
    <footer className="controls"><span><kbd>↑</kbd><kbd>↓</kbd> NAVIGATE</span><span><kbd>ENTER</kbd> SELECT</span><span><kbd>ESC</kbd> BACK</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
