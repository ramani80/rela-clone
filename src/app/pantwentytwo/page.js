'use client';
export default function Home() {
  return (
    <div className="hero">
      {/* LEFT IMAGE */}
      <div className="heroLeft">
        <img
          src="https://via.placeholder.com/700x500"
          alt="Courses"
          className="tablet"
        />
        <div className="glow"></div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="heroRight">
        <span className="badge">Warriors Way</span>

        <h1>
          <span className="gradient">Enlighten Your Future</span> with Our
          <br />
          Coaching Programs
        </h1>

        <p className="desc">
          Transform Your Skills with A.I, Embedded System, Passive income.
          Unlock your potential and enhance your technical expertise with our
          comprehensive coaching programs. Benefit from a wealth of knowledge
          and resources, including:
        </p>

        <ul className="features">
          <li>
            <span className="icon">📘</span>
            <div>
              <strong>Industry Projects</strong> – Hands-on experience in
              innovative projects
            </div>
          </li>
          <li>
            <span className="icon">🎓</span>
            <div>
              <strong>High-Paying Jobs</strong> – Increase your earning
              potential.
            </div>
          </li>
          <li>
            <span className="icon">💼</span>
            <div>
              <strong>Multiple Income</strong> – Develop skills for multiple
              sources of passive income.
            </div>
          </li>
        </ul>

        <button className="cta">Start Your Journey Now</button>
      </div>

      <style jsx>{`
        .hero {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          align-items: center;
          padding: 80px 70px;
          background: #fff;
          font-family: Arial, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .heroLeft {
          position: relative;
        }

        .tablet {
          width: 100%;
          max-width: 650px;
          transform: rotate(-6deg);
          z-index: 2;
          position: relative;
        }

        .glow {
          position: absolute;
          bottom: 40px;
          left: 200px;
          width: 160px;
          height: 160px;
          background: rgba(130, 80, 255, 0.4);
          filter: blur(80px);
          border-radius: 50%;
        }

        .heroRight {
          padding-left: 40px;
        }

        .badge {
          display: inline-block;
          background: #f2ecff;
          color: #6a4cff;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 14px;
          margin-bottom: 18px;
        }

        h1 {
          font-size: 44px;
          line-height: 1.25;
          margin-bottom: 20px;
          color: #222;
        }

        .gradient {
          background: linear-gradient(90deg, #7b5cff, #f06aa3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .desc {
          font-size: 16px;
          color: #555;
          line-height: 1.7;
          margin-bottom: 25px;
          max-width: 520px;
        }

        .features {
          list-style: none;
          padding: 0;
          margin: 0 0 30px;
        }

        .features li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 18px;
          font-size: 15px;
          color: #333;
        }

        .icon {
          width: 36px;
          height: 36px;
          background: #f2ecff;
          color: #6a4cff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .cta {
          background: linear-gradient(90deg, #7b5cff, #6a4cff);
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 25px;
          font-size: 15px;
          cursor: pointer;
        }

        .cta:hover {
          opacity: 0.9;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 50px 30px;
          }

          .heroRight {
            padding-left: 0;
            margin-top: 40px;
          }

          h1 {
            font-size: 34px;
          }
        }
      `}</style>
    </div>
  );
}
