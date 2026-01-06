'use client';
import React from 'react';
import Link from 'next/link'
export default function About() {
  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          min-height: 100vh;
          background: #ffffff;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 500px;
          background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=500&fit=crop&q=80');
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(2px);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 20px;
          max-width: 900px;
        }

        .hero-title {
          font-size: 56px;
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 20px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .hero-description {
          font-size: 18px;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        /* Mission Section */
        .mission-section {
          padding: 80px 60px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .mission-title {
          font-size: 42px;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 40px;
          text-align: left;
        }

        .mission-content {
          font-size: 18px;
          line-height: 1.8;
          color: #4a5568;
          text-align: left;
        }

        .mission-content p {
          margin-bottom: 20px;
        }

        .company-name {
          font-weight: 600;
          color: #2d3748;
        }

        /* Industry Leaders Section */
        .leaders-section {
          background: #f7fafc;
          padding: 60px 60px;
          text-align: center;
        }

        .leaders-title {
          font-size: 32px;
          font-weight: 600;
          color: #667eea;
          margin-bottom: 40px;
        }

        /* Chat Widget */
        .chat-widget {
          position: fixed;
          bottom: 30px;
          left: 30px;
          width: 60px;
          height: 60px;
          background: #667eea;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
          transition: all 0.3s;
          z-index: 1000;
        }

        .chat-widget:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(102, 126, 234, 0.5);
        }

        .chat-icon {
          color: white;
          font-size: 28px;
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 400px;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 22px;
          }

          .hero-description {
            font-size: 16px;
          }

          .mission-section {
            padding: 60px 30px;
          }

          .mission-title {
            font-size: 32px;
            text-align: center;
          }

          .mission-content {
            font-size: 16px;
            text-align: left;
          }

          .leaders-section {
            padding: 40px 30px;
          }

          .leaders-title {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="about-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Our Story</h1>
            <h2 className="hero-subtitle">Revolutionizing Automotive Business Operations</h2>
            <p className="hero-description">
              We're building the future of automotive business automation with intelligent AI agents that
              never sleep, never miss a customer, and never lose their patience.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <h2 className="mission-title">Our Mission</h2>
          <div className="mission-content">
            <p>
              At <span className="company-name">Relatim</span>, We Believe Every Automotive Business Deserves World-Class Customer Service. Our Mission Is To Democratize Intelligent Automation — Applying AI And ML In The Automotive Industry — So AI Agents For Automotive Businesses Can Transform How Dealers Operate, Engage Customers, And Grow Revenue.
            </p>
            <p>
              We Started With A Simple Observation: Automotive Businesses Were Losing Customers Not Because They Didn't Care, But Because They Couldn't Be Everywhere At Once. Calls Went Unanswered, Messages Piled Up, And Potential Sales Slipped Through The Cracks. Relatim Solves This With Automative AI Agent For Customer Service Automation. Our AI Agents Handle Conversations 24/7 Across Channels, Book Test Drives And Service Appointments, Qualify Leads, And Sync To Your Systems —So No Lead Is Missed And Every Customer Feels Supported.
            </p>
          </div>
        </section>

        {/* Industry Leaders Section */}
        <section className="leaders-section">
          <h3 className="leaders-title">From Industry Insiders, for Industry Leaders</h3>
        </section>

        {/* Chat Widget */}
        <div className="chat-widget">
          <span className="chat-icon">💬</span>
        </div>
      </div>
    </>
  );
}