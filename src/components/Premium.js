import React, { useState } from 'react';
import Input3 from './input3';
import Input4 from './input4';

const Premium = () => {
    const [selectedInput, setSelectedInput] = useState(null);

    const handleChooseClick = (inputType) => {
        setSelectedInput(inputType);
      };

    return (
        <div>
            <header className="header">
                <div className="logo"><a href="/"><img src="DZLogo1.svg" alt="logo" /></a></div>
                <nav className="navi">
                    <a style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'center', flexDirection: 'column' }} href="https://dzeasy.netlify.app/template/index.html" target="_blank" rel="noreferrer noopener"><img src="Template.svg" alt="Templates" />Templates</a>
                    <a style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'center', flexDirection: 'column' }} href="/custom-code" target="_blank" rel="noreferrer noopener"><img src="Custom.svg" alt="Custom Code" />Custom Code</a>
                </nav>
            </header>

            <div className="selectede">
            <label style={{ display: 'flex', textAlign: 'center', alignItems: 'center', gap: '5px', justifyContent: 'center', flexDirection: 'column' }}>
            <img src="https://res.cloudinary.com/dgqpkdeld/image/upload/v1730594940/dzeasy.netlify.app_template_index.html_iPad_Mini_rxggao.png" alt="template" />
            <input
                type="radio"
                name="inputChoice"
                onChange={() => handleChooseClick('input3')}
            /> 
            </label>
            {selectedInput === 'input3' && <Input3 />}
            <label style={{ display: 'flex', textAlign: 'center', alignItems: 'center', gap: '5px', justifyContent: 'center', flexDirection: 'column' }}>
            <img src="https://res.cloudinary.com/dgqpkdeld/image/upload/v1731028409/dzeasy.netlify.app_mysportie2_index.html_iPad_Mini_t9mhf0.png" alt="template" />
            <input
                type="radio"
                name="inputChoice"
                onChange={() => handleChooseClick('input4')}
            /> 
            </label>
            {selectedInput === 'input4' && <Input4 />}
            </div>
        </div>
    );
};

export default Premium;