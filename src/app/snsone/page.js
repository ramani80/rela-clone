'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <div className="logo">SNS</div>

        <div className="title">
          <h1>SNS COLLEGE OF TECHNOLOGY</h1>
          <p>
            APPROVED BY AICTE - NEW DELHI, AFFILIATED TO ANNA UNIVERSITY
            <br />
            Coimbatore - 641 035, Tamil Nadu, India
          </p>
        </div>

        <div className="badges">NBA | NAAC</div>
      </header>

      {/* ABOUT */}
      <section className="about">
        <div className="aboutImg">
          <img src="/college.jpg" alt="college" />
        </div>

        <div className="aboutText">
          <h2>ABOUT US</h2>
          <p>
            Our College is committed to provide quality learning experience to
            students by adopting continual improvements in management system,
            infrastructure and competence of faculties.
          </p>
        </div>
      </section>

      {/* VISION MISSION */}
      <section className="vm">
        <h2 className="vmTitle">VISION AND MISSION OF THE COLLEGE</h2>

        <div className="vmContent">
          <div>
            <h3>VISION</h3>
            <p>
              To develop into a leading world class Technological University
              consisting of Schools of Excellence in various disciplines with a
              co-existent Centre for Engineering Solutions Development for
              world-wide clientele.
            </p>
          </div>

          <div>
            <h3>MISSION</h3>
            <p>
              To provide all necessary inputs to the students for them to grow
              into knowledge engineers and scientists attaining.
            </p>

            <ul>
              <li>Excellence in domain knowledge- practice and theory.</li>
              <li>Excellence in co-curricular and Extra curricular talents.</li>
              <li>Excellence in character and personality.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          background: #f5f5f5;
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 40px;
          background: #ffffff;
          border-bottom: 2px solid #ddd;
        }

        .logo {
          font-size: 32px;
          font-weight: bold;
          color: #0a7;
        }

        .title {
          text-align: center;
        }

        .title h1 {
          margin: 0;
          font-size: 22px;
        }

        .title p {
          margin: 0;
          font-size: 13px;
        }

        .badges {
          font-weight: bold;
          color: #0a7;
        }

        .about {
          display: flex;
          gap: 40px;
          padding: 40px;
          background: #555;
          color: #fff;
        }

        .aboutImg img {
          width: 320px;
          height: 220px;
          object-fit: cover;
        }

        .aboutText {
          max-width: 500px;
        }

        .aboutText h2 {
          border-bottom: 2px solid #fff;
          display: inline-block;
          margin-bottom: 15px;
        }

        .vm {
          padding: 40px;
          background: #fff;
        }

        .vmTitle {
          text-align: center;
          margin-bottom: 30px;
        }

        .vmContent {
          display: flex;
          gap: 40px;
        }

        .vmContent h3 {
          color: #008080;
        }

        ul {
          margin-top: 10px;
        }

        li {
          margin-bottom: 8px;
        }

        @media (max-width: 768px) {
          .about,
          .vmContent {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}