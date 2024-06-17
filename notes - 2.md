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


<!-- hidden : note -->
<div className="hidden md:flex">
- it gonne be hidden in <sm> screen, when hit the <md> screen gonna be visible.

<!-- flex-col / flex-row -->
1 - use, <flex-col> for <small screen>
2 - use, <flex-row> for <medium screen> e.g. <md:flex:row>


<!-- container -->
 <container> class in Tailwind CSS is used to create a fixed-width container that centers the content horizontally and adjusts its width responsively based on the screen size.
<container> helps in creating consistent layouts by keeping the content within a specified maximum width while maintaining proper alignment.
 
 
<brief summary> ::::::

<Fixed Width> The container has a maximum width that changes based on the screen size.
<Centered Content> The content inside the container is centered horizontally.
<Responsive> The container’s width adjusts according to the screen size to ensure a good layout on all devices.


<!-- text color -->
<bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent>