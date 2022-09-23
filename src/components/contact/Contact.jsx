import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineFacebook} from 'react-icons/ai';
import {TbBrandTelegram} from 'react-icons/tb';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Say Hello</h5>
      <h2>Contact Info</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>ryan.defea@gmail.com</h5>
            <a href="mailto:ryan.defea@gmail.com" target=" _blank">Send an email</a>
          </article>
          <article className="contact__option">
            <AiOutlineFacebook className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Ryan DeFea</h5>
            <a href="https://m.me/ryan.defea" target=" _blank">Send a message</a>
          </article>
          <article className="contact__option">
            <TbBrandTelegram className="contact__option-icon"/>
            <h4>Telegram</h4>
            <h5>Ryan DeFea</h5>
            <a href="https://t.me/flyinryan_d" target=" _blank">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn'>Send Message</button>
        </form>
      </div>
      </section>
  )
}

export default Contact;