import React from 'react';
import { Flowbite} from 'flowbite-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SubHero from "./components/SubHero";
import Companies from './components/Companies'
import Content from "./components/Content";
import Footer from './components/Footer';
import Demo from './components/Demo';
import Services from './components/Services';

function App() {
  return (
    <Flowbite>
      <div className="min-h-screen">
       
        <Navbar />
        <Hero />
        {/* <Demo /> */}
        <SubHero />
        <Services />
        {/* <Content /> */}
        {/* <Companies /> */}
        <Footer />
        
      </div>
    </Flowbite>
  );
}

export default App;
