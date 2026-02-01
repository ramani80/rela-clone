'use client';
export default function Home() {
  return (
    <div className="container">
      {/* Left Content */}
      <div className="left">
        <span className="badge">
          Pantech.ai - Warriorsway - Automate Your Business
        </span>

        <h1 className="title">
          <span className="purple">Innovate</span> -{" "}
          <span className="pink">Create</span> - <br />
          <span className="purple">Transform</span>
        </h1>

        <h3 className="subtitle">
          Experience 18 Years of Excellence with Pantech
        </h3>

        <p className="description">
          Welcome to Pantech, where innovation meets technology. With over 18
          years of experience and more than 300 products and projects under our
          belt, we are the leading provider of cutting-edge technical solutions
          and services.
        </p>

        <div className="buttons">
          <button className="primary-btn">Get Started Now</button>
          <button className="secondary-btn">
            <span className="play">▶</span> View Channel
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="right">
        <img
          src="/embedded-kit.png"
          alt="Embedded System & IoT Kit"
        />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 100vh;
          padding: 60px 80px;
          font-family: Arial, sans-serif;
          background: #ffffff;
        }

        .left {
          max-width: 600px;
        }

        .badge {
          display: inline-block;
          padding: 6px 14px;
          font-size: 14px;
          background: #f2ecff;
          color: #6b4eff;
          border-radius: 6px;
          margin-bottom: 20px;
        }

        .title {
          font-size: 48px;
          line-height: 1.2;
          margin: 10px 0 20px;
        }

        .purple {
          color: #7b5cff;
        }

        .pink {
          color: #ff6b8b;
        }

        .subtitle {
          font-size: 20px;
          margin-bottom: 15px;
          color: #222;
        }

        .description {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .buttons {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .primary-btn {
          background: #6b4eff;
          color: #fff;
          border: none;
          padding: 14px 26px;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
        }

        .primary-btn:hover {
          background: #5a3ee6;
        }

        .secondary-btn {
          background: transparent;
          border: none;
          font-size: 15px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #333;
        }

        .play {
          width: 36px;
          height: 36px;
          background: #f2ecff;
          color: #6b4eff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .right img {
          max-width: 420px;
          width: 100%;
        }

        @media (max-width: 900px) {
          .container {
            flex-direction: column;
            text-align: center;
          }

          .right {
            margin-top: 40px;
          }

          .buttons {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
