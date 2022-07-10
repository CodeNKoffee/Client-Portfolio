import './App.css';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import Wave from './wave.svg';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
      <div>
        <NavigationBar />
        <Hero />
        <img src={Wave} alt="Wave" className="wave" />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
