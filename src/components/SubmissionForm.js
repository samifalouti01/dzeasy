import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import generateHTML from './template';
import './Sub.css';
import data from './data.json';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import TypingEffect from './TypingEffect';

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    code: '',
    logoUrl: '',
    title: '',
    subtitle: '',
    price: '',
    Product: '',
    description: '',
    descriptionImage1: '',
    descriptionImage2: '',
    facebookUrl: '',
    whatsApp: '',
    email: '',
    storeUrl: '',
    sheet: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedLink, setGeneratedLink] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const textToType = "Addd your details and take your landing page in 2 seconds";
  const typingSpeed = 100; // Speed in milliseconds
  const codeSnippet = `function doPost(e) { 
    var sheet = SpreadsheetApp.openById('Add your Sheet ID here e.g: 1mHXP6VnLTwmtigt3_a3MuTr0tOISEDeH0jYcRT34Jl4').getActiveSheet();
    var rowData = [];
    
    rowData.push(e.parameter.name);
    rowData.push(e.parameter.phone);
    rowData.push(e.parameter.wilaya);
    rowData.push(e.parameter.comune);
    
    sheet.appendRow(rowData);
    return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
  }`;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (currentStep === 0) {
      const userAuthorized = data.some(
        (entry) => entry.username === formData.username && entry.code === formData.code
      );

      if (!userAuthorized) {
        setErrorMessage("You don’t have access to this feature.");
        setShowPopup(true);
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const htmlContent = generateHTML(formData);
    const dataToSend = new URLSearchParams({
      username: formData.username,
      html: htmlContent,
    });

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyaFCnWqohHDVH91zMr91LLHgSiaWx3uDD10TtOwaH08k6NlbQSVvNjjY3pnWonITOv/exec', {
        method: 'POST',
        body: dataToSend,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      const result = await response.text();
      if (result === 'Success') {
        setGeneratedLink(`https://dzeasy.netlify.app/${formData.username}/index.html`);
        setShowPopup(true);
      } else {
        setErrorMessage("There was an error creating the page.");
      }
    } catch (error) {
      setErrorMessage("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false); 
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    alert("Link copied to clipboard!");
  };

  const closePopup = () => {
    setShowPopup(false);
    setGeneratedLink('');
    setErrorMessage('');
  };

  const copyCodeSnippet = () => {
    navigator.clipboard.writeText(codeSnippet)
      .then(() => {
        alert('Code snippet copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy code snippet: ', err);
      });
  };

  return (
    <div>
      <header className="header">
        <div className="logo"><img style={{ width: '50px' }} src="logo.svg" alt="logo" /></div>
        <nav>
          <a href="https://wa.me/213549194814" target="_blank" rel="noreferrer noopener">Get Code</a>
          <a href="https://dzeasy.netlify.app/template/index.html" target="_blank" rel="noreferrer noopener">Templates</a>
          <a href="/customtemplate" target="_blank" rel="noreferrer noopener">Custom Template</a>
        </nav>
      </header>

      <div className="row">
        <img src="robot.svg" alt='RBT'></img>

        <form className="submission-form" onSubmit={handleSubmit}>
        <h2><TypingEffect text={textToType} speed={typingSpeed} /></h2>

        {currentStep === 0 && (
        <>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="code"
          placeholder="Code"
          value={formData.code}
          onChange={handleChange}
          required
        />
        <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
        </>
        )}

        {currentStep > 0 && (
        <>
        {currentStep === 1 && (
          <input
            type="text"
            name="logoUrl"
            placeholder="Logo Url"
            value={formData.logoUrl}
            onChange={handleChange}
            required
          />
        )}
        {currentStep === 2 && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        {currentStep === 3 && (
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        )}
        {currentStep === 4 && (
          <input
            type="text"
            name="subtitle"
            placeholder="Subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            required
          />
        )}
        {currentStep === 5 && (
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        )}
        {currentStep === 6 && (
          <input
            type="text"
            name="Product"
            placeholder="Product Image URL"
            value={formData.Product}
            onChange={handleChange}
            required
          />
        )}
        {currentStep === 7 && (
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        )}
        {currentStep === 8 && (
          <input
            type="text"
            name="descriptionImage1"
            placeholder="Image 1"
            value={formData.descriptionImage1}
            onChange={handleChange}
          />
        )}
        {currentStep === 9 && (
          <input
            type="text"
            name="descriptionImage2"
            placeholder="Image 2"
            value={formData.descriptionImage2}
            onChange={handleChange}
          />
        )}
        {currentStep === 10 && (
          <input
            type="text"
            name="facebookUrl"
            placeholder="Facebook Url"
            value={formData.facebookUrl}
            onChange={handleChange}
          />
        )}
        {currentStep === 11 && (
          <input
            type="text"
            name="whatsApp"
            placeholder="WhatsApp"
            value={formData.whatsApp}
            onChange={handleChange}
          />
        )}
        {currentStep === 12 && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        )}
        {currentStep === 13 && (
          <input
            type="text"
            name="storeUrl"
            placeholder="Store URL"
            value={formData.storeUrl}
            onChange={handleChange}
          />
        )}
        {currentStep === 14 && (
          <input
            type="text"
            name="sheet"
            placeholder="Google Sheet URL"
            value={formData.sheet}
            onChange={handleChange}
          />
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexDirection: 'row' }}>
          {currentStep > 0 && (
            <button style={{ width: '120px', marginRight: '20px'}} type="button" onClick={handlePreviousStep}><FontAwesomeIcon icon={faArrowLeft} /> Previous</button>
          )}
          
          {currentStep < 14 && (
            <button style={{ width: '120px' }} type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
          )}
        </div>
        </>
        )}

        {currentStep === 14 && (
        <button type="submit" style={{ height: '50px' }}>
        Generate Link
        <span className={isSubmitting ? 'ellipsis' : ''}></span>
        <img
        src="ai.svg"
        alt="svg"
        style={{ width: '24px' }}
        className={isSubmitting ? 'flicker' : ''}
        />
        </button>
        )}
        </form>

        {showPopup && (
          <div className="popup">
            <button className="close" onClick={closePopup}>X</button>
            {generatedLink ? (
              <>
                <img className="success-image" src="https://media.giphy.com/media/KBxyo8FDKE33qnj3KB/giphy.gif?cid=790b7611uzgyggwxpy60993z7sh4g3rcpyo8sqns4pi0iuea&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Success" />
                <h3>Congratulations, Your landing page is live</h3>
                <div>
                  <input
                    type="text"
                    value={generatedLink}
                    readOnly
                    style={{ width: '70%' }} 
                  />
                  <button onClick={copyLink}>Copy</button>
                </div>
              </>
            ) : (
              <p>{errorMessage}</p>
            )}
          </div>
        )}

        <img src="generator.svg" alt='RBT'></img>
      </div>

      <div
          className="details"
          style={{
            backgroundColor: '#0f0f0f',
            border: '2px solid #333',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            margin: '20px auto',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <div className="documents">
            <h2><FontAwesomeIcon icon={faFileLines} /> Docs</h2>
            <h3>Step 1: Go to <a href="https://docs.google.com/spreadsheets" rel="noreferrer noopener">Google sheet</a> and Click "New Sheet"</h3>
            <img src="img/1.jpg" alt="Step1" />
            <h3>Step 2: Click "Extensions" and then "Apps Script"</h3>
            <img src="img/2.jpg" alt="Step2" />
            <img src="img/3.jpg" alt="Step2" />
            <h3>Step 3: Paste the code below in Code.gs and add your Sheet ID</h3>
            <img src="img/4.jpg" alt="Step3" />
        </div>
          <h1 style={{ color: '#fafafa', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
            Google Sheet AppScript Code snippet
          </h1>
          <h3 style={{ color: '#d3d3d3', direction: 'rtl'}}>مقتطف من كود AppScript الخاص بـ Google Sheet</h3>
          <div className="code-snippet" style={{ marginTop: '20px' }}>
            <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Copy this Code</h3>
            <SyntaxHighlighter language="javascript" style={coy}>
              {codeSnippet}
            </SyntaxHighlighter>
            <button
              onClick={copyCodeSnippet}
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                marginTop: '10px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Copy Code
            </button>
          </div>
          <div className="documents">
            <h3>Sheet ID:</h3>
            <img src="img/5.jpg" alt="Step4" />
            <h3>Step 4: Click "Deploy" and choose "New deployment"</h3>
            <img src="img/6.jpg" alt="Step5" />
            <img src="img/7.jpg" alt="Step5" />
            <h3>Step 5: Click on Settings Icon, and choose "Web app"</h3>
            <img src="img/8.jpg" alt="Step6" />
            <img src="img/9.jpg" alt="Step6" />
            <h3>Step 6: Change "Only myself", Click on it and choose "Anyone"</h3>
            <img src="img/10.jpg" alt="Step7" />
            <img src="img/11.jpg" alt="Step7" />
            <h3>Step 7: Click "Deploy"</h3>
            <img src="img/12.jpg" alt="Step8" />
            <h3>Step 8: Authorize access and choose your email</h3>
            <img src="img/13.jpg" alt="Step9" />
            <h3>Step 9: Click "Advanced"</h3>
            <img src="img/14.jpg" alt="Step10" />
            <h3>Step 10: Click "Go to Untitled project (unsafe)"</h3>
            <img src="img/15.jpg" alt="Step11" />
            <h3>Step 11: Click "Allow"</h3>
            <img src="img/16.jpg" alt="Step12" />
            <h3>Step 12: Copy the URL and paste it in the field when you want to generate your landing page</h3>
            <img src="img/17.jpg" alt="Step13" />
        </div>
        </div>
        <iframe src="https://docs.google.com/spreadsheets/d/1mHXP6VnLTwmtigt3_a3MuTr0tOISEDeH0jYcRT34Jl4/edit?usp=sharing" style={{ width: '100%', minHeight: '500px', borderRadius: '20px', height: 'auto', border: 'none' }} title="Unique Title"></iframe>

      <footer className="footer">
        <div className="logo"><img style={{ width: '100px' }} src="logo.svg" alt='logo'></img></div>
        <nav>
          <a href="https://dzeasy.netlify.app/privacy-policy/index.html" target="_blank" rel="noreferrer noopener">Privacy Policy</a>
          <a href="https://dzeasy.netlify.app/terms-of-service/index.html" target="_blank" rel="noreferrer noopener">Terms of Service</a>
        </nav>
        <div className="contact-info">
          <p>
            <a href="mailto:dzeasy@outlook.com" style={{margin: '0, 10px', textDecoration: 'none', color: '#1117aa'}}>
              Email: dzeasy@outlook.com |
            </a>
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
