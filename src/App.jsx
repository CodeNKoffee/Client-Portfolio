import './App.css';
import Wave from './wave.svg';
import Hero from './components/Hero';
import Navigation from './components/Navigation';

function App() {
  return (
      <div className="header">
        <Navigation />
        <Hero />
        <img src={Wave} alt="Wave" className="wave" />
      </div>
  );
}

export default App;
