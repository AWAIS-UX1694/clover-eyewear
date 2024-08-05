import HomeButton from "../components/common/HomeButton";
import { Slide, Slider } from "../components/common/Slider";
import Team from "../assets/img/team.avif";
import Testimonial from "../assets/img/testimonial.avif";

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
  return (
    <div className="App">
      <div className="home-section section-1 gap-3 md:gap-6">
        <div className="header roboto text-2xl md:text-5xl font-semibold">
          Clover Eyewear
        </div>
        <div className="tagline poppins text-sm md:text-2xl font-extralight">
          Best place for Prescription
        </div>
        <HomeButton />
      </div>
      <div className="home-section section-2 gap-7">
        <div className="text-content gap-4">
          <div className="main-heading">Some Heading</div>
          <div className="main-para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            dolores deserunt quisquam iure ullam consequuntur dolorem blanditiis
            aspernatur aperiam ad?
          </div>
          <HomeButton />
        </div>
        <div className="video-content">
          <video autoPlay muted loop>
            <source src="/mainpage_video.mkv" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="home-section section-3 gap-3">
        <div className="main-heading">Your Section Header Goes Here</div>
        <div className="main-para md:px-48">
          This is prime space! Use it to elaborate on your attention-grabbing
          section title. Explain what this section is about, share some details,
          and give just the right amount of information to get the audience
          hooked.
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
      <div className="home-section section-4 gap-4">
        <div className="content py-8">
          <div className="main-heading">Some Heading</div>
          <div className="main-para">
            This is prime space! Use it to elaborate on your attention-grabbing
            section title.
          </div>
          <HomeButton />
          <img
            src="https://images.unsplash.com/photo-1530432999454-016a47c78af3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="content py-8">
          <div className="main-heading">Some Heading</div>
          <div className="main-para">
            This is prime space! Use it to elaborate on your attention-grabbing
            section title.
          </div>
          <HomeButton />
          <img
            src="https://images.unsplash.com/photo-1530432999454-016a47c78af3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div className="home-section section-5 gap-3 md:gap-6">
        <div className="header roboto text-2xl md:text-5xl font-semibold">
          This space is for big words with a bold message.
        </div>
        <div className="tagline poppins text-sm md:text-2xl font-extralight">
          Your subtitle goes here
        </div>
        <HomeButton />
      </div>
      <div className="home-section section-6 team-testimonial">
        <div className="main-heading">Our Team</div>
        <div className="content">
          <TeamAndTestimonials
            image={Team}
            heading="Your Sub-Header Goes Here"
            text="There is just enough space here for several lines of text. Use it
              well."
          />
          <TeamAndTestimonials
            image={Team}
            heading="Your Sub-Header Goes Here"
            text="There is just enough space here for several lines of text. Use it
              well."
          />
          <TeamAndTestimonials
            image={Team}
            heading="Your Sub-Header Goes Here"
            text="There is just enough space here for several lines of text. Use it
              well."
          />
        </div>
      </div>
      <div className="home-section section-7 team-testimonial">
        <div className="main-heading">Our Testimonials</div>
        <div className="content">
          <TeamAndTestimonials
            image={Testimonial}
            heading="Your Sub-Header Goes Here"
            text="There is just enough space here for several lines of text. Use it
              well."
          />
          <TeamAndTestimonials
            image={Testimonial}
            heading="Your Sub-Header Goes Here"
            text="There is just enough space here for several lines of text. Use it
              well."
          />
          <TeamAndTestimonials
            image={Testimonial}
            heading="Your Sub-Header Goes Here"
            text="There is just enough space here for several lines of text. Use it
              well."
          />
        </div>
      </div>
    </div>
  );
}
