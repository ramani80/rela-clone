'use client';
import React from 'react';

export default function Contact() {
  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .contact-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          min-height: 100vh;
          background: #f7fafc;
          padding: 80px 20px;
        }

        .contact-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        /* Left Section - Get in Touch */
        .touch-section {
          background: white;
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .section-title {
          font-size: 42px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 20px;
        }

        .highlight {
          color: #667eea;
        }

        .section-description {
          font-size: 16px;
          color: #718096;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 35px;
        }

        .info-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .icon-wrapper {
          width: 50px;
          height: 50px;
          background: #e6f0ff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon {
          font-size: 24px;
          color: #667eea;
        }

        .info-content {
          flex: 1;
        }

        .info-title {
          font-size: 18px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 8px;
        }

        .info-details {
          font-size: 15px;
          color: #4a5568;
          line-height: 1.6;
        }

        .email-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
        }

        .email-link:hover {
          text-decoration: underline;
        }

        /* Right Section - Find Us */
        .find-section {
          background: white;
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .find-title {
          font-size: 42px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 20px;
        }

        .find-description {
          font-size: 16px;
          color: #718096;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .map-container {
          width: 100%;
          height: 450px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .map-embed {
          width: 100%;
          height: 100%;
          border: none;
        }

        .map-placeholder {
          width: 100%;
          height: 100%;
          background: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 15px;
          color: #4a5568;
        }

        .map-icon {
          font-size: 48px;
        }

        .map-text {
          font-size: 16px;
          font-weight: 500;
        }

        .get-directions-btn {
          margin-top: 20px;
          background: #667eea;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .get-directions-btn:hover {
          background: #5568d3;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
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

        @media (max-width: 1024px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .touch-section,
          .find-section {
            padding: 40px 30px;
          }

          .section-title,
          .find-title {
            font-size: 36px;
          }

          .map-container {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 40px 15px;
          }

          .touch-section,
          .find-section {
            padding: 30px 20px;
          }

          .section-title,
          .find-title {
            font-size: 28px;
          }

          .info-item {
            gap: 15px;
          }

          .icon-wrapper {
            width: 45px;
            height: 45px;
          }

          .map-container {
            height: 350px;
          }
        }
      `}</style>

      <div className="contact-container">
        <div className="contact-wrapper">
          {/* Get in Touch Section */}
          <div className="touch-section">
            <h1 className="section-title">
              Get in <span className="highlight">Touch</span>
            </h1>
            <p className="section-description">
              We'd love to hear from you! Whether you have questions, need support, or
              want to learn more about our services, our team is here to help.
            </p>

            <div className="contact-info">
              {/* Address */}
              <div className="info-item">
                <div className="icon-wrapper">
                  <span className="icon">📍</span>
                </div>
                <div className="info-content">
                  <h3 className="info-title">Relatim - India Private Limited</h3>
                  <p className="info-details">
                    WeWork Roshni Tech Hub<br />
                    Marathahalli Main Rd,<br />
                    R.J.Gardens,<br />
                    Lakshminarayana Pura,<br />
                    Chinnappanhalli, Bangalore<br />
                    Karnataka 560037
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="info-item">
                <div className="icon-wrapper">
                  <span className="icon">✉️</span>
                </div>
                <div className="info-content">
                  <h3 className="info-title">Email Us</h3>
                  <p className="info-details">
                    <a href="mailto:founder@relatim.com" className="email-link">
                      founder@relatim.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Find Us Section */}
          <div className="find-section">
            <h1 className="find-title">
              Find <span className="highlight">us</span>
            </h1>
            <p className="find-description">
              Visit our office or get in touch for a meeting
            </p>

            <div className="map-container">
              <iframe
                className="map-embed"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0965934701757!2d77.68918831482155!3d12.959652990865384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae130d3b0a3b63%3A0x3b0a3b63b0a3b63!2sWeWork%20Roshni%20Tech%20Hub!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <button className="get-directions-btn" onClick={() => window.open('https://goo.gl/maps/your-location', '_blank')}>
              Get Directions
            </button>
          </div>
        </div>

        {/* Chat Widget */}
        <div className="chat-widget">
          <span className="chat-icon">💬</span>
        </div>
      </div>
    </>
  );
}