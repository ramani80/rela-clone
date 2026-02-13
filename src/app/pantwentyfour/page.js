'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="topBar">
          <div className="logo">
            <span className="logoMain">cts</span>
            <span className="logoSub">Your Partner in Smart Solutions.</span>
          </div>

          <div className="searchBox">
            <input type="text" placeholder="Search" />
            <button>🔍</button>
          </div>
        </div>

        <nav className="nav">
          <a href="#">Products</a>
          <a href="#">Markets</a>
          <a href="#">Resources</a>
          <a href="#">About CTS</a>
          <a href="#">Investors</a>
          <a href="#">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="heroLeft">
          <h1>
            Your Partner In <br />
            Smart Solutions<sup>®</sup>
          </h1>
          <p>
            CTS is a leading designer and manufacturer of sensors, actuators,
            and electronic components for original equipment manufacturers
            (OEMs) in a variety of markets.
          </p>
        </div>

        <div className="heroRight">
          <Image
            src="https://images.unsplash.com/photo-1581091870627-3f89f6b2c7b4"
            alt="robotic arm"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .header {
          background: #f5f5f5;
        }

        .topBar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 60px;
        }

        .logoMain {
          font-size: 40px;
          font-weight: bold;
          color: #0c3c69;
        }

        .logoSub {
          display: block;
          font-size: 14px;
          color: #0c3c69;
        }

        .searchBox {
          display: flex;
          width: 300px;
        }

        .searchBox input {
          flex: 1;
          padding: 8px;
          border: none;
          background: #ddd;
        }

        .searchBox button {
          padding: 8px 12px;
          background: #f58220;
          border: none;
          color: white;
          cursor: pointer;
        }

        .nav {
          display: flex;
          justify-content: center;
          gap: 40px;
          padding: 15px 0;
          background: white;
        }

        .nav a {
          text-decoration: none;
          color: #0c3c69;
          font-weight: 500;
        }

        /* Hero */
        .hero {
          display: flex;
          height: 80vh;
          position: relative;
        }

        .heroLeft {
          flex: 1;
          background: #0c3c69;
          color: white;
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .heroLeft h1 {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .heroLeft p {
          font-size: 18px;
          max-width: 500px;
          line-height: 1.6;
        }

        .heroRight {
          flex: 1;
          position: relative;
        }

        /* Diagonal Orange Line */
        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 8px;
          height: 100%;
          background: #f58220;
          transform: skewX(-15deg);
          z-index: 2;
        }

        @media (max-width: 900px) {
          .hero {
            flex-direction: column;
            height: auto;
          }

          .hero::before {
            display: none;
          }

          .heroLeft {
            padding: 40px 20px;
          }

          .heroLeft h1 {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
}
