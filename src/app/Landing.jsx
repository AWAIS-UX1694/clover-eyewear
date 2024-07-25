import HorizontalScroll from "react-scroll-horizontal";
import "../App.css";
import logo from "../Assets/images/logo.jpg";
import Navbar from "../components/common/Navbar";
import video from "../Assets/images/mainpage_video.mkv";
import fourthslide from "../Assets/images/fourthslide.avif";
import team from "../Assets/images/team.avif";
import testimonial from "../Assets/images/testimonial.avif";
import glasses1 from "../Assets/images/glasses1.avif";
import glasses2 from "../Assets/images/glasses2.avif";

export default function Landing() {
  const child = { width: `160em`, height: `100%` };

  return (
    <>
      <div className="App overflow-hidden  displayonLaptop">
        <HorizontalScroll>
          {/* first slide start*/}
          <div style={child} className="main-slide mainslide1 main bg">
            <h1>Clover Eyewear</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quaerat facere quae.
            </p>
            <button className="getstarted">Get Started</button>
          </div>
          {/* first slide end */}

          {/* second slide start*/}
          <div style={child} className="main bg2">
            <div className="mainSlide2">
              <div className="leftContainer">
                <h2>Some Heading</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                  dolores deserunt quisquam iure ullam consequuntur dolorem
                  blanditiis aspernatur aperiam ad?
                </p>
                <button className="getstarted">Get Started</button>
              </div>

              <div className="rightContainer">
                <video width="100%" controls autoplay muted>
                  <source src={video} type="video/mp4" />
                </video>
                {/* <video
                    autoplay
                    loop
                    muted
                    src={video}
                    className="videoDisplay"
                  ></video> */}
              </div>
            </div>
          </div>

          {/* second slide end*/}

          {/* third slide start*/}

          <div style={child} className="main-slide mainslide3 main bg">
            <h2>Your Section Header Goes Here</h2>
            <p>
              This is prime space! Use it to elaborate on your
              attention-grabbing section title. Explain what this section is
              about, share some details, and give just the right amount of
              information to get the audience hooked.
            </p>

            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img src={glasses1} />
                </div>

                <div className="slide">
                  <img src={glasses2} />
                </div>

                <div className="slide">
                  <img src={glasses1} />
                </div>

                <div className="slide">
                  <img src={glasses2} />
                </div>

                <div className="slide">
                  <img src={glasses1} />
                </div>

                <div className="slide">
                  <img src={glasses2} />
                </div>

                <div className="slide">
                  <img src={glasses1} />
                </div>

                <div className="slide">
                  <img src={glasses2} />
                </div>

                <div className="slide">
                  <img src={glasses1} />
                </div>

                <div className="slide">
                  <img src={glasses2} />
                </div>

                <div className="slide">
                  <img src={glasses1} />
                </div>
              </div>
            </div>
            <button className="getstarted">Get Started</button>
          </div>

          {/* third slide end*/}

          {/* fourth slide start*/}

          <div style={child} className="main">
            <div className="mainslide4">
              <div className="leftcontainer">
                <h1>Some Heading</h1>
                <p>
                  This is prime space! Use it to elaborate on your
                  attention-grabbing section title.{" "}
                </p>
                <button className="getstarted">Get Started</button>
                <img src={fourthslide} width={300} height={300} />
              </div>

              <div className="rightcontainer">
                <h1>Some Heading</h1>
                <p>
                  This is prime space! Use it to elaborate on your
                  attention-grabbing section title.{" "}
                </p>
                <button className="getstarted">Get Started</button>
                <img src={fourthslide} width={300} height={300} />
              </div>
            </div>
          </div>

          {/* fourth slide end*/}

          {/* fifth slide start*/}

          <div style={child} className="main-slide main bg mainslide5">
            <h1>This space is for big words with a bold message.</h1>
            <p>Your subtitle goes here</p>
            <button className="getstarted">Get Started</button>
          </div>
          {/* fifth slide end */}

          {/* sixth slide start*/}

          <div style={child} className="main-slide main bg mainslide6">
            <h1>Our Team</h1>

            <div className="TeamContainer">
              <div className="container1">
                <img src={team} width={100} height={100} />
                <h2>Your Sub-Header Goes Here</h2>
                <p>
                  There is just enough space here for several lines of text. Use
                  it well.
                </p>
              </div>

              <div className="container1">
                <img src={team} />
                <h2>Your Sub-Header Goes Here</h2>
                <p>
                  There is just enough space here for several lines of text. Use
                  it well.
                </p>
              </div>

              <div className="container1">
                <img src={team} />
                <h2>Your Sub-Header Goes Here</h2>
                <p>
                  There is just enough space here for several lines of text. Use
                  it well.
                </p>
              </div>
            </div>
          </div>
          {/* sixth slide end*/}

          {/* seventh slide start*/}

          <div style={child} className="main-slide main bg mainslide6">
            <h1>Our Testimonials</h1>

            <div className="TeamContainer">
              <div className="container1">
                <img src={testimonial} width={100} height={100} />
                <h2>Your Sub-Header Goes Here</h2>
                <p>
                  There is just enough space here for several lines of text. Use
                  it well.
                </p>
              </div>

              <div className="container1">
                <img src={testimonial} />
                <h2>Your Sub-Header Goes Here</h2>
                <p>
                  There is just enough space here for several lines of text. Use
                  it well.
                </p>
              </div>

              <div className="container1">
                <img src={testimonial} />
                <h2>Your Sub-Header Goes Here</h2>
                <p>
                  There is just enough space here for several lines of text. Use
                  it well.
                </p>
              </div>
            </div>
          </div>
          {/* seventh slide end*/}
        </HorizontalScroll>
      </div>

      <div className=" displayonMobile flex flex-col">
        {/* first slide start*/}
        <div className="main-slide mainslide1 main bg">
          <h1 className="text-xs[17px] ">Clover Eyewear</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quaerat facere quae.
          </p>
          <button className="getstarted">Get Started</button>
        </div>
        {/* first slide end */}

        {/* second slide start*/}
        <div className="main bg2">
          <div className="mainSlide2">
            <div className="leftContainer">
              <h2>Some Heading</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                dolores deserunt quisquam iure ullam consequuntur dolorem
                blanditiis aspernatur aperiam ad?
              </p>
              <button className="getstarted">Get Started</button>
            </div>

            <div className="rightContainer">
              <video loop width="100%"controls={false} autoPlay={true} muted playsInline>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* second slide end*/}

        {/* third slide start*/}

        <div className="main-slide mainslide3 main bg">
          <h2>Your Section Header Goes Here</h2>
          <p>
            This is prime space! Use it to elaborate on your attention-grabbing
            section title. Explain what this section is about, share some
            details, and give just the right amount of information to get the
            audience hooked.
          </p>

          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img src={glasses1} />
              </div>

              <div className="slide">
                <img src={glasses2} />
              </div>

              <div className="slide">
                <img src={glasses1} />
              </div>

              <div className="slide">
                <img src={glasses2} />
              </div>

              <div className="slide">
                <img src={glasses1} />
              </div>

              <div className="slide">
                <img src={glasses2} />
              </div>

              <div className="slide">
                <img src={glasses1} />
              </div>

              <div className="slide">
                <img src={glasses2} />
              </div>

              <div className="slide">
                <img src={glasses1} />
              </div>

              <div className="slide">
                <img src={glasses2} />
              </div>

              <div className="slide">
                <img src={glasses1} />
              </div>
            </div>
          </div>
          <button className="getstarted">Get Started</button>
        </div>

        {/* third slide end*/}

        {/* fourth slide start*/}

        <div className="main">
          <div className="mainslide4">
            <div className="leftcontainer">
              <h1>Some Heading</h1>
              <p>
                This is prime space! Use it to elaborate on your
                attention-grabbing section title.{" "}
              </p>
              <button className="getstarted">Get Started</button>
              <img src={fourthslide} width={300} height={300} />
            </div>

            <div className="rightcontainer">
              <h1>Some Heading</h1>
              <p>
                This is prime space! Use it to elaborate on your
                attention-grabbing section title.{" "}
              </p>
              <button className="getstarted">Get Started</button>
              <img src={fourthslide} width={300} height={300} />
            </div>
          </div>
        </div>

        {/* fourth slide end*/}

        {/* fifth slide start*/}

        <div className="main-slide main bg mainslide5">
          <h1>This space is for big words with a bold message.</h1>
          <p>Your subtitle goes here</p>
          <button className="getstarted">Get Started</button>
        </div>
        {/* fifth slide end */}

        {/* sixth slide start*/}

        <div className="main-slide main bg mainslide6">
          <h1>Our Team</h1>

          <div className="TeamContainer">
            <div className="container1">
              <img src={team} width={100} height={100} />
              <h2>Your Sub-Header Goes Here</h2>
              <p>
                There is just enough space here for several lines of text. Use
                it well.
              </p>
            </div>

            <div className="container1">
              <img src={team} />
              <h2>Your Sub-Header Goes Here</h2>
              <p>
                There is just enough space here for several lines of text. Use
                it well.
              </p>
            </div>

            <div className="container1">
              <img src={team} />
              <h2>Your Sub-Header Goes Here</h2>
              <p>
                There is just enough space here for several lines of text. Use
                it well.
              </p>
            </div>
          </div>
        </div> 
        {/* sixth slide end*/}

        {/* seventh slide start*/}

         <div className="main-slide main bg mainslide6">
          <h1>Our Testimonials</h1>

          <div className="TeamContainer">
            <div className="container1">
              <img src={testimonial} width={100} height={100} />
              <h2>Your Sub-Header Goes Here</h2>
              <p>
                There is just enough space here for several lines of text. Use
                it well.
              </p>
            </div>

            <div className="container1">
              <img src={testimonial} />
              <h2>Your Sub-Header Goes Here</h2>
              <p>
                There is just enough space here for several lines of text. Use
                it well.
              </p>
            </div>

            <div className="container1">
              <img src={testimonial} />
              <h2>Your Sub-Header Goes Here</h2>
              <p>
                There is just enough space here for several lines of text. Use
                it well.
              </p>
            </div>
          </div>
        </div>
        {/* seventh slide end*/}
      </div>
    </>
  );
}
