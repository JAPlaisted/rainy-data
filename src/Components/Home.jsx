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
            Rainy Data is a web-based developer tool that allows developers to download mock JavaScript databases for their projects <br /> These databases can be called upon in a function getDatabase()
            <br />
            <br />
            <a href="/" className="primary-text">
              Join the community
            </a>{" "}
            and save those files for a rainy day <br />
            <br />
            Got a question? Check out our{" "}
            <a href="/" className="primary-text">
              FAQ's
            </a>
            
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