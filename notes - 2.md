<project set-up guide>

1 - npm create vite@latest react-job
✔ Select a framework: › React
✔ Select a variant: › JavaScript
 > clean App.jsx file
 > delete App.css file

2 - npm install 

3 - npm run dev

4 - from tailwind webpage: <npm install -D tailwindcss postcss autoprefixer>

5 - After 5th step done, run: <npx tailwindcss init -p>

6 - copy the <tailwind.config.js> from tailwind.com

<!-- to add animation -->

1 - npm install lottie-react
2 - go to <https://lottiefiles.com/> and get your animation, and download as a <JSON> in your <asset> file.
3 - import Lottie from 'lottie-react';
4 - import animationData from '../assets/animation.json'; // Adjust the path accordingly
5 - add in your component that you wanna use:
<section>
<!-- animation -->
<div className="absolute mt-20 inset-0 z-0 pointer-events-none">
<Lottie animationData={animationData} loop={true} />
</div>
<!-- component itself -->
<div>
</div>
</section>