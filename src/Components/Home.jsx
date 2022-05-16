import React from 'react';
import Guy from "../Assets/umbrellaMan.png";
import Landscape from "../Assets/bkgrnd.png";

function Home() {

    

    const sectionStyle = {
        backgroundImage: `url(${Landscape})`,
        width: "100vw",
        height: "95vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: "-1",
      };

    return ( 
        <div className="container" style={sectionStyle}>
        <div className="welcome-text centered">
          <h2>About Us</h2>
          <p>
            Rainy Data is a fun, free data storage solution. It's a web-based
            application that allows you to upload files to store and use at a
            later time. <br /> Access your files, homework, resume, audio,
            video, etc, anywhere you have access to the internet.
            <br />
            <br />
            <a href="/" className="primary-text">
              Join the community
            </a>{" "}
            and save those files for a rainy day. <br />
            <br />
            Got a question? Check our or{" "}
            <a href="/" className="primary-text">
              FAQ's
            </a>
            .
          </p>
        </div>
        <img
          className="guy"
          src={Guy}
          alt="guy with umbrella"
          width="300px"
          height="300px"
        />
      </div>
     );
}

export default Home;