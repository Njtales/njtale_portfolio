import React, { useState } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import { SiMinutemailer } from 'react-icons/si';
import { RiWhatsappFill } from 'react-icons/ri';
import { GiRotaryPhone } from 'react-icons/gi';
import { GrLinkedinOption } from 'react-icons/gr';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
        <div className="app__footer-left_img">
          <img src={images.contact_me} alt="contact_me" id="large-screen-image" />
          <img src={images.contact_me90} alt="contact_me90" id="small-screen-image" />
          <div className="contact_head-text">Let's talk!</div>
          <div className="app__footer-cards">
            <div className="app__footer-card">
              <div className='contact-icon'>
                <SiMinutemailer />
              </div>
              <div className="contact-text">Email Me:</div>
              <a href="mailto:nikhiljatale@gmail.com" className="p-text">nikhiljatale@gmail.com</a>
            </div>

            <div className="app__footer-card">
              <div className='contact-icon'>
                <RiWhatsappFill />
              </div>
              <div className="contact-text">WhatsApp Msg:</div>
              <a href="https://wa.me/447826343049" target='_blank' rel='noreferrer' className="p-text">+44 7826343049</a>
            </div>

            <div className="app__footer-card">
              <div className='contact-icon'>
                <GiRotaryPhone />
              </div>
              <div className="contact-text">Phone Me:</div>
              <a href="tel:+44 7826343049" className="p-text">+44 (0) 7826343049</a>
            </div>
          </div>

          <div className="contact_hireme">
            <a href="https://www.linkedin.com/in/nikhil-jatale/" target="_blank" rel="noopener noreferrer">
              <button>Hire Me</button>
            </a>
          </div>
        </div>
        <div className="app__footer-uparrow">
          <a href='#home'>
            <BiUpArrowAlt />
          </a>
        </div>

    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);
