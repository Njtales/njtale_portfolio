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
<<<<<<< HEAD
          
    <div className='header-aboutsection'>
    
=======
    <div className='header-aboutsection'>
>>>>>>> 58be3b803b0202b52abeb32a061277628cd57ab3
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
<<<<<<< HEAD
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
              {/* <h2>Experienced Software Developer/Data Analyst skilled in machine learning, ETL, data visualization,<br/>
              and problem-solving with a passion for analyzing data and building predictive models.</h2> */}
              <h2>Unleashing the Power of Data Engineering:<br/> Crafting Insights, Connecting and Building Predictive Dreams</h2>
            </div>

        <div className="button-container">
          <div className="CVdownload-button">
            <a href="https://drive.google.com/u/0/uc?id=1v6lpKpo-esftMuiMv0zswe5ay1B8o3f_&export=download">
              <button type='submit'>
                DOWNLOAD CV
              </button>
            </a>
          </div>

          <div className="hireme-button">
            <a href="#contact">
              <button type='submit'>
                HIRE ME
              </button>
            </a>
          </div>
        </div>
      <div className="topleft_blob">

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
        >
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          src={images.blob_b02}
          alt="blob_b02"
          className="topleft_blob"
        />
      </motion.div>
      </div>
    </div>

    <motion.div
      className="app__header-img"
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}    
      >
      <img src={images.profile} alt="profile_bg"/>
      
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.blob_y09}
        alt="profile_circle"
        className="overlay_blob"
      />

    </motion.div>
  </div>
  
);

=======
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

>>>>>>> 58be3b803b0202b52abeb32a061277628cd57ab3
export default AppWrap(
  MotionWrap(Header, 'home'),
  'home',
  'app__primarybg',
);
<<<<<<< HEAD
=======

>>>>>>> 58be3b803b0202b52abeb32a061277628cd57ab3
