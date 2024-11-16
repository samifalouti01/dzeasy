// src/LandingPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LandingPage = () => {
  const { username } = useParams();
  const [htmlContent, setHtmlContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHTMLContent = async () => {
      try {
        const response = await fetch(`https://script.google.com/macros/s/AKfycbxynClTmz4Sls2x2Xv5mrCthS8cZwSpZROV0y3Dan5mmEPAFOOeAEbq0bjAEnsbsh1_Xw/exec?username=${username}`);
        const data = await response.json();

        if (data.html === 'User not found') {
          setError('No HTML content found for this user.');
        } else {
          setHtmlContent(data.html);
        }
      } catch (error) {
        console.error("Error fetching HTML content:", error);
        setError('Error fetching content.');
      }
    };

    fetchHTMLContent();
  }, [username]);

  return (
    <div>
      {error && <p>{error}</p>}
      {!error && (
        <iframe
          srcDoc={htmlContent}
          title="User HTML Content"
          style={{ border: 'none', width: '100%', height: '100vh' }}
        />
      )}
    </div>
  );
};

export default LandingPage;
