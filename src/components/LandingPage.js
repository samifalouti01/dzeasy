// src/LandingPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const { username } = useParams();
  const [htmlContent, setHtmlContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHTMLContent = async () => {
      try {
        const response = await fetch(`https://script.google.com/macros/s/AKfycbyaFCnWqohHDVH91zMr91LLHgSiaWx3uDD10TtOwaH08k6NlbQSVvNjjY3pnWonITOv/exec?username=${username}`);
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

  useEffect(() => {
    const loadScripts = () => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;

      const scripts = tempDiv.getElementsByTagName('script');
      for (let script of scripts) {
        const newScript = document.createElement('script');
        if (script.src) {
          // External script: copy src attribute
          newScript.src = script.src;
        } else {
          // Inline script: copy the content
          newScript.textContent = script.textContent;
        }
        document.body.appendChild(newScript);
      }
    };

    if (htmlContent) {
      loadScripts();
    }
  }, [htmlContent]);

  return (
    <div>
      {error && <p>{error}</p>}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default LandingPage;
