import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1677784502924-01e5a8cbf70c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8TThqVmJMYlRSd3N8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1678132446331-da900be50e27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1678132852119-c03c2e7d2740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1677523875518-14b96c75caca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1677778036878-95b768b1c40a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668067470659-ea022f81f3cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc3fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1676088933950-bae87cf34fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1OXxNOGpWYkxiVFJ3c3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1675916008017-2ac76c1bdda6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5OXxNOGpWYkxiVFJ3c3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1675430288965-f5b50a8f1c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwN3xNOGpWYkxiVFJ3c3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
];

function Home() {
  const [last, setLast] = useState(5);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setLast(slides.length);
    setOpen(true);
  };
  const handleClose = () => {
    setLast(5);
    setOpen(false);
  };
  return (
    <>
      <Navbar />
      <div className="overflow-hidden bg-white md:hidden rounded-b-lg">
        <div className="md:flex-1 h-96 md:h-auto">
          <Carousel>
            {slides.map((slide, i) => (
              <img
                src={slide}
                key={i}
                className="object-cover object-center bg-no-repeat"
              />
            ))}
          </Carousel>
        </div>

        <div className="p-6 md:flex-1 md:flex md:flex-col justify-center">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase">
              Product
            </span>
            <h2 className="text-xl font-bold mb-1 text-gray-500 tracking-widest border-b-2 border-gray-200">
              Naserian&apos;s Luxury Farm House
            </h2>
            <p className="leading-relaxed">
              Relax and unwind at this peaceful luxurious farm house with
              breathtaking views of Namanga Hills and clear starry nights.A 4
              wheel drive is most preferable for accessing the property.
            </p>
          </div>

          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="flex items-center space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://media.istockphoto.com/id/1356420393/photo/3d-futuristic-woman-with-metaverse-vr-glasses.jpg?b=1&s=170667a&w=0&k=20&c=UTCXG8WzdGTrm4JOVan7Q8WbizJ-oSWW1GMvtvhNEpY="
                alt=""
              />
              <div className="font-medium ">
                <div>The3rdBrother</div>
                <div className="text-sm text-gray-500 ">
                  Owner of the Product
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <span className="title-font font-medium text-sm md:text-2xl text-gray-900">
              Paid $58.00 of $180.00
            </span>
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Pay
            </button>
          </div>
        </div>
      </div>
      <section className="text-gray-600 hidden md:block">
        <div className="container px-5 py-6 mx-auto flex flex-wrap">
          <div className="flex w-full mb-6 flex-wrap justify-between">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3 lg:mb-0 mb-4">
              Naserian&apos;s Luxury Farm House
            </h1>
            <button className="rounded-full w-10 h-10 bg-gray-300/40 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
          <div className="relative grid grid-cols-4 grid-rows-2 gap-4 rounded-lg">
            {slides.length >= 5 &&
              slides.slice(0, last).map((slide, index) => (
                <div
                  className={`${index === 0 && "col-span-2 row-span-2"}`}
                  key={index}
                >
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src={slide}
                  />
                </div>
              ))}
            {slides.length < 5 &&
              slides.map((slide, index) => (
                <div key={index}>
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src={slide}
                  />
                </div>
              ))}
            {slides.length > 5 &&
              (!open ? (
                <button
                  onClick={handleOpen}
                  className="absolute bottom-3 right-2 rounded-lg bg-white px-3 py-2 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                  Show all photos
                </button>
              ) : (
                <button
                  onClick={handleClose}
                  className="absolute bottom-3 right-2 rounded-lg bg-white px-3 py-2 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                  Collapse photos
                </button>
              ))}
          </div>
          <div className="my-4 w-1/2">
            <p className="leading-relaxed">
              Relax and unwind at this peaceful luxurious farm house with
              breathtaking views of Namanga Hills and clear starry nights.A 4
              wheel drive is most preferable for accessing the property.
            </p>
          </div>
          <div className="my-4 w-full flex justify-between border-t-2 border-gray-100 pt-3">
            <div className="flex items-center space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://media.istockphoto.com/id/1356420393/photo/3d-futuristic-woman-with-metaverse-vr-glasses.jpg?b=1&s=170667a&w=0&k=20&c=UTCXG8WzdGTrm4JOVan7Q8WbizJ-oSWW1GMvtvhNEpY="
                alt=""
              />
              <div className="font-medium ">
                <div>The3rdBrother</div>
                <div className="text-sm text-gray-500 ">
                  Owner of the Product
                </div>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <span className="title-font font-medium text-sm md:text-2xl text-gray-600">
                Paid $58.00 of $180.00
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Pay
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
