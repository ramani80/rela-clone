'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="wrapper">
      <section className="newsSection">
        <h2 className="title">
          Learn about What's New at CTS
          <span className="underline"></span>
        </h2>

        <div className="grid">
          {/* Left Large Card */}
          <div className="card largeCard">
            <div className="imageBox largeImage">
              <Image
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
                alt="APR"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <a href="#" className="cardLink">
              Understanding Absolute Pull Range (APR)
            </a>
            <span className="arrow">↘</span>
          </div>

          {/* Right Top Card */}
          <div className="card smallCard">
            <div className="imageBox smallImage">
              <Image
                src="https://images.unsplash.com/photo-1581091870627-3f89f6b2c7b4"
                alt="Oscillator"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="textContent">
              <h3>Miniaturized Clock Oscillator: Series 616</h3>
            </div>
            <span className="arrow">↘</span>
          </div>

          {/* Right Bottom Card */}
          <div className="card smallCard">
            <div className="imageBox smallImage">
              <Image
                src="https://images.unsplash.com/photo-1508612761958-e931b117b34e"
                alt="Radar"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="textContent">
              <h3>
                MTB/MXB Band Pass Filters with X-Band Capabilities
              </h3>
            </div>
            <span className="arrow">↘</span>
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .wrapper {
          background: #f2f2f2;
          padding: 60px;
        }

        .title {
          font-size: 32px;
          color: #0c3c69;
          margin-bottom: 40px;
          position: relative;
        }

        .underline {
          display: block;
          width: 80px;
          height: 3px;
          background: #0c3c69;
          margin-top: 10px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 30px;
        }

        .card {
          background: #ffffff;
          padding: 25px;
          position: relative;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .largeCard {
          grid-row: span 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .imageBox {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .largeImage {
          height: 250px;
          margin-bottom: 20px;
        }

        .smallImage {
          height: 120px;
          width: 150px;
          float: left;
          margin-right: 20px;
        }

        .cardLink {
          font-size: 20px;
          color: #0c3c69;
          text-decoration: underline;
          font-weight: 600;
        }

        .textContent h3 {
          font-size: 20px;
          color: #0c3c69;
        }

        .arrow {
          position: absolute;
          bottom: 15px;
          right: 20px;
          font-size: 20px;
          color: #0c3c69;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }

          .largeCard {
            grid-row: span 1;
          }

          .smallImage {
            width: 100%;
            height: 180px;
            float: none;
            margin-bottom: 15px;
          }
        }
      `}</style>
    </div>
  );
}
