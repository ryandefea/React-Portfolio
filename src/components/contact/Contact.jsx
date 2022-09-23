import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineFacebook} from 'react-icons/ai';
import {TbBrandTelegram} from 'react-icons/ai';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Say Hello</h5>
      <h2>Contact Info</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail/>
            <h4>Email</h4>
            <h5>ryan.defea@gmail.com</h5>
            <a href="mailto:ryan.defea@gmail.com">Send an email</a>
          </article>
          <article className="contact__option">
            <AiOutlineFacebook/>
            <h4>Messenger</h4>
            <h5>Ryan DeFea</h5>
            <a href="https://m.me/ryan.defea">Send a message</a>
          </article>
          <article className="contact__option">
            <TbBrandTelegram/>
            <h4>Telegram</h4>
            <h5>Ryan DeFea</h5>
            <a href="">Send a message</a>
          </article>
        </div>
      </div>
      </section>
  )
}

export default Contact;