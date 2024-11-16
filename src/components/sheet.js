import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Sheet = () => { 
    const [showSheet, setShowSheet] = useState(false);

    const toggleSheet = () => {
        setShowSheet((prevShowSheet) => !prevShowSheet);
      };

return (
    <div className="sheet">
        <h2 onClick={toggleSheet} style={{ cursor: 'pointer'}}>
          <FontAwesomeIcon icon={faFile} /> Google Sheet Example
          <button 
            style={{ marginLeft: '10px', backgroundColor: '#007bff', border: 'none', borderRadius: '10px', cursor: 'pointer' }}  
            aria-label="Toggle Documents"
          >
            <FontAwesomeIcon icon={showSheet ? faArrowUp : faArrowDown} />
          </button>
        </h2>
        {showSheet && (
          <>
            <iframe src="https://docs.google.com/spreadsheets/d/1mHXP6VnLTwmtigt3_a3MuTr0tOISEDeH0jYcRT34Jl4/edit?usp=sharing" style={{ width: '100%', minHeight: '500px', borderRadius: '20px', height: 'auto', border: 'none' }} title="Unique Title"></iframe>
          </>
        )}
      </div>
);
};

export default Sheet;