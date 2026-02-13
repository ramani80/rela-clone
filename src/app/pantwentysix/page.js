'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="supportWrapper">
      <section className="supportSection">
        {/* Left Image */}
        <div className="imageContainer">
          <Image
            src="https://images.unsplash.com/photo-1581090700227-4c4f50c6b7a8"
            alt="Support"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Content */}
        <div className="contentContainer">
          <h2>
            Looking for Support?
            <span className="underline"></span>
          </h2>

          <p>
            Reach out to us for any inquiries, feedback, or assistance you may
            need. We're here to help!
          </p>

          <button className="contactBtn">
            Contact Us <span>›</span>
          </button>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .supportWrapper {
          background: #0c3c69;
          padding: 80px 60px;
        }

        .supportSection {
          display: flex;
          background: #ffffff;
          min-height: 400px;
        }

        .imageContainer {
          flex: 1;
          position: relative;
        }

        .contentContainer {
          flex: 1;
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #f5f5f5;
        }

        .contentContainer h2 {
          font-size: 36px;
          color: #0c3c69;
          margin-bottom: 20px;
          position: relative;
        }

        .underline {
          display: block;
          width: 70px;
          height: 3px;
          background: #0c3c69;
          margin-top: 10px;
        }

        .contentContainer p {
          font-size: 18px;
          color: #333;
          margin-bottom: 30px;
          line-height: 1.6;
          max-width: 450px;
        }

        .contactBtn {
          background: #f58220;
          color: #ffffff;
          border: none;
          padding: 14px 28px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          width: fit-content;
          transition: 0.3s ease;
        }

        .contactBtn span {
          margin-left: 8px;
          font-size: 18px;
        }

        .contactBtn:hover {
          background: #d96d0f;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .supportSection {
            flex-direction: column;
          }

          .contentContainer {
            padding: 40px 20px;
          }

          .contentContainer h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
