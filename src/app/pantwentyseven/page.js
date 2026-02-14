'use client';
import React from "react";

export default function Home() {
  return (
    <div className="container">
      <p className="quote">
        “To Gain Global Leadership in providing Technological Solutions through Sustained Innovation.”
      </p>

      <h1 className="heading">
        Step Up Your Game with <span>Our Premium Services</span>
      </h1>

      <div className="services">
        <div className="card">
          <div className="circle purple">
            <img src="https://cdn-icons-png.flaticon.com/512/1048/1048940.png" />
          </div>
          <h3>Product Manufacturing</h3>
        </div>

        <div className="card">
          <div className="circle pink">
            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" />
          </div>
          <h3>Project Building</h3>
        </div>

        <div className="card">
          <div className="circle orange">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" />
          </div>
          <h3>Technical Coaching</h3>
        </div>

        <div className="card">
          <div className="circle yellow">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png" />
          </div>
          <h3>Passive Income Coaching</h3>
        </div>
      </div>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 60px 40px;
          background: #f4f4f7;
          font-family: Arial, sans-serif;
        }

        .quote {
          color: #5a67d8;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .heading {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 60px;
        }

        .heading span {
          background: linear-gradient(90deg, #6a5acd, #ff6f91);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .services {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .card {
          text-align: center;
          width: 220px;
        }

        .circle {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 20px;
        }

        .circle img {
          width: 70px;
          height: 70px;
        }

        .purple {
          background: #6b2c91;
        }

        .pink {
          background: #e53e6f;
        }

        .orange {
          background: #ed8936;
        }

        .yellow {
          background: #ecc94b;
        }

        .card h3 {
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }

        @media (max-width: 768px) {
          .services {
            gap: 30px;
          }

          .heading {
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  );
}
