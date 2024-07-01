import React from 'react';
import './backgroundVideo.css';

import videoSource from '../../video/video_header.mp4';
import Header from '../Layout/Header/Header';
import { useLocation } from 'react-router-dom';

const BackgroundVideo = ({ setRefs }) => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className="background-video">
      <video autoPlay muted loop className="video">
        <source src={videoSource} type="video/mp4" />
        Ваш браузер не поддерживает тег video.
      </video>
      <div className="overlay"></div> 
      {isHomePage && <Header />}
      <div className="content">
        <div className="child-itemCont">
          <h1 className="anim" ref={setRefs}>
            Quality Digital Services You Really Need!
          </h1>
          <p>
            We build and transform businesses by launching market-leading
            digital products, platforms, and experiences that fuel their growth.
          </p>
          <div>
            <button>Explore Our Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
