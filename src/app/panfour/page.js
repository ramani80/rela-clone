'use client';
import React from 'react';

export default function PantechPage() {
  return (
    <>
      <div className="container">
        <div className="social-header">
          <h2>Spread the love</h2>
          <div className="social-icons">
            <a href="#" className="social-icon facebook" aria-label="Facebook">
              <span>f</span>
            </a>
            <a href="#" className="social-icon twitter" aria-label="Twitter">
              <span>🐦</span>
            </a>
            <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
              <span>in</span>
            </a>
            <a href="#" className="social-icon pinterest" aria-label="Pinterest">
              <span>P</span>
            </a>
            <a href="#" className="social-icon reddit" aria-label="Reddit">
              <span>R</span>
            </a>
            <a href="#" className="social-icon mix" aria-label="Mix">
              <span>M</span>
            </a>
            <a href="#" className="social-icon whatsapp" aria-label="WhatsApp">
              <span>W</span>
            </a>
            <a href="#" className="social-icon more" aria-label="More">
              <span>+</span>
            </a>
          </div>
        </div>

        <div className="content">
          <p className="intro-text">
            Pantech Prolabs India Pvt Ltd is best known for manufacturing and marketing of high-quality, 
            state-of-the-art Engineering Lab Equipments and Electronic Hobby Kits. Its products are delivered 
            across the globe and many satisfied customers are the best guarantee of its first-rate service. 
            Many of our products are also extensively used by Hobbyists, Electronics, Electrical, Instrumentation, 
            Communication and Bio Medical engineers.
          </p>

          <h3 className="section-title">Why Pantech?</h3>

          <p className="description-text">
            With a client list spanning nearly in all industries, and colleges, Pantech Solutions' product 
            solutions have benefited customers of many different sizes, from non-profit organizations to companies. 
            By acquaintance with Pantech you'll have access to current technology, Development tools, Reference 
            Schematics, sample source code, and step-by-step action plans for completing Key projects. You'll also 
            be provided full access to our research archives and knowledge base.
          </p>

          <h3 className="section-title">Our Vision</h3>

          <p className="vision-text">
            "To Gain Global Leadership in providing Technological Solutions through Sustained Innovation."
          </p>

          <h3 className="section-title">Core Values</h3>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .social-header {
          margin-bottom: 30px;
        }

        .social-header h2 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 15px;
          color: #2c3e50;
        }

        .social-icons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: white;
          font-weight: bold;
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.1);
        }

        .facebook {
          background-color: #3b5998;
        }

        .twitter {
          background-color: #1da1f2;
          font-size: 16px;
        }

        .linkedin {
          background-color: #0077b5;
          font-size: 14px;
        }

        .pinterest {
          background-color: #bd081c;
        }

        .reddit {
          background-color: #ff4500;
        }

        .mix {
          background-color: #ff8226;
        }

        .whatsapp {
          background-color: #25d366;
        }

        .more {
          background-color: #9e9e9e;
        }

        .content {
          margin-top: 30px;
        }

        .intro-text,
        .description-text {
          font-size: 15px;
          color: #555;
          margin-bottom: 20px;
          text-align: justify;
        }

        .section-title {
          font-size: 18px;
          font-weight: bold;
          color: #2c3e50;
          margin-top: 25px;
          margin-bottom: 15px;
        }

        .vision-text {
          font-size: 15px;
          color: #c41e3a;
          font-weight: bold;
          margin-bottom: 20px;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .container {
            padding: 20px 15px;
          }

          .social-header h2 {
            font-size: 20px;
          }

          .social-icon {
            width: 35px;
            height: 35px;
            font-size: 16px;
          }

          .intro-text,
          .description-text {
            font-size: 14px;
          }

          .section-title {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}