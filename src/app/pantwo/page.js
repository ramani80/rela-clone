'use client';
export default function Home() {
  return (
    <>
      <div className="services-section">
        {/* Tagline */}
        <p className="tagline">
          “To Gain Global Leadership in providing Technological Solutions
          through Sustained Innovation.”
        </p>

        {/* Heading */}
        <h1 className="main-heading">
          Step Up Your Game with{" "}
          <span className="highlight">Our Premium Services</span>
        </h1>

        {/* Services */}
        <div className="services">
          <div className="service-card">
            <div className="icon purple">💎</div>
            <p>Product Manufacturing</p>
          </div>

          <div className="service-card">
            <div className="icon pink">💡</div>
            <p>Project Building</p>
          </div>

          <div className="service-card">
            <div className="icon orange">📚</div>
            <p>Technical Coaching</p>
          </div>

          <div className="service-card">
            <div className="icon yellow">💰</div>
            <p>Passive Income Coaching</p>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .services-section {
          min-height: 100vh;
          background: #f7f8fc;
          text-align: center;
          padding: 60px 20px;
          font-family: "Segoe UI", sans-serif;
        }

        .tagline {
          display: inline-block;
          background: #eef0ff;
          color: #5b5ff0;
          padding: 10px 18px;
          border-radius: 20px;
          font-size: 14px;
          margin-bottom: 25px;
        }

        .main-heading {
          font-size: 38px;
          font-weight: 700;
          margin-bottom: 60px;
          color: #222;
        }

        .highlight {
          background: linear-gradient(90deg, #6a5cff, #ff7aa2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .services {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 18px;
          font-weight: 600;
          color: #222;
        }

        .icon {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          margin-bottom: 15px;
        }

        .purple {
          background: #6b2fa4;
          color: white;
        }

        .pink {
          background: #e84c7f;
          color: white;
        }

        .orange {
          background: #f07a48;
          color: white;
        }

        .yellow {
          background: #ffd65a;
          color: #222;
        }

        @media (max-width: 768px) {
          .main-heading {
            font-size: 28px;
          }

          .services {
            gap: 40px;
          }
        }
      `}</style>
    </>
  );
}
