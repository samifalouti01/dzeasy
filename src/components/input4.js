import React, { useState } from 'react';
import generateHTML from './template4';
import './Sub.css';
import TypingEffect from './TypingEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Input4 = () => { 
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
      const typingSpeed = 100; 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleNextStep = () => {
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
          const response = await fetch('https://script.google.com/macros/s/AKfycbxynClTmz4Sls2x2Xv5mrCthS8cZwSpZROV0y3Dan5mmEPAFOOeAEbq0bjAEnsbsh1_Xw/exec', {
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

return (
        <div className="row">

        <form className="submission-form" onSubmit={handleSubmit}>
        <h2><TypingEffect text={textToType} speed={typingSpeed} /></h2>

        {currentStep === 0 && (
        <>
        <input
          style={{ marginBottom: '20px', direction: 'rtl' }}
          type="text"
          name="username"
          placeholder="اسم المستخدم للمتجر. مثال: dzstore"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
        </>
        )}

        {currentStep > 0 && (
        <>
        {currentStep === 1 && (
        <div className="input-with-button">
          <input
            style={{ paddingRight: '80px', direction: 'rtl' }}
            type="text"
            name="logoUrl"
            placeholder="رابط شعار المتجر"
            value={formData.logoUrl}
            onChange={handleChange}
            required
          />
          {currentStep < 2 && (
            <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
          )}
        </div>
        )}
        {currentStep === 2 && (
        <div className="input-with-button">
          <input
            style={{ paddingRight: '80px', direction: 'rtl' }}
            type="text"
            name="name"
            placeholder="مثال على اسم المتجر: Dz Store"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {currentStep < 3 && (
            <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
          )}
        </div>
        )}
        {currentStep === 3 && (
        <div className="input-with-button">
          <input
            style={{ paddingRight: '80px', direction: 'rtl' }}
            type="text"
            name="title"
            placeholder="عنوان المنتج"
            value={formData.title}
            onChange={handleChange}
            required
          />
          {currentStep < 4 && (
            <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
          )}
        </div>
        )}
        {currentStep === 4 && (
        <div className="input-with-button">
          <input
            style={{ paddingRight: '80px', direction: 'rtl' }}
            type="text"
            name="subtitle"
            placeholder="عنوان فرعي للمنتج"
            value={formData.subtitle}
            onChange={handleChange}
            required
          />
          {currentStep < 5 && (
            <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
          )}
        </div>
        )}
        {currentStep === 5 && (
          <div className="input-with-button">
          <input
            style={{ paddingRight: '80px', direction: 'rtl' }}
            type="text"
            name="price"
            placeholder="السعر"
            value={formData.price}
            onChange={handleChange}
            required
          />
          {currentStep < 6 && (
            <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
          )}
        </div>
        )}
        {currentStep === 6 && (
        <div className="input-with-button">
          <input
            style={{ paddingRight: '80px', direction: 'rtl' }}
            type="text"
            name="Product"
            placeholder="رابط الصورة الاولى للمنتج"
            value={formData.Product}
            onChange={handleChange}
            required
          />
          {currentStep < 7 && (
            <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
          )}
        </div>
        )}
        {currentStep === 7 && (
        <div className="input-with-button">
          <input
            style={{ paddingRight: '80px', direction: 'rtl' }}
            type="text"
            name="description"
            placeholder="وصف المنتج"
            value={formData.description}
            onChange={handleChange}
            required
          />
          {currentStep < 8 && (
            <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
          )}
        </div>
        )}
        {currentStep === 8 && (
        <div className="input-with-button">
          <input
            style={{ paddingRight: '80px', direction: 'rtl' }}
            type="text"
            name="descriptionImage1"
            placeholder="رابط الصورة الثانية للمنتج"
            value={formData.descriptionImage1}
            onChange={handleChange}
          />
          {currentStep < 9 && (
            <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
          )}
        </div>
        )}
        {currentStep === 9 && (
        <div className="input-with-button">
          <input
            style={{ paddingRight: '80px', direction: 'rtl' }}
            type="text"
            name="descriptionImage2"
            placeholder="رابط الصورة الثالثة للمنتج"
            value={formData.descriptionImage2}
            onChange={handleChange}
          />
          {currentStep < 10 && (
            <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
          )}
        </div>
        )}
        {currentStep === 10 && (
        <div className="input-with-button">
          <input
            style={{ paddingRight: '80px', direction: 'rtl' }}
            type="text"
            name="facebookUrl"
            placeholder="رابط الفيس بوك"
            value={formData.facebookUrl}
            onChange={handleChange}
          />
          {currentStep < 11 && (
            <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
          )}
        </div>
        )}
        {currentStep === 11 && (
        <div className="input-with-button">
          <input
            style={{ paddingRight: '80px', direction: 'rtl' }}
            type="text"
            name="whatsApp"
            placeholder="واتساب مثال: 0549194826"
            value={formData.whatsApp}
            onChange={handleChange}
          />
          {currentStep < 12 && (
            <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
          )}
        </div>
        )}
        {currentStep === 12 && (
        <div className="input-with-button">
          <input
            style={{ paddingRight: '80px', direction: 'rtl' }}
            type="email"
            name="email"
            placeholder="مثال Email: dzeasy@outlook.com"
            value={formData.email}
            onChange={handleChange}
          />
          {currentStep < 13 && (
            <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
          )}
        </div>
        )}
        {currentStep === 13 && (
        <div className="input-with-button">
          <input
            style={{ paddingRight: '80px', direction: 'rtl' }}
            type="text"
            name="storeUrl"
            placeholder="رابط متجرك"
            value={formData.storeUrl}
            onChange={handleChange}
          />
          {currentStep < 14 && (
            <button type="button" onClick={handleNextStep}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
          )}
        </div>
        )}
        {currentStep === 14 && (
        <div className="input-with-button">
          <input
            style={{ paddingRight: '80px', direction: 'rtl' }}
            type="text"
            name="sheet"
            placeholder="Google Sheet Api link"
            value={formData.sheet}
            onChange={handleChange}
          />
        </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexDirection: 'row' }}>
          {currentStep > 0 && (
            <button style={{ width: '120px', marginRight: '20px', backgroundColor: 'transparent', color: '#a1a1a1' }} type="button" onClick={handlePreviousStep}><FontAwesomeIcon icon={faArrowLeft} /> Previous</button>
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

      </div>
);
};

export default Input4; 
