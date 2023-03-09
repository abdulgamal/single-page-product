import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import React from "react";

const slides = [
  "https://images.unsplash.com/photo-1677784502924-01e5a8cbf70c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8TThqVmJMYlRSd3N8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1678132446331-da900be50e27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1678132852119-c03c2e7d2740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1677523875518-14b96c75caca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
];

function Home() {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden bg-white md:h-[90vh] md:flex rounded-b-lg">
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
              Naserian's Luxury Farm House
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
    </>
  );
}

export default Home;
