import React, { useState } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
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
      <h2 className="head-text">Let's have a chat. </h2>
        <div className="app__footer-left_img">
          <img src={images.footerleft} alt="email"/>
          
        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <img src={images.email} alt="email" />
            <a href="mailto:hello@njtales.com" className="p-text">hello@njtales.com</a>
          </div>
          <div className="app__footer-card">
            <img src={images.whatsapp} alt="phone" />
            <a href="https://wa.me/447826343049" target='_blank' rel='noreferrer' className="p-text">+44 7826343049</a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <a href="tel:+44 7826343049" className="p-text">+44 (0) 7826343049</a>
          </div>
        </div>
      </div>      
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);
