import React, { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import Guy from "../Assets/umbrellaMan.png";
import axios from "axios";
import * as fileDownload from 'js-file-download';
import $ from "jquery";

function Home() {
  const [isActive, setIsActive] = useState(false);

  const showFiles = () => {
    setIsActive((current) => !current);
  };

  let fileLabel = !isActive ? "Files" : "Hide";

  const download=(e)=>{
    e.preventDefault()
    axios({
      url:"https://calm-figolla-4ac6c5.netlify.app/",
      method:"GET",
      responseType:"blob"
    }).then((res)=>{
      fileDownload(res.data, "fakeGenreService.js");
    })
  }

  const download2=(e)=>{
    e.preventDefault()
    axios({
      url:"https://calm-figolla-4ac6c5.netlify.app/",
      method:"GET",
      responseType:"blob"
    }).then((res2)=>{
      fileDownload(res2.data, "fakeReadingService.js");
    })
  }

  const sectionStyle = {
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: "5",
  };

  useEffect(() => {
  var makeItRain = function() {
    //clear out everything
    $('.rain').empty();
  
    var increment = 0;
    var drops = "";
    var backDrops = "";
  
    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      //random number between 5 and 2
      var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
      backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }
  
    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
  }
  
  makeItRain();
}, []);

  return (
    <section className="container" style={sectionStyle}>
      <nav>
        <p className="primary-text koulen">
          <a href="/">Rainy Data</a>
        </p>
        <ul>
          <li className="btn" onClick={showFiles}>
            {fileLabel}
          </li>
        </ul>
      </nav>
      <div className='file--container' style={{
          display: isActive ? 'flex' : 'none',
        }}>
          <button className='file' onClick={(e)=>download(e)}>Film & Book Genres</button>
          <button className='file' onClick={(e)=>download2(e)}>Reading List</button>
        </div>
      <div className="rain front-row"></div>
      <div className="rain back-row"></div>
      <div className="welcome-text centered"> 
        <h2 style={{ display: isActive ? "none" : "block" }}>About Us</h2>
        <p style={{ display: isActive ? "none" : "block" }}>
          Rainy Data is a web-based developer tool that allows developers to
          download mock JavaScript databases for their projects <br /> These
          databases can be called upon in a function getDatabase() <br />
          <br />
          Got a question? Check out our{" "}
          <HashLink to="/faq" className="primary-text">
            FAQ's
          </HashLink>
        </p>
      </div>
        <img
          className="guy"
          src={Guy}
          alt="guy with umbrella"
        />
        <div></div>
      </section>
     );
}

export default Home;