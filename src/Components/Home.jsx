import React from 'react';
import Guy from "../Assets/umbrellaMan.png";
import Landscape from "../Assets/bkgrnd.png";
import axios from 'axios';
import fileDownload from 'js-file-download';
import {useState} from 'react';

function Home() {

  const [isActive, setIsActive] = useState(false);

  const showFiles = () => {
    setIsActive(current => !current);
  };

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
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: "5",
      };



    return ( 
        <div className="container" style={sectionStyle}>
           <nav>
            <p className='primary-text koulen'><a href="/">Rainy Data</a></p>
            <ul>
                <li className='btn' onClick={showFiles}>Files</li>
            </ul>
        </nav>
        <div className="welcome-text centered">
          <h2 style={{
          display: isActive ? 'none' : 'block',
        }}>About Us</h2>
          <p style={{
          display: isActive ? 'none' : 'block',
        }}>
            Rainy Data is a web-based developer tool that allows developers to download mock JavaScript databases for their projects <br /> These databases can be called upon in a function getDatabase()
            <br />
            <br />
            
            Got a question? Check out our{" "}
            <a href="/" className="primary-text">
              FAQ's
            </a>
            
          </p>
        </div>
        <div className='file--container' style={{
          display: isActive ? 'flex' : 'none',
        }}>
          <button className='file' onClick={(e)=>download(e)}>Film & Book Genres</button>
          <button className='file' onClick={(e)=>download(e)}>Reading List</button>
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