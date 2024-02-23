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
<div className='Footer_box' style={{ 
  backgroundImage: `url(${Footer_img})`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}}>

 
        <div className='Footer_col1'>
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className='logo-name' style={{ fontFamily: 'YourSpecificFont, sans-serif', fontWeight: 'bold' ,fontSize: '2rem'}}>
  INVITE<span className='ai'>KARO</span>
</p>

          <ul>
            <h4 style={{fontSize: '2rem',fontWeight: 'bold',color: 'gray'}}>Contact Us</h4>
            <li style={{color: 'GrayText'}}>Email: example@example.com</li>
            <li  style={{color: 'GrayText'}}>Phone: +1 (123) 456-7890</li>
          </ul>
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
Welcome to InviteKaro, where we create personalized video invitations to make your special moments unforgettable. With creativity and dedication, we'll capture the essence of your occasion, ensuring a truly memorable event for you and your guests.
</p>

        </div>
      </div>
   
    </div>
  );
}

export default Footer;
