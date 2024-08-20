import { useEffect } from 'react';

const Counters = () => {
  // Function to increment numbers
  const animateCounter = (element: HTMLElement, target: string | null) => {
    if (!target) return;
    
    let start = 0;
    const end = parseInt(target);
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      element.innerText = start.toString();
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  // Function to check if the element is in the viewport
  const isInViewport = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    const handleScroll = () => {
      const counters = document.querySelectorAll<HTMLElement>('.counter');
      counters.forEach(counter => {
        if (isInViewport(counter) && counter.innerText === '0') {
          animateCounter(counter, counter.getAttribute('data-target'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="counter-container mt-16 md:flex md:gap-10 shadow-lg p-6">
      <div className="counter-item text-center">
        <h2 className="text-5xl font-bold">
          <span className="counter text-gray-500" data-target="1">0</span>
        </h2>
        <p className="text-gray-600">Years of Experience</p>
      </div>
      <div className="counter-item text-center">
        <h2 className="text-5xl font-bold">
          <span className="counter text-gray-500" data-target="10">0</span>
        </h2>
        <p className="text-gray-600">Collaborations</p>
      </div>
      <div className="counter-item text-center">
        <h2 className="text-5xl font-bold">
          <span className="counter text-gray-500" data-target="4">0</span>
        </h2>
        <p className="text-gray-600">Backend Projects</p>
      </div>
      <div className="counter-item text-center">
        <h2 className="text-5xl font-bold">
          <span className="counter text-gray-500" data-target="5">0</span>
        </h2>
        <p className="text-gray-600">Full-stack Projects</p>
      </div>
      <div className="counter-item text-center">
        <h2 className="text-5xl font-bold">
          <span className="counter text-gray-500" data-target="2">0</span>
        </h2>
        <p className="text-gray-600">Certificates Earned</p>
      </div>
    </div>
  );
};

export default Counters;
