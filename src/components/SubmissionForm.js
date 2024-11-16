import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Sub.css';
import Details from './details';
import Sheet from './sheet';
const SubmissionForm = () => {

  return (
    <div>
      <header className="header">
        <div className="logo"><img src="DZLogo1.svg" alt="logo" /></div>
        <nav className="navi">
          <a style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'center', flexDirection: 'column' }} href="https://dzeasy.netlify.app/template/index.html" target="_blank" rel="noreferrer noopener"><img src="Template.svg" alt="Templates" />Templates</a>
          <a style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'center', flexDirection: 'column' }} href="/custom-code" target="_blank" rel="noreferrer noopener"><img src="Custom.svg" alt="Custom Code" />Custom Code</a>
        </nav>
      </header>
      <div className="video-container">
      <h2>شاهد الفيديو التوضيحي</h2>
        <div className="video-frame">
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F3svvEy7qLQ?start=5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>
        </div>

      <div className="selected">
        <a href="/premium">
          <button className="btn">ابدأ</button>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', border: '2px solid rgb(255, 102, 102)', color: 'rgb(255, 102, 102)', backgroundColor: 'rgba(255, 102, 102, 0.3)', padding: '10px', width: '90%' }}> ستنتهي صلاحية كل صفحة هبوط خلال شهر واحد </div>
      </div>

      <Details />
        
      <Sheet />

      <footer className="footer">
        <div className="logo"><img style={{ width: '80px' }} src="DZLogo1.svg" alt='logo'></img></div>
        <nav>
          <a href="https://dzeasy.netlify.app/privacy-policy/index.html" target="_blank" rel="noreferrer noopener">Privacy Policy</a>
          <a href="https://dzeasy.netlify.app/terms-of-service/index.html" target="_blank" rel="noreferrer noopener">Terms of Service</a>
        </nav>
        <div className="contact-info">
          <p>
            <a href="mailto:dzeasy@outlook.com" style={{margin: '0, 10px', textDecoration: 'none', color: '#1117aa'}}>
              Email: dzeasy@outlook.com |
            </a>
            <br />
             | Phone: +(213) 549 19 48 14
          </p>
        </div>
        <div className="social-media">
          <a href="#facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} DzEasy. All rights reserved.</p>
      </footer>

      <a 
        href="https://wa.me/213549194814" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-button"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default SubmissionForm;
