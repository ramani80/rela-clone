'use client';
export default function ProductPage() {
  return (
    <>
      <div className="product-container">
        {/* Left – Image */}
        <div className="image-section">
          <button className="zoom-btn">🔍</button>
          <img
            src="/brainsense.png"
            alt="Brainsense BCI"
            className="product-image"
          />
        </div>

        {/* Right – Details */}
        <div className="details-section">
          <div className="title-row">
            <h1>Brainsense – BCI</h1>
            <div className="nav-buttons">
              <button>‹</button>
              <button>›</button>
            </div>
          </div>

          <p className="price">
            ₹15,000.00 <span>Exc Tax</span>
          </p>

          <p className="description">
            Brainsense is a Brain Computer Interface (BCI) device for Student,
            Researchers and Wellness Community. A sleek, single-channel,
            wireless headset that monitors your Brain Activity and translates
            EEG into meaningful data you can understand.
          </p>

          <div className="section">
            <h3>Features:</h3>
            <p className="highlight">
              Meditation Practice – YOGA | Focus Practice | Visualizing Brain
              waves (EEG)
            </p>
          </div>

          <div className="section">
            <h3>Compatibility:</h3>
            <p className="highlight">
              Windows | Android | Raspberry Pi | Arduino
            </p>
          </div>

          <p className="shipping">
            Shipping : 4 to 8 working days from the Date of purchase
          </p>

          <p className="warranty">
            Warranty : 3 Months against Manufacturing defects
          </p>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .product-container {
          display: flex;
          padding: 40px;
          gap: 60px;
          font-family: Arial, sans-serif;
        }

        .image-section {
          position: relative;
          width: 45%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .product-image {
          max-width: 100%;
          border-radius: 6px;
        }

        .zoom-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          border: none;
          background: #eee;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
        }

        .details-section {
          width: 55%;
        }

        .title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .title-row h1 {
          font-size: 28px;
          color: #003366;
        }

        .nav-buttons button {
          margin-left: 6px;
          border: 1px solid #ccc;
          background: white;
          padding: 6px 10px;
          cursor: pointer;
          border-radius: 50%;
        }

        .price {
          font-size: 26px;
          color: #ff2d2d;
          margin: 15px 0;
        }

        .price span {
          font-size: 16px;
          margin-left: 6px;
        }

        .description {
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .section h3 {
          margin-bottom: 6px;
        }

        .highlight {
          color: #d40000;
          margin-bottom: 16px;
        }

        .shipping {
          color: green;
          margin-top: 15px;
          font-weight: 500;
        }

        .warranty {
          color: green;
          margin-top: 8px;
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .product-container {
            flex-direction: column;
          }

          .image-section,
          .details-section {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
