'use client';
export default function Home() {
  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <img src="/sns.png" className="logo" />

        <div className="title">
          <h1>SNS COLLEGE OF TECHNOLOGY</h1>
          <p>
            APPROVED BY AICTE - NEW DELHI, AFFILIATED TO ANNA UNIVERSITY
            <br />
            Coimbatore - 641 035, Tamil Nadu, India
          </p>
        </div>

        <div className="badges">
          <img src="/nba.png" />
          <img src="/naac.png" />
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <img src="/college2.jpg" className="heroImg" />

        <button className="plus">+</button>

        <div className="sliderBtns">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </section>

      {/* COURSES */}
      <section className="courses">
        <h2>COURSES OFFERED</h2>

        <div className="cards">
          {/* UG */}
          <div className="card">
            <div className="cardHeader">UG COURSES</div>

            <ul>
              <li>B.E Aerospace Engineering</li>
              <li>B.E Automobile Engineering</li>
              <li>B.E Biomedical Engineering</li>
              <li>B.E Civil Engineering</li>
              <li>B.E Computer Science and Engineering</li>
              <li>B.E Electronics and Communication</li>
            </ul>
          </div>

          {/* PG */}
          <div className="card">
            <div className="cardHeader">PG COURSES</div>

            <ul>
              <li>M.E Computer Science and Engineering</li>
              <li>M.E Power Systems Engineering</li>
              <li>M.E Structural Engineering</li>
              <li>M.E Thermal Engineering</li>
              <li>M.E VLSI Design</li>
              <li>MBA</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style jsx>{`
        .page {
          font-family: Arial;
          background: #f2f2f2;
        }

        /* HEADER */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          padding: 10px 40px;
        }

        .logo {
          width: 120px;
        }

        .title {
          text-align: center;
        }

        .title h1 {
          margin: 0;
          color: #007d7a;
          font-size: 22px;
        }

        .title p {
          margin: 0;
          font-size: 12px;
        }

        .badges img {
          width: 60px;
          margin-left: 10px;
        }

        /* HERO */
        .hero {
          position: relative;
        }

        .heroImg {
          width: 100%;
          height: 320px;
          object-fit: cover;
        }

        .plus {
          position: absolute;
          right: 20px;
          top: 20px;
          background: #1e6dfb;
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          font-size: 24px;
          border-radius: 4px;
          cursor: pointer;
        }

        .sliderBtns {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
        }

        .sliderBtns button {
          background: orange;
          border: none;
          margin: 5px;
          padding: 6px 10px;
          color: white;
          cursor: pointer;
        }

        /* COURSES */
        .courses {
          text-align: center;
          padding: 40px;
        }

        .courses h2 {
          margin-bottom: 30px;
        }

        .cards {
          display: flex;
          gap: 30px;
          justify-content: center;
        }

        .card {
          background: white;
          width: 320px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .cardHeader {
          background: #0e7c7b;
          color: white;
          padding: 12px;
          font-weight: bold;
        }

        ul {
          text-align: left;
          padding: 20px;
        }

        li {
          margin-bottom: 8px;
        }

        @media (max-width: 768px) {
          .cards {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}