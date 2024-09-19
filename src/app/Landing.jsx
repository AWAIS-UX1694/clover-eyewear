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

const TeamAndTestimonials = ({ image, heading, text }) => {
  return (
    <div className="item rounded-lg shadow-md">
      <img src={image} width={100} height={100} />
      <h2 className="text-base font-medium">{heading}</h2>
      <p className="text-sm font-extralight px-5">{text} </p>
    </div>
  );
};

export default function Landing() {
  const events = [
    {
      date: "Specifications of Sunglasses For Men Square Black Frame Black Lens With Box & Clean Cloth",
      title: "Men's Sport Sunglasses",
      description: "Day you have been waiting for",
      details:
        "When testing an eyewear website, the primary focus should be on ensuring that all essential functionalities work smoothly.",
    },
    {
      date: "Berkley offers a range of fishing sunglasses designed to enhance your experience.",
      title: "Berkley Fishing Sunglasses",
      description: "Day you have been waiting for",
      details:
        "where users should be able to view various eyewear options and apply filters based on brand, style, and price. ",
    },
    {
      date: "Our journey begins with a wide selection of frames to match every face shape and style.",
      title: "Discover Your Perfect Frames",
      description: "Day you have been waiting for",
      details:
        "It's important to verify that the product details page displays accurate information, including the availability of different frame sizes and colors.",
    },
    {
      date: "we introduced our innovative virtual try-on tool, allowing you to see how any frame looks on your face.",
      title: "Virtual Try-On Feature Launch",
      description: "Day you have been waiting for",
      details:
        "Special features like a virtual try-on should also be tested to ensure the experience is seamless across devices.",
    },
    {
      date: "Whether you need single vision, bifocals, or progressive lenses, our platform offers easy prescription customization.",
      title: "Prescription Lens Customization",
      description: "Day you have been waiting for",
      details:
        "Eyeglasses are something we all take for granted, but they haven’t always existed.",
    },
  ];

  const [showDetails, setShowDetails] = useState(
    Array(events.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    setShowDetails((prev) => {
      const newShowDetails = [...prev];
      newShowDetails[index] = true;
      return newShowDetails;
    });
  };

  const handleMouseLeave = (index) => {
    setShowDetails((prev) => {
      const newShowDetails = [...prev];
      newShowDetails[index] = false;
      return newShowDetails;
    });
  };
  return (
    <div className="App">
      <div className="home-section section-1 gap-3 md:gap-6">
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
<div className="main ">
<h3 class="hints text-3xl">Our Success</h3>
<div className="timeline-wrapper">
  
        <ul className="timeline">
          {events.map((event, index) => (
            
            <li key={index} data-date={event.date}>
              <span className="title">{event.title}</span>
              <div
                className={`data ${showDetails[index] ? "show" : ""}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <p>{event.details}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
</div>
    </div>
  );
}
