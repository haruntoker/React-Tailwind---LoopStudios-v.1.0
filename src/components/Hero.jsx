import TestimonialHero from "./TestimonialHero";
import Lottie from 'lottie-react';
import Animation from '../assets/desktop/Animation .json'



export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className=" grid max-w-screen-5xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6 text-center p-4 font-sans text-5xl">
        <h1 className="font-mono font-bold tracking-wide py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent text-shadow-lg"> Impressive experience that deliver</h1>
            
            <TestimonialHero />
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
            {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/> */}
            <Lottie animationData={Animation} loop={true} />
        </div>                
    </div>
</section>
  );
}


