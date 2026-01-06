'use client';
import React from 'react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      date: 'November 12, 2025',
      title: 'What is Relatim?',
      description: 'Automotive business losses leads not because of bad service, but because of unorganised systems, human error and time constraints. Relatim fixes this!',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80'
    },
    {
      id: 2,
      date: 'November 12, 2025',
      title: 'Why your losing customers',
      description: "You don't need a 50-page audit to figure out why automotive businesses are losing customers: Customers are left hours or even days waiting for a response.",
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&q=80'
    },
    {
      id: 3,
      date: 'November 12, 2025',
      title: 'Does AI automation improve customer service? Or does it just speed it up?',
      description: 'Good question. Speed is obvious. Faster replies, shorter holds — nice. But does AI actually make service better? Yes, and here is why.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&q=80'
    },
    {
      id: 4,
      date: 'August 23, 2025',
      title: 'New data shows nearly half of leads in the automotive industry are mishandled',
      description: 'Study reveals nearly half of automotive leads are mishandled, causing major sales losses.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80'
    },
    {
      id: 5,
      date: 'August 15, 2025',
      title: 'Meet your new coworker: The AI Employee',
      description: 'AI employees are transforming how automotive businesses operate, providing 24/7 customer support and engagement.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&q=80'
    },
    {
      id: 6,
      date: 'August 10, 2025',
      title: 'Good UX drives everything',
      description: 'User experience is the cornerstone of successful automotive AI implementations. Learn how great UX converts leads.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&q=80'
    },
    {
      id: 7,
      date: 'July 28, 2025',
      title: 'The future of automotive customer service',
      description: 'Explore how AI is revolutionizing customer interactions in the automotive industry with intelligent automation.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop&q=80'
    },
    {
      id: 8,
      date: 'July 20, 2025',
      title: 'Building the future together',
      description: 'Join us on our journey to transform automotive business operations with cutting-edge AI technology.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop&q=80'
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

        .blog-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          min-height: 100vh;
          background: #ffffff;
          padding: 60px 20px;
        }

        .blog-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 60px;
        }

        .blog-title {
          font-size: 48px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 15px;
        }

        .blog-subtitle {
          font-size: 18px;
          color: #718096;
          line-height: 1.6;
        }

        .blog-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
          padding: 0 20px;
        }

        .blog-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .blog-image-wrapper {
          width: 100%;
          height: 220px;
          overflow: hidden;
          position: relative;
        }

        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .blog-card:hover .blog-image {
          transform: scale(1.05);
        }

        .blog-content {
          padding: 25px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .blog-date {
          font-size: 13px;
          color: #667eea;
          font-weight: 600;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .blog-card-title {
          font-size: 22px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .blog-description {
          font-size: 15px;
          color: #4a5568;
          line-height: 1.6;
          flex: 1;
        }

        .read-more {
          margin-top: 20px;
          color: #667eea;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: gap 0.3s;
        }

        .blog-card:hover .read-more {
          gap: 10px;
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
          .blog-title {
            font-size: 36px;
          }

          .blog-subtitle {
            font-size: 16px;
          }

          .blog-grid {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 0 10px;
          }

          .blog-card-title {
            font-size: 20px;
          }

          .blog-description {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .blog-container {
            padding: 40px 15px;
          }

          .blog-title {
            font-size: 28px;
          }

          .blog-image-wrapper {
            height: 200px;
          }

          .blog-content {
            padding: 20px;
          }
        }
      `}</style>

      <div className="blog-container">
        <div className="blog-header">
          <h1 className="blog-title">Relatim Automotive Blog</h1>
          <p className="blog-subtitle">
            Insights on AI, Customer Experience, and the Future of the Automotive Industry
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="blog-image"
                />
              </div>
              <div className="blog-content">
                <div className="blog-date">{post.date}</div>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-description">{post.description}</p>
                <a href="#" className="read-more">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Widget */}
        <div className="chat-widget">
          <span className="chat-icon">💬</span>
        </div>
      </div>
    </>
  );
}