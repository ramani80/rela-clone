'use client';
import React from 'react';

export default function PantechLanding() {
  return (
    <>
      <div className="container">
        <div className="content-wrapper">
          <div className="robot-section">
            <div className="decoration-circle"></div>
            <img 
              src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&h=500&fit=crop" 
              alt="Robot Car" 
              className="robot-image"
            />
          </div>

          <div className="text-section">
            <div className="brand">Pantech Solutions</div>
            
            <h1 className="main-heading">
              <span className="highlight">Innovate</span> with Cutting-Edge Technologies
            </h1>
            
            <p className="description">
              Turn Your Ideas into Reality with Hands-on Experience in Brain-Computer Interface, A.I,
              Embedded and IoT Technologies & more
            </p>

            <ul className="features-list">
              <li>
                <span className="bullet"></span>
                Build a robust portfolio with capstone projects
              </li>
              <li>
                <span className="bullet"></span>
                Experience the latest technology firsthand
              </li>
              <li>
                <span className="bullet"></span>
                Advance your career with hands-on experience
              </li>
            </ul>

            <button className="cta-button">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Discover the Possibilities Now
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .robot-section {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .decoration-circle {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, rgba(124, 58, 237, 0.05) 50%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
        }

        .robot-image {
          position: relative;
          width: 100%;
          max-width: 450px;
          height: auto;
          z-index: 1;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
        }

        .text-section {
          padding: 20px 0;
        }

        .brand {
          color: #7c3aed;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }

        .main-heading {
          font-size: 48px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .highlight {
          color: #7c3aed;
        }

        .description {
          font-size: 18px;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .features-list {
          list-style: none;
          margin-bottom: 40px;
        }

        .features-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          color: #374151;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .bullet {
          width: 8px;
          height: 8px;
          background-color: #7c3aed;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .cta-button {
          background-color: #7c3aed;
          color: white;
          border: none;
          border-radius: 50px;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(124, 58, 237, 0.4);
        }

        .cta-button:hover {
          background-color: #6d28d9;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.5);
        }

        .cta-button:active {
          transform: translateY(0);
        }

        .icon {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 968px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .robot-section {
            order: 2;
          }

          .text-section {
            order: 1;
          }

          .main-heading {
            font-size: 36px;
          }

          .decoration-circle {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 640px) {
          .main-heading {
            font-size: 32px;
          }

          .description {
            font-size: 16px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}