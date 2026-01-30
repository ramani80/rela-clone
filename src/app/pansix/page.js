'use client';
import React from 'react';

export default function Testimonials() {
  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <p className="testimonials-label">Testimonials</p>
        
        <h2 className="testimonials-title">
          Love from <span className="gradient-text">Customers</span>
        </h2>
        
        <p className="testimonials-subtitle">
          Our commitment to customer satisfaction has earned us the love and trust
          from thousands of customers worldwide
        </p>

        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect width="60" height="60" rx="12" fill="#2196F3"/>
                <path d="M30 18L33.09 24.26L40 25.27L35 30.14L36.18 37.02L30 33.77L23.82 37.02L25 30.14L20 25.27L26.91 24.26L30 18Z" fill="#FFC107"/>
              </svg>
            </div>
            <h3 className="stat-number">12,500+ Reviews</h3>
          </div>

          <div className="stat-item">
            <div className="stat-icon star-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <path d="M40 10L48.09 26.18L66 28.54L53 41.27L56.18 59.09L40 50.77L23.82 59.09L27 41.27L14 28.54L31.91 26.18L40 10Z" fill="#FF9999"/>
              </svg>
            </div>
            <h3 className="stat-number">4.5 / 5</h3>
          </div>
        </div>

        <button className="google-reviews-btn">See Google Reviews</button>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="avatar avatar-yellow">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="#FFC107"/>
                  <circle cx="40" cy="32" r="12" fill="#5D4037"/>
                  <path d="M40 48C30 48 22 52 22 58V64H58V58C58 52 50 48 40 48Z" fill="#5D4037"/>
                  <rect x="35" y="44" width="10" height="8" fill="#2196F3"/>
                </svg>
              </div>
              <div className="testimonial-content-header">
                <p className="testimonial-text">
                  The way of explanation is absolutely simple and can be understood by school going children also.
                </p>
                <div className="stars">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
            </div>
            <p className="testimonial-author">Nersupalli Santhosh Kumar reddy</p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="avatar avatar-green">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="#8BC34A"/>
                  <circle cx="40" cy="32" r="12" fill="#5D4037"/>
                  <path d="M25 48C25 48 28 44 40 44C52 44 55 48 55 48L55 64H25V48Z" fill="#5D4037"/>
                  <path d="M28 50L30 64H50L52 50C52 50 48 46 40 46C32 46 28 50 28 50Z" fill="#FFEB3B"/>
                </svg>
              </div>
              <div className="testimonial-content-header">
                <p className="testimonial-text">
                  This is a great platform for beginners and also a expert. The way of teaching is really ossum!! I Learned a lot in just few days
                </p>
                <div className="stars">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
            </div>
            <p className="testimonial-author">Srinithi</p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="avatar avatar-blue">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="#81D4FA"/>
                  <circle cx="40" cy="32" r="12" fill="#5D4037"/>
                  <path d="M40 48C30 48 22 52 22 58V64H58V58C58 52 50 48 40 48Z" fill="#5D4037"/>
                  <rect x="36" y="44" width="8" height="10" fill="#4FC3F7"/>
                  <path d="M36 54L32 58L36 62L40 58L44 62L48 58L44 54H36Z" fill="#4FC3F7"/>
                </svg>
              </div>
              <div className="testimonial-content-header">
                <p className="testimonial-text">
                  It is a noble work to teach more than 10 Million Students
                </p>
                <div className="stars">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
            </div>
            <p className="testimonial-author">Umesh Banodha</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          width: 100%;
          background: linear-gradient(to bottom, #ffffff 0%, #f8f9ff 100%);
          padding: 80px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .testimonials-label {
          color: #7c3aed;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .testimonials-title {
          font-size: 48px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(90deg, #7c3aed 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .testimonials-subtitle {
          color: #666;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 60px;
          max-width: 600px;
        }

        .stats-section {
          display: flex;
          gap: 80px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .stat-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .star-icon {
          width: 100px;
          height: 100px;
        }

        .stat-number {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        .google-reviews-btn {
          background: #7c3aed;
          color: white;
          border: none;
          padding: 16px 40px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 60px;
        }

        .google-reviews-btn:hover {
          background: #6d28d9;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .testimonial-card {
          background: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .testimonial-header {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          align-items: flex-start;
        }

        .avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          flex-shrink: 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .testimonial-content-header {
          flex: 1;
        }

        .testimonial-text {
          color: #1a1a1a;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 12px;
          font-style: italic;
        }

        .stars {
          display: flex;
          gap: 4px;
          font-size: 18px;
        }

        .testimonial-author {
          color: #666;
          font-size: 14px;
          font-weight: 500;
          margin: 0;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 60px 20px;
          }

          .testimonials-title {
            font-size: 36px;
          }

          .stats-section {
            gap: 40px;
            justify-content: center;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}