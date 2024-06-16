import pic1 from '../assets/desktop/ai-guy-pc.avif'
import pic2 from '../assets/desktop/ai-robot.jpeg'

export default function Content() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-5xl lg:grid lg:grid-cols-2 lg:py-12 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl  dark:text-white">
              Crafting Software for the Future
            </h2>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              At our software company, we specialize in developing cutting-edge
              solutions that meet the evolving needs of businesses. Our team of
              expert developers, designers, and strategists work collaboratively
              to create software that drives efficiency, innovation, and growth.
            </p>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              We pride ourselves on our ability to deliver high-quality,
              scalable software solutions quickly and effectively. Whether
              you're a startup or an established enterprise, we have the
              expertise and agility to turn your ideas into powerful, reliable
              software.
            </p>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src={pic1}
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={pic2}
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
