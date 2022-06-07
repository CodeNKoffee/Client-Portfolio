import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Wave from './wave.svg';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';

function App() {
  return (
      <div className="header">
        <Navigation />
        <Hero />
        <img src={Wave} alt="Wave" className="wave" />
        <About />
        <Services />
        <Work />
      </div>
  );
}

export default App;
