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

  return (
    <div>
      {error && <p>{error}</p>}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default LandingPage;
