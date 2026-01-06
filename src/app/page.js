'use client';
import React from 'react';

export default function RelatimLanding() {
  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        }

        .banner {
          background: linear-gradient(90deg, #5b6fd8 0%, #8b4a9e 50%, #e91e63 100%);
          color: white;
          padding: 12px 20px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          font-size: 15px;
        }

        .banner-icon {
          font-size: 24px;
        }

        .book-demo-link {
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s;
        }

        .book-demo-link:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .header {
          background: white;
          padding: 20px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          margin: 20px 40px;
          border-radius: 20px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 28px;
          font-weight: 700;
          color: #2d3748;
        }

        .logo-icon {
          background: #2d3748;
          color: white;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font-weight: 700;
          font-size: 24px;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .nav-links {
          display: flex;
          gap: 35px;
          list-style: none;
        }

        .nav-links a {
          color: #4a5568;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #667eea;
        }

        .nav-buttons {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .login-btn {
          background: none;
          border: none;
          color: #4a5568;
          font-size: 16px;
          cursor: pointer;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .signup-btn {
          background: none;
          border: 2px solid #667eea;
          color: #667eea;
          padding: 10px 24px;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }

        .signup-btn:hover {
          background: #667eea;
          color: white;
        }

        .book-demo-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 10px 24px;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s;
        }

        .book-demo-btn:hover {
          background: #5568d3;
        }

        .main-content {
          padding: 80px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          margin: 0 auto;
        }

        .content-left {
          flex: 1;
          max-width: 600px;
        }

        .supported-by {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
          padding: 12px 20px;
          background: white;
          border-radius: 30px;
          width: fit-content;
          font-size: 14px;
          color: #4a5568;
        }

        .supported-logos {
          display: flex;
          gap: 15px;
        }

        .supported-logo {
          height: 20px;
          width: auto;
        }

        .main-heading {
          font-size: 56px;
          line-height: 1.2;
          color: #2d3748;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .highlight {
          color: #667eea;
        }

        .subheading {
          font-size: 20px;
          color: #4a5568;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .ai-employee {
          color: #8b4a9e;
          font-weight: 600;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          margin-top: 40px;
        }

        .get-started-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 16px 40px;
          border-radius: 12px;
          font-size: 18px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .get-started-btn:hover {
          background: #5568d3;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .demo-btn {
          background: white;
          color: #667eea;
          border: 2px solid #667eea;
          padding: 16px 40px;
          border-radius: 12px;
          font-size: 18px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }

        .demo-btn:hover {
          background: #667eea;
          color: white;
        }

        .content-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .hero-image {
          max-width: 500px;
          width: 100%;
          height: auto;
        }

        /* Integration Section */
        .integration-section {
          background: white;
          padding: 80px 60px;
          text-align: center;
        }

        .integration-heading {
          font-size: 42px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 50px;
        }

        .brand-logos {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .brand-logo-wrapper {
          width: 120px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          gap: 8px;
          background: #f7fafc;
          border-radius: 15px;
          padding: 15px;
          transition: transform 0.3s;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .brand-logo-wrapper:hover {
          transform: scale(1.1);
        }

        .meet-employees-badge {
          display: inline-block;
          background: #f7fafc;
          border: 2px solid #e2e8f0;
          padding: 12px 30px;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 30px;
        }

        .employees-tagline {
          font-size: 28px;
          color: #2d3748;
          font-weight: 600;
          margin-bottom: 60px;
        }

        /* AI Employees Cards Section */
        .employees-section {
          background: #f7fafc;
          padding: 60px 40px;
        }

        .employees-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          gap: 30px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding-bottom: 20px;
        }

        .employees-container::-webkit-scrollbar {
          height: 8px;
        }

        .employees-container::-webkit-scrollbar-track {
          background: #e2e8f0;
          border-radius: 10px;
        }

        .employees-container::-webkit-scrollbar-thumb {
          background: #667eea;
          border-radius: 10px;
        }

        .employee-card {
          min-width: 380px;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .employee-card:hover {
          transform: translateY(-5px);
        }

        .employee-header {
          padding: 25px;
          text-align: center;
          border-bottom: 2px solid #f7fafc;
        }

        .employee-title {
          font-size: 22px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 8px;
        }

        .employee-subtitle {
          font-size: 14px;
          color: #718096;
        }

        .employee-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
        }

        .employee-features {
          padding: 25px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 15px;
          font-size: 14px;
          color: #4a5568;
        }

        .feature-icon {
          width: 20px;
          height: 20px;
          background: #667eea;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          flex-shrink: 0;
          margin-top: 2px;
        }

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
        }

        .chat-widget:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(102, 126, 234, 0.5);
        }

        .chat-icon {
          color: white;
          font-size: 28px;
        }

        @media (max-width: 1024px) {
          .main-content {
            flex-direction: column;
            text-align: center;
          }

          .content-left {
            max-width: 100%;
          }

          .supported-by {
            margin: 0 auto 30px;
          }

          .cta-buttons {
            justify-content: center;
          }

          .content-right {
            margin-top: 50px;
          }

          .employee-card {
            min-width: 320px;
          }
        }

        @media (max-width: 768px) {
          .header {
            padding: 15px 20px;
            margin: 15px 20px;
          }

          .nav-links {
            display: none;
          }

          .main-heading {
            font-size: 40px;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .integration-heading {
            font-size: 32px;
          }

          .brand-logos {
            gap: 30px;
          }

          .brand-logo {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>

      <div className="container">
        <div className="banner">
          <span className="banner-icon">🎉</span>
          <span>Try Relatim, 1st Month Free! Book Free Demo Today</span>
          <a href="#" className="book-demo-link">Book Free Demo →</a>
        </div>

        <header className="header">
          <div className="logo">
            <div className="logo-icon">R</div>
            <span>Relatim</span>
          </div>
          
          <nav className="nav">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#career">Career</a></li>
            </ul>
            
            <div className="nav-buttons">
              <button className="login-btn">
                <span>🔒</span> Login
              </button>
              <button className="signup-btn">Sign Up</button>
              <button className="book-demo-btn">Book Demo</button>
            </div>
          </nav>
        </header>

        <main className="main-content">
          <div className="content-left">
            <div className="supported-by">
              <span>Supported by:</span>
              <div className="supported-logos">
                <span style={{fontWeight: 600, fontSize: '14px'}}>New Frontiers</span>
                <span style={{fontWeight: 600, fontSize: '14px', color: '#10b981'}}>Enterprise Ireland</span>
              </div>
            </div>

            <h1 className="main-heading">
              Book More Test Drives,<br />
              <span className="highlight">Service Appointments</span> &<br />
              Insurance Renewals
            </h1>

            <p className="subheading">
              Never miss a customer again. Hire your first <span className="ai-employee">Automotive AI Employee</span> and run your business 24/7
            </p>

            <div className="cta-buttons">
              <button className="get-started-btn">Get Started</button>
              <button className="demo-btn">Book Demo</button>
            </div>
          </div>

          <div className="content-right">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop" 
              alt="Professional AI Assistant" 
              className="hero-image"
            />
          </div>
        </main>

        {/* Integration Section */}
        <section className="integration-section">
          <h2 className="integration-heading">Seamlessly Integrates with Your Ecosystem</h2>
          
          <div className="brand-logos">
            <div className="brand-logo-wrapper">🚗 Suzuki</div>
            <div className="brand-logo-wrapper">🚙 Nissan</div>
            <div className="brand-logo-wrapper">⭐ Mercedes</div>
            <div className="brand-logo-wrapper">🔷 BMW</div>
            <div className="brand-logo-wrapper">🛡️ Volvo</div>
            <div className="brand-logo-wrapper">🔵 Hyundai</div>
          </div>

          <div className="meet-employees-badge">Meet Relatim's AI Employees</div>
          
          <p className="employees-tagline">
            Run your automotive business 24/7 — Hire Your First AI Employee Today!
          </p>
        </section>

        {/* AI Employees Cards Section */}
        <section className="employees-section">
          <div className="employees-container">
            {/* Insurance Executive Card */}
            <div className="employee-card">
              <div className="employee-header">
                <h3 className="employee-title">Insurance Executive</h3>
                <p className="employee-subtitle">Sells insurance renewals - 24/7.</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&q=80" 
                alt="Insurance Executive" 
                className="employee-image"
              />
              <div className="employee-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Reaches out to all customers, active or inactive</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Works through your entire database</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Sends reminders and follow-ups automatically</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Negotiates and closes renewals</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Handles claims and escalations 24/7</span>
                </div>
              </div>
            </div>

            {/* Service Executive Card */}
            <div className="employee-card">
              <div className="employee-header">
                <h3 className="employee-title">Service Executive</h3>
                <p className="employee-subtitle">Manages all your service bookings.</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=300&fit=crop&q=80" 
                alt="Service Executive" 
                className="employee-image"
              />
              <div className="employee-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Connects with every customer consistently</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Keeps reminders compliant with your CRM</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Sends reminders to reduce no-shows</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Books service appointments automatically</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Follows up proactively 24/7</span>
                </div>
              </div>
            </div>

            {/* Sales Executive Card */}
            <div className="employee-card">
              <div className="employee-header">
                <h3 className="employee-title">Sales Executive</h3>
                <p className="employee-subtitle">Turns enquiries into sales.</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop&q=80" 
                alt="Sales Executive" 
                className="employee-image"
              />
              <div className="employee-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Handles customer enquiries 24/7</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Logs and tracks customer requests</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Sends reminders and follow-ups</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Understands customer needs and provides guidance</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Converts enquiries into test drives and sales</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="chat-widget">
          <span className="chat-icon">💬</span>
        </div>
      </div>
    </>
  );
}