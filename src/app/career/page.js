'use client';
import React from 'react';

export default function Career() {
  const openPositions = [
    {
      id: 1,
      title: 'Fullstack Developer',
      status: 'Open Role',
      description: "Join Relatim, a fast-growing AI startup revolutionizing the automotive industry, as a founding full Stack Engineer. You'll build scalable web applications using the latest technologies, work closely with our founders, and shape the company's core technology and culture. This is a hands-on, high-impact role offering ownership, growth, and equity in an innovative AI-driven environment.",
      location: 'Bangalore, Karnataka',
      type: 'Full Time'
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      status: 'Open Role',
      description: "Be part of our AI revolution! We're looking for talented ML engineers to develop cutting-edge AI solutions for the automotive industry. Work on natural language processing, conversational AI, and machine learning models that power our intelligent agents.",
      location: 'Bangalore, Karnataka',
      type: 'Full Time'
    },
    {
      id: 3,
      title: 'Product Designer',
      status: 'Open Role',
      description: "Design the future of automotive customer experience. Create intuitive, beautiful interfaces that delight users and drive engagement. Work closely with engineering and product teams to shape our AI-powered solutions.",
      location: 'Bangalore, Karnataka',
      type: 'Full Time'
    }
  ];

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .career-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          min-height: 100vh;
          background: #f7fafc;
        }

        /* Mission Section */
        .mission-section {
          background: white;
          padding: 80px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .mission-content {
          flex: 1;
          max-width: 500px;
        }

        .mission-title {
          font-size: 48px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .mission-highlight {
          color: #667eea;
        }

        .mission-description {
          font-size: 18px;
          color: #718096;
          line-height: 1.6;
          margin-top: 20px;
        }

        .mission-image-wrapper {
          flex: 1;
          max-width: 600px;
        }

        .mission-image {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        /* Open Positions Section */
        .positions-section {
          padding: 80px 60px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .positions-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .positions-title {
          font-size: 42px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 15px;
        }

        .positions-subtitle {
          font-size: 18px;
          color: #718096;
        }

        .positions-list {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .position-card {
          background: white;
          border-radius: 15px;
          padding: 35px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s;
          border: 2px solid transparent;
        }

        .position-card:hover {
          border-color: #667eea;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
          transform: translateY(-3px);
        }

        .position-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 15px;
        }

        .position-title-wrapper {
          display: flex;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .position-title {
          font-size: 26px;
          font-weight: 700;
          color: #667eea;
          margin: 0;
        }

        .status-badge {
          background: #d4edda;
          color: #155724;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .view-details-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .view-details-btn:hover {
          background: #5568d3;
          transform: translateX(3px);
        }

        .position-description {
          font-size: 16px;
          color: #4a5568;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .position-meta {
          display: flex;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #718096;
        }

        .meta-icon {
          font-size: 16px;
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
          .mission-section {
            flex-direction: column;
            padding: 60px 40px;
          }

          .mission-content {
            max-width: 100%;
            text-align: center;
          }

          .mission-image-wrapper {
            max-width: 100%;
          }

          .positions-section {
            padding: 60px 40px;
          }
        }

        @media (max-width: 768px) {
          .mission-section {
            padding: 40px 20px;
          }

          .mission-title {
            font-size: 36px;
          }

          .mission-description {
            font-size: 16px;
          }

          .positions-section {
            padding: 40px 20px;
          }

          .positions-title {
            font-size: 32px;
          }

          .position-card {
            padding: 25px;
          }

          .position-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .position-title {
            font-size: 22px;
          }

          .view-details-btn {
            width: 100%;
            justify-content: center;
          }

          .position-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      <div className="career-container">
        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <h1 className="mission-title">
              Be a part of<br />
              <span className="mission-highlight">our mission</span>
            </h1>
            <p className="mission-description">
              Join a team that's revolutionizing the automotive industry with AI-powered solutions.
            </p>
          </div>
          <div className="mission-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80" 
              alt="Team collaboration" 
              className="mission-image"
            />
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="positions-section">
          <div className="positions-header">
            <h2 className="positions-title">Open Positions</h2>
            <p className="positions-subtitle">Find your next opportunity with us</p>
          </div>

          <div className="positions-list">
            {openPositions.map((position) => (
              <div key={position.id} className="position-card">
                <div className="position-header">
                  <div className="position-title-wrapper">
                    <h3 className="position-title">{position.title}</h3>
                    <span className="status-badge">{position.status}</span>
                  </div>
                  <button className="view-details-btn">
                    View Details
                    <span>→</span>
                  </button>
                </div>
                
                <p className="position-description">{position.description}</p>
                
                <div className="position-meta">
                  <div className="meta-item">
                    <span className="meta-icon">📍</span>
                    <span>{position.location}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">⏰</span>
                    <span>{position.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chat Widget */}
        <div className="chat-widget">
          <span className="chat-icon">💬</span>
        </div>
      </div>
    </>
  );
}