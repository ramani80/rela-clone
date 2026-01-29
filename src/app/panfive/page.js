'use client';
import React from 'react';

export default function WarriorsWayLanding() {
  return (
    <>
      <div className="container">
        <div className="content-wrapper">
          {/* Left Side - Laptop Display */}
          <div className="laptop-section">
            <div className="laptop-frame">
              <div className="laptop-screen">
                <div className="screen-header">
                  <div className="logo">CAREERS VINACIOUS</div>
                  <div className="nav">Courses</div>
                </div>
                <div className="course-grid">
                  <div className="course-card purple">
                    <div className="course-icon">🤖</div>
                    <h3>ARTIFICIAL INTELLIGENCE</h3>
                    <p>Internship on AI (LLM-Groq)</p>
                    <div className="course-footer">
                      <span className="instructor">👤 Sanjay Gor</span>
                      <span className="price">₹20,000</span>
                    </div>
                  </div>
                  <div className="course-card blue">
                    <div className="course-icon">💻</div>
                    <h3>EMBEDDED SYSTEM</h3>
                    <p>Internship on Embedded System Design with IoT (30 Day)</p>
                    <div className="course-footer">
                      <span className="instructor">👤 U.J. Jackson</span>
                      <span className="price">₹3,999</span>
                    </div>
                  </div>
                  <div className="course-card orange">
                    <div className="course-icon">📱</div>
                    <h3>DIGITAL MARKETING</h3>
                    <p>Internship on Digital Marketing</p>
                    <div className="course-footer">
                      <span className="instructor">👤 Suraj Das</span>
                      <span className="price">₹1,999</span>
                    </div>
                  </div>
                  <div className="course-card green">
                    <div className="course-icon">📊</div>
                    <h3>EXCEL</h3>
                    <p>Internship on EXCEL (Advanced tools)</p>
                  </div>
                  <div className="course-card dark-blue">
                    <div className="course-icon">🌐</div>
                    <h3>INTERNET OF THINGS</h3>
                    <p>Internship on IoT (IB-Days)</p>
                  </div>
                  <div className="course-card yellow">
                    <div className="course-icon">⛓️</div>
                    <h3>BLOCK CHAIN</h3>
                    <p>Internship on Business (2 Modules)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="decorative-circle circle-1"></div>
            <div className="decorative-circle circle-2"></div>
            <div className="decorative-dot dot-1"></div>
            <div className="decorative-dot dot-2"></div>
          </div>

          {/* Right Side - Content */}
          <div className="text-section">
            <div className="brand">Warriors Way</div>
            <h1 className="main-heading">
              <span className="gradient-text">Enlighten Your Future</span> with Our
              <br />
              <span className="bold-text">Coaching Programs</span>
            </h1>
            
            <p className="description">
              Transform Your Skills with A.I, Embedded System, Passive income.
              Unlock your potential and enhance your technical expertise with our
              comprehensive coaching programs. Benefit from a wealth of
              knowledge and resources, including:
            </p>

            <div className="features">
              <div className="feature-item">
                <div className="feature-icon icon-purple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <div className="feature-text">
                  <strong>Industry Projects -</strong> Hands-on experience in innovative projects
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon icon-purple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  </svg>
                </div>
                <div className="feature-text">
                  <strong>High-Paying Jobs -</strong> Increase your earning potential.
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon icon-purple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                </div>
                <div className="feature-text">
                  <strong>Multiple Income -</strong> Develop skills for multiple sources of passive income.
                </div>
              </div>
            </div>

            <button className="cta-button">
              <svg className="rocket-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              Start Your Journey Now
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
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* Left Side - Laptop Section */
        .laptop-section {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .laptop-frame {
          background: #2d2d2d;
          border-radius: 12px;
          padding: 20px 20px 60px 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          transform: perspective(1000px) rotateY(-5deg);
          position: relative;
          z-index: 2;
        }

        .laptop-screen {
          background: white;
          border-radius: 8px;
          padding: 20px;
          width: 550px;
          overflow: hidden;
        }

        .screen-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .logo {
          font-weight: bold;
          color: #6366f1;
          font-size: 14px;
        }

        .nav {
          color: #666;
          font-size: 14px;
        }

        .course-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .course-card {
          border-radius: 12px;
          padding: 20px;
          color: white;
          min-height: 140px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
          overflow: hidden;
        }

        .course-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transform: translate(30%, -30%);
        }

        .course-card.purple {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .course-card.blue {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .course-card.orange {
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        }

        .course-card.green {
          background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
        }

        .course-card.dark-blue {
          background: linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%);
        }

        .course-card.yellow {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .course-icon {
          font-size: 24px;
        }

        .course-card h3 {
          font-size: 13px;
          font-weight: bold;
          margin: 0;
        }

        .course-card p {
          font-size: 10px;
          opacity: 0.9;
          flex: 1;
        }

        .course-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 10px;
          margin-top: auto;
        }

        .decorative-circle {
          position: absolute;
          border: 2px solid #e0e0e0;
          border-radius: 50%;
          z-index: 1;
        }

        .circle-1 {
          width: 150px;
          height: 150px;
          top: -30px;
          left: -30px;
          border-color: rgba(147, 51, 234, 0.2);
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          bottom: -50px;
          right: -50px;
          border-color: rgba(99, 102, 241, 0.2);
        }

        .decorative-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          z-index: 1;
        }

        .dot-1 {
          background: #9333ea;
          top: 20%;
          left: -5%;
        }

        .dot-2 {
          background: #6366f1;
          bottom: 30%;
          right: -3%;
        }

        /* Right Side - Text Section */
        .text-section {
          padding: 20px;
        }

        .brand {
          color: #6366f1;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .main-heading {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 30px;
          color: #1f2937;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bold-text {
          color: #1f2937;
        }

        .description {
          color: #4b5563;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .features {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-purple {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .feature-icon svg {
          width: 24px;
          height: 24px;
        }

        .feature-text {
          color: #374151;
          font-size: 16px;
          line-height: 1.6;
          padding-top: 8px;
        }

        .feature-text strong {
          color: #1f2937;
        }

        .cta-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 18px 36px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
        }

        .rocket-icon {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 1200px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .laptop-frame {
            transform: perspective(1000px) rotateY(0deg);
          }

          .laptop-screen {
            width: 100%;
            max-width: 550px;
          }

          .main-heading {
            font-size: 36px;
          }
        }

        @media (max-width: 768px) {
          .course-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .main-heading {
            font-size: 28px;
          }

          .description {
            font-size: 14px;
          }

          .feature-text {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}