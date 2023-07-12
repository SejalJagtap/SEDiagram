import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Features from './component/Features';

import './app.css';
import featuresList from './component/featuresList';

function createFeature(term) {
    return (
      <Features
        key={term.id}
        name={term.name}
        event={term.event}
        notify={term.notify}
        details={term.details}
      />
    );
  }

function Main() {
  return (
    <div>
    <Navbar />
    <Home />
    {featuresList.map(createFeature)}
    <About />
    <Contact />
    </div>
  );
}

export default Main;
