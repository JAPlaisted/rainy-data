import React from 'react';
import Guy from "../Assets/umbrellaMan.png";
import Landscape from "../Assets/bkgrnd.png";
import $ from "jquery";

function Home() {

    const makeItRain = function() {

        $('.rain').empty();
      
        let increment = 0;
        let drops = "";
        let backDrops = "";
      
        while (increment < 100) {
          //couple random numbers to use for various randomizations
          //random number between 98 and 1
          const randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));

          const randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));

          increment += randoFiver;
          //add in a new raindrop with various randomizations to certain CSS properties
          drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
          backDrops += '<div class="drop" style="right: ' + increment  + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        }
      
        $('.rain.front-row').append(drops);
        $('.rain.back-row').append(backDrops);
      }
      
      makeItRain();

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
        />
        <div className="rain front-row"></div>
        <div className="rain back-row"></div>
      </div>
     );
}

export default Home;