import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
<<<<<<< HEAD
import { GrLinkedinOption } from 'react-icons/gr';

const SocialMedia = () => (
  <div className="app__social">
=======

const SocialMedia = () => (
  <div className="app__social">
    {/* <div>
      <BsTwitter />
    </div> */}
    <div>
      <a href='https://www.facebook.com/nikhiljatale' target='_blank' rel='auther'>
        <FaFacebookF />
      </a>
    </div>
>>>>>>> 58be3b803b0202b52abeb32a061277628cd57ab3
    <div>
      <a href='https://www.instagram.com/njtales/' target='_blank' rel='auther'>
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/nikhil-jatale/' target='_blank' rel='auther'>
<<<<<<< HEAD
        <GrLinkedinOption /> 
=======
        <BsLinkedin /> 
>>>>>>> 58be3b803b0202b52abeb32a061277628cd57ab3
      </a>      
    </div>
    <div>
      <a href='https://github.com/Njtales' target='_blank' rel='auther'>
        <BsGithub />
      </a>
    </div>
    
  </div>
);

export default SocialMedia;
