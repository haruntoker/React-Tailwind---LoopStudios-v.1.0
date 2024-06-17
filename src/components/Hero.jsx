import TestimonialHero from "./TestimonialHero";
import Lottie from 'lottie-react';
import Animation from '../assets/desktop/Animation .json'



export default function Hero() {
  return (
    <section id="hero" >
     {/* hero */}
     <div className="flex flex-1 max-w-screen   mx-auto px-6 sm:mb-4">
        <div className="max-w-7xl text-center flex-1 mt-32 md:mb-32 p-4 font-sans text-2xl dark:text-white text-gray-900  md:p-10 md:m-32 md:mx-0 md:text-6xl rounded-2xl">
         <h1 className="font-mono font-bold tracking-wide py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent text-shadow-lg"> Impressive experience that deliver</h1>
         <TestimonialHero />
        </div>
        
      {/* animation start */}
     <div className="hidden md:flex flex-row-reverse  mt-20 inset-0 z-0 pointer-events-none">
    <Lottie animationData={Animation} loop={true} />
    </div>
    {/* animation end */}
        
     </div>
     
    </section>
  );
}


