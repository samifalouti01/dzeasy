import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Details = () => { 
  const [showDocs, setShowDocs] = useState(false);
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

  const toggleDocs = () => {
    setShowDocs((prevShowDocs) => !prevShowDocs);
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
      <div>
        <h2 onClick={toggleDocs} style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', direction:'rtl', cursor: 'pointer'}}>
          <img
              src="https://static.vecteezy.com/system/resources/thumbnails/027/179/391/small_2x/google-sheet-spreadsheet-icon-logo-symbol-free-png.png"
              alt="logo"
              style={{ width: '30px', height: 'auto', marginLeft: '10px' }} /> إعداد جدول Google Sheet
          <button 
            style={{ marginRight: '10px', backgroundColor: '#007bff', border: 'none', borderRadius: '10px', cursor: 'pointer' }} 
            aria-label="Toggle Documents"
          >
            <FontAwesomeIcon icon={showDocs ? faArrowUp : faArrowDown} />
          </button>
        </h2>
        {showDocs && (
          <>
            <div className="documents">
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
          </>
        )}
      </div>
    </div>
  );
};

export default Details; 
