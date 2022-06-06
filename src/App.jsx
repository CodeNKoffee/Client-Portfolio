import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Wave from './wave.svg';
import About from './components/About';

function App() {
  return (
      <div className="header">
        <Navigation />
        <Hero />
        <img src={Wave} alt="Wave" className="wave" />
        <About />
      </div>
  );
}

export default App;
