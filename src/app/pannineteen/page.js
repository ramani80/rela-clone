'use client';
export default function BlogCard() {
  return (
    <>
      <div className="blog-container">
        <div className="blog-card">
          {/* LEFT IMAGE */}
          <div className="blog-image">
            <img
              src="/embedded-interview.png"
              alt="Top 25 Embedded Interview Questions"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="blog-content">
            <div className="meta-top">
              <span className="comments">💬 55 COMMENTS</span>
              <span className="date">JUNE 14, 2018</span>
            </div>

            <span className="category">GENERAL</span>

            <h2>Top 25 Embedded Interview Questions</h2>

            <p>
              List of Embedded Interview Questions This blog post contains
              Top 25 Embedded Interview Questions for electronics engineers.
              What is an embedded system, and how is it different from a
              general-purpose...
            </p>

            <div className="meta-bottom">
              <span>💬 0 COMMENTS</span>
              <span>JANUARY 19, 2024</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-container {
          width: 100%;
          padding: 40px 80px;
          font-family: Arial, sans-serif;
          background: #ffffff;
        }

        .blog-card {
          display: flex;
          gap: 40px;
          border-bottom: 1px solid #eee;
          padding-bottom: 40px;
        }

        .blog-image {
          width: 40%;
        }

        .blog-image img {
          width: 100%;
          border-radius: 4px;
        }

        .blog-content {
          width: 60%;
        }

        .meta-top,
        .meta-bottom {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: #999;
          margin-bottom: 10px;
        }

        .category {
          display: inline-block;
          font-size: 12px;
          color: #1e88e5;
          letter-spacing: 1px;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .blog-content h2 {
          font-size: 26px;
          color: #000;
          margin: 10px 0 15px;
        }

        .blog-content p {
          font-size: 15px;
          line-height: 1.7;
          color: #555;
        }

        @media (max-width: 900px) {
          .blog-card {
            flex-direction: column;
          }

          .blog-image,
          .blog-content {
            width: 100%;
          }

          .blog-container {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}
