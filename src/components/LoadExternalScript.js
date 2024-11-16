import { useEffect } from 'react';

function LoadExternalScript() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://shebudriftaiter.net/tag.min.js';
    script.setAttribute('data-zone', 8457118);
    (document.body || document.documentElement).appendChild(script);

    // Cleanup: remove the script if the component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render any UI
}

export default LoadExternalScript;
