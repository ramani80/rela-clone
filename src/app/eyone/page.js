'use client';
export default function Home() {
  return (
    <>
      <div className="container">
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="logo">
            <span className="ey">EY</span>
            <p>Shape the future with confidence</p>
          </div>

          <ul className="menu">
            <li>Insights</li>
            <li>Services</li>
            <li>Industries</li>
            <li>Careers</li>
            <li>About us</li>
          </ul>

          <div className="right">
            <span>Search</span>
            <span>My EY</span>
            <span>India English</span>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="overlay" />

          <div className="heroContent">
            <p className="tag">INSIGHTS</p>

            <h1>
              How AI is becoming central to <br />
              oil and gas finance strategy
            </h1>

            <p className="desc">
              AI is helping oil and gas CFOs unlock trapped working capital,
              improve cash flow resilience and fund energy transition through
              predictive and agentic automation.
            </p>
          </div>
        </section>
      </div>

      {/* CSS */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        .container {
          width: 100%;
          min-height: 100vh;
        }

        /* NAVBAR */
        .navbar {
          height: 70px;
          background: #2d2d36;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
        }

        .logo .ey {
          font-weight: bold;
          font-size: 26px;
        }

        .logo p {
          font-size: 12px;
          opacity: 0.7;
        }

        .menu {
          display: flex;
          gap: 30px;
          list-style: none;
          font-size: 14px;
        }

        .menu li {
          cursor: pointer;
        }

        .right {
          display: flex;
          gap: 20px;
          font-size: 14px;
        }

        /* HERO */
        .hero {
          position: relative;
          height: calc(100vh - 70px);
          background: url("/oil.jpg") center/cover no-repeat;
          display: flex;
          align-items: center;
          padding-left: 80px;
          color: white;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.2)
          );
        }

        .heroContent {
          position: relative;
          max-width: 700px;
        }

        .tag {
          color: #ffd400;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .hero h1 {
          font-size: 52px;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .desc {
          font-size: 18px;
          line-height: 1.6;
          opacity: 0.9;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .menu {
            display: none;
          }

          .hero {
            padding: 40px;
          }

          .hero h1 {
            font-size: 36px;
          }
        }
      `}</style>
    </>
  );
}