// App.jsx - Main component that assembles all parts
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import JoinFunSection from './components/JoinFunSection';
import CurrentChallengesSection from './components/CurrentChallengesSection';
import UnlockPotentialSection from './components/UnlockPotentialSection';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <JoinFunSection />
        <CurrentChallengesSection />
        <UnlockPotentialSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

// components/Header.jsx
import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-green-500 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="text-white text-2xl font-bold">Zage</a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-blue-100 transition duration-300">Home Challenge</a>
            <a href="#" className="text-white hover:text-blue-100 transition duration-300">Join Challenge</a>
            <a href="#" className="text-white hover:text-blue-100 transition duration-300">Your Progress</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#" className="bg-white text-blue-500 hover:bg-blue-100 transition duration-300 py-2 px-4 rounded-full font-semibold">Sign In</a>
            <button 
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-4 py-2 bg-white rounded-lg shadow-lg">
            <a href="#" className="block px-4 py-2 text-blue-500 hover:bg-blue-50">Home Challenge</a>
            <a href="#" className="block px-4 py-2 text-blue-500 hover:bg-blue-50">Join Challenge</a>
            <a href="#" className="block px-4 py-2 text-blue-500 hover:bg-blue-50">Your Progress</a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

// components/HeroSection.jsx
import React from 'react';
import Button from './UI/Button';

function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Take on a challenge, inspire your journey!</h1>
            <p className="text-lg text-gray-600 mb-8">Join a community of challengers and track your progress together. Whether it's reading, diving, or a fun activity, connect with others who are motivated you.</p>
            <div className="flex flex-wrap gap-4">
              <Button href="#" primary>Start Now</Button>
              <Button href="#" outline>Learn More</Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-96">
              <img src="/api/placeholder/800/600" alt="People taking on challenges" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

// components/JoinFunSection.jsx
import React from 'react';
import FeatureCard from './UI/FeatureCard';

function JoinFunSection() {
  const features = [
    {
      title: "Create Challenges",
      description: "Create and participate in public or private challenges. Track your progress and stay motivated.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      linkText: "Join",
      linkUrl: "#",
      iconBgColor: "bg-blue-500",
    },
    {
      title: "Track Progress",
      description: "Monitor your achievements and stay connected with other challenge participants who have joined.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      linkText: "Learn More",
      linkUrl: "#",
      iconBgColor: "bg-green-500",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Join the Fun of Creating Challenges</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JoinFunSection;

// components/CurrentChallengesSection.jsx
import React from 'react';
import ChallengeCard from './UI/ChallengeCard';

function CurrentChallengesSection() {
  const challenges = [
    {
      title: "5K Fun Run",
      description: "Join us for a 5K Fun Run at the local park.",
      image: "/api/placeholder/400/300",
      date: { day: "09", month: "JUL 2025" },
      link: "#"
    },
    {
      title: "Healthy Eating Workshop",
      description: "Learn how to eat healthily with an expert nutritionist.",
      image: "/api/placeholder/400/300",
      date: { day: "10", month: "JUL 2025" },
      link: "#"
    },
    {
      title: "Yoga Retreat",
      description: "Find your balance in our weekend yoga retreat by the lake.",
      image: "/api/placeholder/400/300",
      date: { day: "11", month: "JUL 2025" },
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Current challenges</h2>
          <a href="#" className="text-blue-500 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">View all</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={index} {...challenge} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentChallengesSection;

// components/UnlockPotentialSection.jsx
import React from 'react';
import Button from './UI/Button';

function UnlockPotentialSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Unlock Your Potential: Join Challenges and Transform Your Life Today!</h2>
            <p className="mb-6">Challenge your expectations day by day, set personal goals and track your progress with friends. Whether it's cooking, knitting, or any challenge you can imagine, bringing together learning and growth through our platform is where it begins.</p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Engagement</h3>
                <p>Connect with friends and stay motivated</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Support</h3>
                <p>Access expert resources for personalized growth</p>
              </div>
            </div>
            <Button href="#" light>Start Your Challenge Today!</Button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg">
              <img src="/api/placeholder/500/400" alt="People celebrating challenge completion" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UnlockPotentialSection;

// components/TestimonialSection.jsx
import React from 'react';

function TestimonialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-blue-500">★</span>
            ))}
          </div>
        </div>
        <blockquote className="text-xl md:text-2xl italic mb-8 max-w-3xl mx-auto">
          "Participating in challenges has transformed my fitness journey. I've not only achieved my goals but also built lasting friendships along the way!"
        </blockquote>
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src="/api/placeholder/48/48" alt="Sarah Johnson" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <div className="font-bold">Sarah Johnson</div>
            <div className="text-sm text-gray-500">Marathon Runner • NY</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;

// components/CTASection.jsx
import React from 'react';
import Button from './UI/Button';

function CTASection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Challenge Today!</h2>
        <p className="text-gray-600 mb-8">Create, join and share to set new milestones in your life.</p>
        <div className="flex justify-center gap-4">
          <Button href="#" primary>Get Started</Button>
          <Button href="#" outline>Learn More</Button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

// components/Footer.jsx
import React from 'react';
import SocialIcon from './UI/SocialIcon';

function Footer() {
  const socialIcons = [
    {
      name: "facebook",
      path: "M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z",
      link: "#"
    },
    {
      name: "twitter",
      path: "M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548l-.047-.02z",
      link: "#"
    },
    {
      name: "instagram",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
      link: "#"
    }
  ];

  const footerLinks = {
    company: [
      { name: "About Us", link: "#" },
      { name: "Careers", link: "#" },
      { name: "Contact", link: "#" }
    ],
    support: [
      { name: "Privacy Policy", link: "#" },
      { name: "Terms of Use", link: "#" },
      { name: "Cookie Policy", link: "#" }
    ]
  };

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zage</h3>
            <p className="text-gray-400 mb-4">Creating community through challenges since 2023.</p>
            <p className="text-sm text-gray-400">© 2025 Zage Inc. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-gray-400 hover:text-white transition duration-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support Center</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-gray-400 hover:text-white transition duration-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              {socialIcons.map((icon, index) => (
                <SocialIcon key={index} {...icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// components/UI/Button.jsx
import React from 'react';

function Button({ children, href, primary, outline, light }) {
  const baseClasses = "py-3 px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transition duration-300";
  
  let variantClasses = "";
  if (primary) {
    variantClasses = "bg-blue-500 hover:bg-blue-600 text-white";
  } else if (outline) {
    variantClasses = "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
  } else if (light) {
    variantClasses = "bg-white text-blue-500 hover:bg-blue-100";
  }
  
  return href ? (
    <a href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </a>
  ) : (
    <button className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
}

export default Button;

// components/UI/FeatureCard.jsx
import React from 'react';

function FeatureCard({ title, description, icon, linkText, linkUrl, iconBgColor }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-4">
        <div className={`${iconBgColor} text-white p-3 rounded-full mr-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      <a href={linkUrl} className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-700">
        {linkText} 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

export default FeatureCard;

// components/UI/ChallengeCard.jsx
import React from 'react';

function ChallengeCard({ title, description, image, date, link }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4 bg-white text-blue-500 font-bold py-1 px-3 rounded-full shadow">
          <div className="text-center">
            <div className="text-lg font-bold">{date.day}</div>
            <div className="text-xs">{date.month}</div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={link} className="inline-flex items-center text-blue-500 hover:text-blue-700">
          View event 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ChallengeCard;

// components/UI/SocialIcon.jsx
import React from 'react';

function SocialIcon({ name, path, link }) {
  return (
    <a href={link} className="text-gray-400 hover:text-white transition duration-300" aria-label={name}>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d={path} />
      </svg>
    </a>
  );
}

export default SocialIcon;

// index.js - Entry point for the React application
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// index.css - Global styles for the application
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Open Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
}