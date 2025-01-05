import React, { useState, useEffect } from 'react';
import './App.css';

// Add this function in your App.js file

function createStars(numStars) {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const sizeClass = Math.random() < 0.5 ? 'small' : Math.random() < 0.5 ? 'medium' : 'large';
    const starStyle = {
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 1000}vh`,
      animationDelay: `${Math.random() * 2}s`,
    };
    stars.push(<div key={i} className={`star ${sizeClass}`} style={starStyle} />);
  }
  return stars;
}

function SponsorBox({ imageUrl, name }) {
  return (
    <div className="sponsor-box">
      <img src={imageUrl} alt={`${name} logo`} className="sponsor-image" />
    </div>
  );
}

function Rectangle({ imageUrl, name }) {
  return (
    <div className="rectangle">
      <div className="rectangle-inner">
        <div className="rectangle-front">
          <img src={imageUrl} alt={`${name} logo`} className="sponsor-image" />
        </div>
        <div className="rectangle-back">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentSponsors = [
    { name: 'Tata', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1024px-Tata_logo.svg.png?height=200&width=200' },
    { name: 'Sponsor 2', imageUrl: '/placeholder.svg?height=200&width=200' },
    { name: 'Sponsor 3', imageUrl: '/placeholder.svg?height=200&width=200' },
    { name: 'Sponsor 4', imageUrl: '/placeholder.svg?height=200&width=200' },
    { name: 'Sponsor 5', imageUrl: '/placeholder.svg?height=200&width=200' },
  ];

  const pastSponsors = [
    { name: 'Tata', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1024px-Tata_logo.svg.png?height=200&width=200' },
    { name: 'Past Sponsor 2', imageUrl: '/placeholder.svg?height=200&width=200' },
    { name: 'Past Sponsor 3', imageUrl: '/placeholder.svg?height=200&width=200' },
    { name: 'Past Sponsor 4', imageUrl: '/placeholder.svg?height=200&width=200' },
    { name: 'Past Sponsor 5', imageUrl: '/placeholder.svg?height=200&width=200' },
    { name: 'Past Sponsor 6', imageUrl: '/placeholder.svg?height=200&width=200' },
    { name: 'Past Sponsor 7', imageUrl: '/placeholder.svg?height=200&width=200' },
    { name: 'Past Sponsor 8', imageUrl: '/placeholder.svg?height=200&width=200' },
    { name: 'Past Sponsor 9', imageUrl: '/placeholder.svg?height=200&width=200' },
  ];

  return (
    <div className="app">
      <div className="background" style={{ transform: `translateY(${scrollY * 0.5}px)` }} />
      
      <div className="stars">
      {createStars(500)} {/* Adjust the number of stars as needed */}
    </div>
      <section className="sponsors-section">
        <h1 className="animate-fade-in">EMPOWERING INNOVATION</h1>
        <p className="subtitle animate-fade-in">Our Esteemed Sponsors for 2025</p>
        <div className="sponsors-grid">
          {currentSponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className={`sponsor-container ${index % 2 === 0 ? 'left' : 'right'} animate-slide-in`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <SponsorBox imageUrl={sponsor.imageUrl} name={sponsor.name} />
            </div>
          ))}
        </div>
      </section>
      
      <section className="past">
        <div className="past-background" />
        <h1 className="animate-fade-in">LEGACY OF SUPPORT</h1>
        <p className="subtitle animate-fade-in">Honoring Our Past Sponsors</p>
        <div className="sponsors-container">
          <div className="flat animate-fade-in">
            {pastSponsors.slice(0, 3).map((sponsor, index) => (
              <Rectangle key={index} imageUrl={sponsor.imageUrl} name={sponsor.name} />
            ))}
          </div>
          <div className="block animate-fade-in">
            <div className="image"></div>
            <div className="set_two">
              {pastSponsors.slice(3, 5).map((sponsor, index) => (
                <Rectangle key={index} imageUrl={sponsor.imageUrl} name={sponsor.name} />
              ))}
            </div>
          </div>
          <div className="set_two offset animate-fade-in">
            {pastSponsors.slice(5, 7).map((sponsor, index) => (
              <Rectangle key={index} imageUrl={sponsor.imageUrl} name={sponsor.name} />
            ))}
          </div>
          <div className="set_three animate-fade-in">
            {pastSponsors.slice(7, 10).map((sponsor, index) => (
              <Rectangle key={index} imageUrl={sponsor.imageUrl} name={sponsor.name} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

