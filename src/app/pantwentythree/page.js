'use client';
export default function Home() {
  return (
    <div className="container">
      <h1 className="title">
        Master the Latest Tools <span>in Technology</span>
      </h1>

      <p className="subtitle">
        "Accelerate Your Career with In-Demand Tools and Technologies through Our Comprehensive Learning Programs."
      </p>

      <div className="logo-section">
        <div className="logo-row">
          <img src="/stm32.png" alt="STM32" />
          <img src="/keil.png" alt="Keil" />
          <img src="/ros.png" alt="ROS" />
          <img src="/esp32.png" alt="ESP32" />
          <img src="/freertos.png" alt="FreeRTOS" />
          <img src="/vivado.png" alt="Vivado" />
        </div>

        <div className="logo-row">
          <img src="/tensorflow.png" alt="TensorFlow" />
          <img src="/mysql.png" alt="MySQL" />
          <img src="/powerbi.png" alt="PowerBI" />
          <img src="/numpy.png" alt="NumPy" />
          <img src="/tableau.png" alt="Tableau" />
          <img src="/raspberrypi.png" alt="Raspberry Pi" />
          <img src="/mongodb.png" alt="MongoDB" />
          <img src="/excel.png" alt="Excel" />
          <img src="/kotlin.png" alt="Kotlin" />
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          min-height: 100vh;
          background-color: #f3f3f6;
          padding: 60px 20px;
          text-align: center;
        }

        .title {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #222;
        }

        .title span {
          background: linear-gradient(90deg, #7b5cff, #ff7a7a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 16px;
          color: #555;
          margin-bottom: 50px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .logo-section {
          max-width: 1200px;
          margin: auto;
        }

        .logo-row {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 40px;
        }

        .logo-row img {
          height: 60px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .logo-row img:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .title {
            font-size: 28px;
          }

          .subtitle {
            font-size: 14px;
          }

          .logo-row img {
            height: 45px;
          }
        }
      `}</style>
    </div>
  );
}
