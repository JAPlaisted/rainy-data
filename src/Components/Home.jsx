import React from 'react';
import Guy from "../Assets/umbrellaMan.png";
import Landscape from "../Assets/bkgrnd.png";
import axios from 'axios';
import fileDownload from 'js-file-download';

function Home() {

  const download=(e)=>{
    e.preventDefault()
    axios({
      url:"http://localhost:4000",
      method:"GET",
      responseType:"blob"
    }).then((res)=>{
      console.log(res);
      fileDownload(res.data, "db.js");
    })
  }

    const sectionStyle = {
        backgroundImage: `url(${Landscape})`,
        width: "100vw",
        height: "95vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: "5",
      };

    return ( 
        <div className="container" style={sectionStyle}>
        <div className="welcome-text centered">
          <h2>About Us</h2>
          <p>
            Rainy Data is a web-based developer tool that allows developers to download mock JavaScript databases for their projects <br /> These databases can be called upon in a function getDatabase()
            <br />
            <br />
            
            Got a question? Check out our{" "}
            <a href="/" className="primary-text">
              FAQ's
            </a>
            
          </p>
        </div>
        <div>
          <button className='btn' onClick={(e)=>download(e)}>Download</button>
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