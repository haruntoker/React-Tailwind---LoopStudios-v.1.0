import React from 'react'
import Lottie from 'lottie-react';
import animation404 from '../assets/desktop/animation-error.json'

export default function NotFound() {
  return (
    <div>
        
<section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="absolute mt-20 inset-0 z-0 pointer-events-none">
        <Lottie animationData={animation404} loop={true} />
        </div>
        <div className="mx-auto max-w-screen text-center">
            {/* <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p> */}
            <a href="/" className="relative  shadow-2xl inline-flex right-9 top-10 text-white bg-primary-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-12 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
        </div>   
    </div>
</section>
    </div>
  )
}
