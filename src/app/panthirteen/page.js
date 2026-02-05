'use client';
export default function Testimonials() {
  return (
    <>
      <div className="container">
        {/* Left Section */}
        <div className="left">
          <span className="badge">Testimonials</span>
          <h1>
            Love from <span>Customers</span>
          </h1>
          <p className="desc">
            Our commitment to customer satisfaction has earned us the love and trust
            from thousands of customers worldwide
          </p>

          <div className="stats">
            <div className="stat">
              <div className="icon blue">★ ★</div>
              <h3>12,500+ Reviews</h3>
            </div>

            <div className="stat">
              <div className="icon pink">★</div>
              <h3>4.5 / 5</h3>
            </div>
          </div>

          <button className="btn">See Google Reviews</button>
        </div>

        {/* Right Section */}
        <div className="right">
          <div className="review">
            <div className="avatar yellow"></div>
            <div>
              <p className="text">
                The way of explanation is absolutely simple and can be understood
                by school going children also.
              </p>
              <div className="stars">★★★★★</div>
              <span className="name">Nersupalli Santhosh Kumar Reddy</span>
            </div>
          </div>

          <div className="review">
            <div className="avatar green"></div>
            <div>
              <p className="text">
                This is a great platform for beginners and also an expert.
                The way of teaching is really awesome!! I learned a lot in just few days
              </p>
              <div className="stars">★★★★★</div>
              <span className="name">Srinithi</span>
            </div>
          </div>

          <div className="review">
            <div className="avatar sky"></div>
            <div>
              <p className="text">
                It is a noble work to teach more than 10 Million Students
              </p>
              <div className="stars">★★★★★</div>
              <span className="name">Umesh Banodha</span>
            </div>
          </div>
        </div>
      </div>

      {/* Normal CSS */}
      <style jsx>{`
        .container {
          display: flex;
          padding: 60px;
          gap: 60px;
          font-family: Arial, sans-serif;
        }

        .left {
          width: 45%;
        }

        .badge {
          background: #f1eaff;
          color: #7c3aed;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 14px;
        }

        h1 {
          font-size: 42px;
          margin: 20px 0;
        }

        h1 span {
          color: #7c3aed;
        }

        .desc {
          color: #666;
          font-size: 16px;
          line-height: 1.6;
        }

        .stats {
          display: flex;
          gap: 40px;
          margin: 40px 0;
        }

        .stat {
          text-align: center;
        }

        .icon {
          width: 70px;
          height: 70px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-bottom: 10px;
          color: #fff;
        }

        .blue {
          background: #3b82f6;
        }

        .pink {
          background: #fb7185;
        }

        .btn {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 14px 24px;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
        }

        .right {
          width: 55%;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .review {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .yellow {
          background: #facc15;
        }

        .green {
          background: #84cc16;
        }

        .sky {
          background: #7dd3fc;
        }

        .text {
          font-style: italic;
          color: #333;
          margin-bottom: 8px;
        }

        .stars {
          color: #facc15;
          font-size: 18px;
        }

        .name {
          font-size: 14px;
          color: #555;
        }
      `}</style>
    </>
  );
}
