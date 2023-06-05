import React from 'react';

import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <div className='header-aboutsection'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="tag-cmp app__flex">
          <div className="badge-cmp app__flex">
           
            <p> <span>👋</span>Hi, I'm 
              <div className='name'>
                NIKHIL JATALE
              </div></p>
            </div>
          </div>
          
        </div>
      </motion.div>
      <div className="header-text">
        {/* <h2>I am a motivated Software Developer/Data Analyst with experience in analyzing and finding hidden insights in the data, visualizing reports, and building prediction models.<br/>
        <br/>Skilled in machine learning, ETL, data visualization, problem-solving, and programming.</h2> */}
        <h2>Experienced Software Developer/Data Analyst skilled in machine learning, ETL, data visualization,<br/>
        and problem-solving with a passion for analyzing data and building predictive models.</h2>
      </div>

      <div>
        <div>
          {/* hire me, insert a button if want to */}
        </div>
        <div className="CVdownload-button">
          {/* <a href = "https://drive.google.com/u/0/uc?id=1oQXOvUxxXuw3HDeYPkoZB_3RiSCh0PTb&export=download">  */}
          {/* 1 page CV */}


          <a href = "https://drive.google.com/u/0/uc?id=1YwPuxGEzm6mlPcE4wgCqpyEDgawf_SOR&export=download">  
          {/* 2 page resume */}
            <button type='submit'>
              DOWNLOAD RESUME
            </button>
          </a>
        </div>
      </div>

      
    </div>
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      {/* <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      /> */}
    </motion.div>
  </div>
);

// export default AppWrap(Header, 'home');

export default AppWrap(
  MotionWrap(Header, 'home'),
  'home',
  'app__primarybg',
);

