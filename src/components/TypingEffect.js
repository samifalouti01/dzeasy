import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval); // Cleanup on component unmount
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
