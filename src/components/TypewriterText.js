import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypewriterText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Full Stack Developer',
        'Data Analyst',
        'Machine Learning Engineer',
        'Cloud Engineer'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return <span ref={el} className="text-cyan-500"></span>;
};

export default TypewriterText;