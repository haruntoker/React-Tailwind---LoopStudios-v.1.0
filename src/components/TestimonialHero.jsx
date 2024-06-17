

export default function TestimonialHero() {
  return (
    <div>
      <section className="relative  overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 dark:text-white"/>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
  <img
    className="mx-auto h-12"
    src="https://cdn3.iconfinder.com/data/icons/eco-tech/512/09_Green_Technology.png"
    alt="Tech Company Logo"
  />
  
  
  <figure className="mt-10">
    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 dark:text-gray-300 sm:text-2xl sm:leading-9 ">
      <p>
        “In LoopStudios, we are committed to pushing the boundaries of innovation. Our cutting-edge solutions empower businesses to thrive in a rapidly evolving digital landscape.”
      </p>
    </blockquote>
    <figcaption className="mt-10">
      <img
        className="mx-auto h-15 w-12 rounded-full shadow-2xl"
        src="https://img.freepik.com/free-photo/international-day-education-celebration_23-2150931022.jpg?t=st=1718632748~exp=1718636348~hmac=1a5181717c8d39edf053d4141473bc6a2262f585dab2a60fe4d27cac30799e18&w=1800"
        alt="CEO of Tech Company"
      />
      <div className="mt-4 flex items-center justify-center space-x-3 text-base">
        <div className="font-semibold text-gray-900 dark:text-gray-300">Alex Johnson</div>
        <svg
          viewBox="0 0 2 2"
          width={3}
          height={3}
          aria-hidden="true"
          className="fill-gray-900"
        >
          <circle cx={1} cy={1} r={1} />
        </svg>
        <div className="text-gray-600 dark:text-gray-300 ">CEO of LoopStudios</div>
      </div>
    </figcaption>
  </figure>
</div>

      </section>
    </div>
  );
}
