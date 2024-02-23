import React from 'react';
import './Footer.css'; // Replace with the correct path to your CSS file
import logo from '../assets/Footer/icon.png'
import facebook from '../assets/Footer/facebook.png'
import insta from '../assets/Footer/insta.png'
import twitter from '../assets/Footer/twitter.png'
import youtube from '../assets/Footer/youtube.png'
import Footer_img from '../assets/Footer/bg_Footer.png'

function Footer() {
  return (
    <div>
     <div className='Footer_box' style={{ backgroundImage: `url(${Footer_img})`, backgroundSize: 'contain' }}>
 
        <div className='Footer_col1'>
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className='logo-name' style={{ fontFamily: 'YourSpecificFont, sans-serif', fontWeight: 'bold' ,fontSize: '2rem'}}>
  INVITE<span className='ai'>KARO</span>
</p>
 <div className='Footer_row'>
        <div className="wrapper">
          <a href="https://www.facebook.com/" className="icon facebook" target="_blank" rel="noopener noreferrer">
            <div className="tooltip">Facebook</div>
            <span><img className="contact-icons" src={facebook} alt="Facebook" /></span>
          </a>
          <a href="https://twitter.com/" className="icon twitter" target="_blank" rel="noopener noreferrer">
            <span><img className="contact-icons" src={twitter} alt="Twitter" /></span>
            <div className="tooltip">Twitter</div>
          </a>
          <a href="https://www.instagram.com/" className="icon instagram" target="_blank" rel="noopener noreferrer">
            <div className="tooltip">Instagram</div>
            <span><img className="contact-icons" src={insta} alt="Instagram" /></span>
          </a>
          <a href="https://www.youtube.com/" className="icon youtube" target="_blank" rel="noopener noreferrer">
            <div className="tooltip">Youtube</div>
            <span><img className="contact-icons" src={youtube} alt="YouTube" /></span>
          </a>
        </div>
      </div>
          <ul>
            <h4 style={{fontSize: '2rem',fontWeight: 'bold',color: 'gray'}}>Contact Us</h4>
            <li style={{color: 'GrayText'}}>Email: example@example.com</li>
            <li  style={{color: 'GrayText'}}>Phone: +1 (123) 456-7890</li>
          </ul>
        </div>

        <div className='Footer_col3'>
        <ul style={{ fontWeight: 'bold', fontSize: '2rem',color: 'gray' }}>Quick Links</ul>
<ul style={{fontSize:'1.5rem', fontWeight: 'bold' }}>Home</ul>
<ul style={{ fontSize:'1.5rem',fontWeight: 'bold' }}>Wedding</ul>
<ul style={{ fontSize:'1.5rem',fontWeight: 'bold' }}>Birthday</ul>
<ul style={{ fontSize:'1.5rem',fontWeight: 'bold' }}>Reception</ul>

        </div>
        <div className='Footer_col2'>
        <h4 style={{ fontWeight: 'bold', fontSize: '2rem',color: 'gray' }}>About Us</h4>
<p style={{ letterSpacing: '2px' ,wordSpacing: '7px',fontSize: '1.2rem'}}>
"Welcome to InviteKaro, your premier destination for creating exquisite video invitations that elevate your special moments to unforgettable experiences. At [Company Name], we understand the significance of every celebration, whether it's a joyous wedding, a milestone birthday, a heartwarming baby shower, or any other cherished event. With our passion for creativity and dedication to excellence, we specialize in crafting personalized video invitations that reflect your unique style and capture the essence of your occasion. Let us help you transform your vision into a stunning reality, making your event truly memorable for you and your guests.
</p>

        </div>
      </div>
   
    </div>
  );
}

export default Footer;
