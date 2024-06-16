import React from 'react';
import { Flowbite} from 'flowbite-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SubHero from "./components/SubHero";
import Companies from './components/Companies'
import Content from "./components/Content";

function App() {
  return (
    <Flowbite>
      <div className="min-h-screen">
       
        <Navbar />
        <Hero />
        <SubHero />
        <Content />
        <Companies />
        
      </div>
    </Flowbite>
  );
}

export default App;
