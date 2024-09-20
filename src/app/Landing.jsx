import HomeButton from "../components/common/HomeButton";
import { Slide, Slider } from "../components/common/Slider";
import Team from "../assets/img/team.avif";
import Testimonial from "../assets/img/testimonial.avif";
import vision1 from "../assets/img/vision1.png";
import vision2 from "../assets/img/vision2.png";
import vision3 from "../assets/img/vision3.png";
import vision4 from "../assets/img/vision4.png";
import vision5 from "../assets/img/vision5.png";
import vision6 from "../assets/img/vision6.png";
import vision7 from "../assets/img/vision7.png";
import vision8 from "../assets/img/vision8.png";
import vision9 from "../assets/img/vision9.png";
import React, { useState } from "react";

import video1 from "../assets/video/2.mp4";
import ReactPlayer from "react-player";


export default function Landing() {
  const timelineData = [
    {
      version: 'Flowbite Library v1.0.0',
      date: 'Released on December 2, 2021',
      description: 'Get started with dozens of web components and interactive.',
    },
    {
      version: 'Flowbite Library v1.1.0',
      date: 'Released on December 10, 2021',
      description: 'New features added to enhance accessibility and performance.',
    },
    {
      version: 'Flowbite Library v1.2.0',
      date: 'Released on December 23, 2021',
      description: 'Added advanced grid systems and responsive components.',
    },
    {
      version: 'Flowbite Library v1.3.0',
      date: 'Released on January 5, 2022',
      description: 'Improved performance for larger datasets.',
    },
    {
      version: 'Flowbite Library v1.4.0',
      date: 'Released on January 20, 2022',
      description: 'Get started with dozens of web components and interactive.',
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <div className="App">
      <div className="home-section md:mt-0 lg:mt-0  section-1 gap-3 md:gap-6">
        <div className="header  text-2xl md:text-5xl font-semibold">
          Perfect Vision, Perfect Style!
        </div>
        <div className="tagline poppins text-sm md:text-2xl lg:w-[40rem] font-extralight">
          Explore our premium lenses designed for clarity and comfort.
        </div>
        <HomeButton />
      </div>
      <div className="home-section section-2 gap-7">
        <div className="text-content  gap-4">
          <div className="main-heading ">
            <h1 className="text-3xl font-bold">Glasses for Every Lifestyle</h1>
          </div>
          <div className="main-para">
            Whether you're hitting the gym, the office, or the beach, our
            glasses blend style, comfort, and protection to fit seamlessly into
            your life. Find your perfect pair for any occasion.
          </div>
          <HomeButton />
        </div>
        <div className="video-content">
          <marquee behavior="" loop="10" width="80%" direction="left">
            <div className="rinning flex gap-3">
              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision1}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>
              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision2}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>
              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision5}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>
              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision4}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>
            </div>
          </marquee>
          <marquee scrolldelay="200" loop="10" width="80%" direction="left">
            <div className="rinning flex gap-3">
              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision3}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>
              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision1}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>
              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision1}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>

              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision8}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>
            </div>
          </marquee>
          <marquee
            behavior=""
            scrolldelay="100"
            loop="10"
            width="80%"
            direction="left"
          >
            <div className="rinning flex gap-3">
              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision4}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>
              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision2}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>

              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision9}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>
              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision6}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>
            </div>
          </marquee>
          <marquee behavior="" loop="40" width="80%" direction="left">
            <div className="rinning flex gap-3">
              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision9}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>
              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision7}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>
              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision3}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>
              <section className=" h-28 w-44  flex flex-col items-center rounded-xl  bg-gray-100 cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
                <img
                  src={vision5}
                  className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
                />
                <div
                  className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0  rounded-xl"
                ></div>
              </section>
            </div>
          </marquee>
        </div>
      </div>
      <div className="home-section section-3 gap-3">
        <div className="main-headingc text-3xl font-bold">
          Redefine Your Look with Our Hottest Collection
        </div>
        <div className="main-para md:px-48">
          Step up your style game with eyewear that stands out. From classic
          elegance to modern edge, our top picks are designed to keep you
          looking sharp and feeling confident.
        </div>
        <Slider>
          <Slide>
            <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Slide>
          <Slide>
            <img src="https://images.unsplash.com/photo-1556306535-38febf6782e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Slide>
          <Slide>
            <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Slide>
          <Slide>
            <img src="https://images.unsplash.com/photo-1556306535-38febf6782e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Slide>
          <Slide>
            <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Slide>
          <Slide>
            <img src="https://images.unsplash.com/photo-1556306535-38febf6782e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Slide>
          <Slide>
            <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Slide>
          <Slide>
            <img src="https://images.unsplash.com/photo-1556306535-38febf6782e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Slide>
          <Slide>
            <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Slide>
          <Slide>
            <img src="https://images.unsplash.com/photo-1556306535-38febf6782e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Slide>
          <Slide>
            <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Slide>
        </Slider>
        <HomeButton />
      </div>
      <div className="home-section section-4">
        <div className="player-wrapper rounded bg-yellow-50 w-[100%] h-[100%]">
          <ReactPlayer
            className="react-player"
            url={video1}
            width={"100%"}
            height={"100%"}
            playing={true} // This will ensure the video plays automatically
            loop={true} // This will loop the video infinitely
            controls={false} // Hides the controls (set to true if you need them)
            volume={0} // Mutes the video
          />
        </div>
      </div>
      <div className="home-section section-5 gap-3 md:gap-6">
        <div className="header px-24 text-2xl md:text-5xl font-semibold">
          See the world with clarity and style. Redefine your vision with our
          precision-crafted eyewear.
        </div>
        <div className="tagline  text-sm md:text-2xl font-extralight">
          Discover the perfect pair for every moment.
        </div>
        <HomeButton />
      </div>
      
      <div className="container h-98svhc w-full flex justify-center items-center">
      <ol className="flex w-[100%] md:m-52 p-44 h-full justify-between items-center relative flex-col sm:flex-row">
        {timelineData.map((item, index) => (
          <li 
            key={index} 
            className="relative flex flex-col md:w-[30rem] group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Circle and Line */}
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full bg-black shrink-0">
                
              </div>
              {/* Line between circles */}
              {index < timelineData.length - 1 && (
                <div className="hidden w-52 sm:block h-0.5 bg-gray-300"></div>
              )}
            </div>

            {/* Date and Description Beneath Each Point */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.version}</h3>
              <time className="block mb-2 text-sm text-start font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </time>
              <p className="text-sm text-start text-gray-700 dark:text-gray-400 h-28 w-52">{item.description}</p>
            </div>

            {/* Hover Text */}
            {hoveredIndex === index && (
              <div className="absolute top-16 sm:top-20 p-4 bg-gray-100 shadow-lg rounded-md text-sm text-gray-700 w-64">
                <h3 className="font-semibold text-gray-900">{item.version}</h3>
                <p>{item.description}</p>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
    </div>
  );
}
